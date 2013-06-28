#!/usr/bin/env ruby

# This file makes it easy to update the fake GHAPI with responses from the actual GitHub API.
# Run this file like this:
#
#   $ bundle # installs the gems directly from GitHub (needed)
#   $ bundle exec ruby gh_api_make.rb TOKEN
#
# This will output a bunch of JS into gh_objects.js

require 'octokit'
require 'json'
require 'base64'

module FaradayMiddleware
  class LogRequest

    def self.last_request
      @@requests.last
    end

    def initialize(app)
      @app = app
      @@requests = []
    end

    def call(env)
      @@requests << request_hash(env[:method], env[:url].to_s)
      @app.call(env).on_complete {}
    end
  end
end

Octokit.configure do |c|
  c.faraday_config { |f| f.use FaradayMiddleware::LogRequest }
end

@repo_path = "runemadsen/basic-sample"
@client = Octokit::Client.new(:login => "runemadsen", :oauth_token => ARGV[0])

# Helpers
# ---------------------------------------------------------------------------

def load_content(hash, path, branch)
  puts "-> loading #{path} of #{branch}"
  hash[path] = http_hash(@client.contents(@repo_path, :path => path, :ref => branch))
  # if is dir
  if hash[path][:response].is_a? Array
    hash[path][:response].each do |file|
      load_content(hash, file.path, branch)
    end
  end
  hash
end

def last_request
  FaradayMiddleware::LogRequest.last_request
end

def request_hash(method, url)
  {
    :method => method,
    :url => url
  }
end

def clone_last_request(extras)
  new_req = Marshal.load(Marshal.dump(last_request))
  new_req[:url].gsub!(extras[:remove], "") if extras[:remove]
  new_req[:url] += extras[:add] if extras[:add]
  new_req[:url] = extras[:replace] if extras[:replace]
  new_req
end

def clone_request_without(req, remove)
  new_req =  Marshal.load(Marshal.dump(req))

  new_req
end

def http_hash(response)
  {
    :response => response,
    :requests => [last_request]
  }
end

def write_test_on_object(obj)
  output = ""
  if(obj.is_a?(Hash) && obj.has_key?(:response) && obj.has_key?(:requests))
    obj[:requests].each do |http|
      output += <<-eos
  it("should stub [#{http[:method]}] #{http[:url]}", function()
  {
    $.ajax({
      url: "#{http[:url]}",
      type: "#{http[:method]}"
    });
    GHAPI.respond();
    expect(GHAPI.lastRequest().responseText).toEqual(JSON.stringify(#{obj[:response].to_json}));
  });
      eos
    end
  else
    obj.each { |k,v|
      output += write_test_on_object(v);
    }
  end
  output
end

# Go Baby Go!
# ---------------------------------------------------------------------------

# TODO add all main routes without per_page

file_objects = {}

puts "Loading user data"
file_objects[:users] = {}
file_objects[:users][:show] = http_hash(Octokit.user("runemadsen"))

puts "Loading orgs data"
file_objects[:orgs] = {}
file_objects[:orgs][:index] = http_hash(@client.organizations("runemadsen", :per_page => 3))
file_objects[:orgs][:index][:requests] << clone_last_request(:remove => "?per_page=3")
file_objects[:orgs][:index][:requests] << clone_last_request(:replace => "https://api.github.com/user/orgs")
file_objects[:orgs][:show] = http_hash(@client.organization(file_objects[:orgs][:index][:response].first.login))

# TODO: Make sure that basic-sample is in there!
puts "Loading repo data"
file_objects[:repos] = {}
file_objects[:repos][:index] = http_hash(@client.repos("runemadsen", :per_page => 3))
file_objects[:repos][:index][:requests] << clone_last_request(:replace => "https://api.github.com/user/repos?per_page=1000&type=all&sort=updated")
file_objects[:repos][:show] = http_hash(@client.repo(@repo_path))
file_objects[:repos][:org_index] = http_hash(@client.org_repos(file_objects[:orgs][:index][:response].first.login, :per_page => 3))

puts "Loading branches data"
file_objects[:branches] = {}
file_objects[:branches][:index] = http_hash(@client.branches(@repo_path))

# List root of all branches and follow down the rabbit hole
puts "Going down the contents rabbit hole"
file_objects[:contents] = {}
file_objects[:contents][:show] = {}
file_objects[:branches][:index][:response].each do |branch|
  file_objects[:contents][:show][branch.name] = load_content({}, "/", branch.name)
end

# update a file and save in response
puts "Updating README.md"
first_file = file_objects[:contents][:show]["master"]["README.md"][:response]
file_objects[:contents][:create] = http_hash(
  @client.update_contents(
    @repo_path,
    first_file["path"],
    "Updating README.md",
    first_file["sha"],
    Base64.decode64(first_file.content) + "!",
    :branch => "master"
  )
)

# grab tree of master
puts "Loading trees data"
file_objects[:trees] = {}
file_objects[:trees][:show] = http_hash(@client.tree(@repo_path, "master"))

puts "Writing Objects to File"
File.open("gh_objects.js", 'w') { |file|
  file.puts "var GHObjects = #{JSON.pretty_generate(file_objects)};"
}

puts "Writing Tests to File"
File.open("../spec/gh_api_spec.js", 'w') { |file|

  # write header
  file.puts <<-eos
/* GHAPI Stubbing
------------------------------------------------------------------- */

describe("GHAPI", function() {

  beforeEach(function() {
    GHAPI.fake(true);
  });

  afterEach(function() {
    GHAPI.unfake();
  });
  eos

  # write tests
  output = write_test_on_object(file_objects)
  file.puts output

  # end header
  file.puts "});"
}
#!/usr/bin/env ruby

# This file makes it easy to update the fake GHAPI with responses from the actual GitHub API.
# Run this file like this:
#
#   $ bundle # installs the gems directly from GitHub (needed)
#   $ bundle exec ruby generate_gh_api.rb TOKEN
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
      method = env[:method]
      url = env[:url].to_s
      url.gsub!(/per_page=3/, "")
      url.gsub!(/\?$/, "")

      @@requests << {
        :method => method,
        :url => url
      }

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
  hash[path] = get_hash_with_call_data(@client.contents(@repo_path, :path => path, :ref => branch))
  # if is dir
  if hash[path][:response].is_a? Array
    hash[path][:response].each do |file|
      load_content(hash, file.path, branch)
    end
  end
  hash
end

def get_hash_with_call_data(response)
  {
    :response => response,
    :call => FaradayMiddleware::LogRequest.last_request
  }
end

# Go Baby Go!
# ---------------------------------------------------------------------------

file_objects = {}

puts "Loading user data"
file_objects[:users] = {}
file_objects[:users][:show] = get_hash_with_call_data(Octokit.user("runemadsen"))

puts "Loading orgs data"
file_objects[:orgs] = {}
file_objects[:orgs][:index] = get_hash_with_call_data(@client.organizations("runemadsen", :per_page => 3))
file_objects[:orgs][:show] = get_hash_with_call_data(@client.organization(file_objects[:orgs][:index][:response].first.login))

# TODO: Make sure that basic-sample is in there!
puts "Loading repo data"
file_objects[:repos] = {}
file_objects[:repos][:index] = get_hash_with_call_data(@client.repos("runemadsen", :per_page => 3))
file_objects[:repos][:show] = get_hash_with_call_data(@client.repo(@repo_path))
file_objects[:repos][:org_index] = get_hash_with_call_data(@client.org_repos(file_objects[:orgs][:index][:response].first.login, :per_page => 3))

puts "Loading branches data"
file_objects[:branches] = {}
file_objects[:branches][:index] = get_hash_with_call_data(@client.branches(@repo_path))

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
file_objects[:contents][:create] = get_hash_with_call_data(
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
file_objects[:trees][:show] = get_hash_with_call_data(@client.tree(@repo_path, "master"))

puts "Writing to file"
File.open("gh_objects.js", 'w') { |file|
  file.puts "var GHObjects = #{JSON.pretty_generate(file_objects)};"
}
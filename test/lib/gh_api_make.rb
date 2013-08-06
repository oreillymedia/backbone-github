#!/usr/bin/env ruby

# This file makes it easy to update the fake GHAPI with responses from the actual GitHub API.
# Run this file like this:
#
#   $ ruby gh_api_make.rb TOKEN
#
# The token needs to be the token of the atlasservers user on GitHub
# This will output a bunch of JS into gh_objects.js

# Requires
# ---------------------------------------------------------------------------

require 'rubygems'
require 'faraday'
require 'faraday_middleware'
require 'json'
require 'base64'
require 'uri'

# Vars
# ---------------------------------------------------------------------------

GH_URL = "https://api.github.com"
GH_USER = "atlasservers"
GH_ORG = "oreillymedia"
GH_REPO = "basic-sample"

@conn = Faraday.new(:url => GH_URL) do |faraday|
  faraday.use     FaradayMiddleware::EncodeJson
  faraday.use     FaradayMiddleware::ParseJson
  #faraday.response :logger                  # log requests to STDOUT
  faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
end

# Helpers
# ---------------------------------------------------------------------------

def call(req)
  puts "Calling #{req[:url]}"
  response = @conn.send(req[:method] || "get") do |fara|
    fara.url req[:url]
    fara.body = req[:options]
    fara.headers['Authorization'] = "token #{ARGV[0]}"
  end
  response.body
end

def fill(obj)
  if obj.is_a?(Hash) && obj.has_key?(:request)
    obj[:response] = call(obj[:request])
  elsif obj.is_a?(Hash) && obj.keys.size > 0
    obj.each { |k,v| fill(v) }
  end
end

def test(obj)
  output = ""
  if obj.is_a?(Hash) && obj.has_key?(:request) && obj.has_key?(:response)

    all_requests = [obj[:request]]
    all_requests += obj[:stubs] if obj.has_key?(:stubs)

    all_requests.each do |req|
      url_to_use =req[:regexp] && req[:test] ? req[:test] : req[:url]
      absolute_url = URI.join(GH_URL, url_to_use)
      method = req[:method] || "get"
      output += <<-eos
  it("should stub [#{method}] #{absolute_url}", function()
  {
    $.ajax({
      url: "#{absolute_url}",
      type: "#{method}"
    });
    GHAPI.respond();
    expect(GHAPI.lastRequest().responseText).toEqual(JSON.stringify(#{obj[:response].to_json}));
  });
      eos
    end

  elsif obj.is_a?(Hash) &&obj.keys.size > 0
    obj.each { |k,v|
      output += test(v)
    }
  end
  output
end

def load_content(hash, path, branch)
  hash[path] = {
    :request => {
      :url => "/repos/#{GH_USER}/#{GH_REPO}/contents/#{path}?ref=#{branch}"
    }
  }
  hash[path][:response] = call(hash[path][:request])

  # if is dir
  if hash[path][:response].is_a? Array
    hash[path][:response].each do |file|
      load_content(hash, file["path"], branch)
    end
  end
  hash
end

# Setup
# ---------------------------------------------------------------------------

ghobjects = {
  :users => {
    :show => {
      :request => {
        :url => "/users/#{GH_USER}"
      },
      :stubs => [
        { :url => "/user" }
      ]
    }
  },
  :orgs => {
    :index => {
      :request => {
        :url => "/users/#{GH_USER}/orgs"
      },
      :stubs => [
        { :url => "/user/orgs" }
      ]
    },
    :show => {
      :request => {
        :url => "/orgs/#{GH_ORG}"
      }
    }
  },
  :repos => {
    :index => {
      :request => {
        :url => "/users/#{GH_USER}/repos?per_page=3"
      },
      :stubs => [
        {
          :url => "\/users\/#{GH_USER}\/repos\?",
          :regexp => true,
          :test => "/users/#{GH_USER}/repos?does=this&regexp=work"
        },
        {
          :url => "\/user\/repos\?",
          :regexp => true,
          :test => "/user/repos?does=this&regexp=work"
        }
      ]
    },
    :org_index => {
      :request => {
        :url => "/orgs/#{GH_ORG}/repos?per_page=3"
      },
      :stubs => [
        {
          :url => "\/orgs\/#{GH_ORG}\/repos\?",
          :regexp => true
        }
      ]
    },
    :show => {
      :request => {
        :url => "/repos/#{GH_USER}/#{GH_REPO}"
      }
    }
  },
  :branches => {
    :index => {
      :request => {
        :url => "/repos/#{GH_USER}/#{GH_REPO}/branches"
      }
    }
  },
  :collaborators => {
    :index => {
      :request => {
        :url => "/repos/#{GH_USER}/#{GH_REPO}/collaborators"
      }
    }
  },
  :trees => {
    :show => {
      :request => {
        :url => "/repos/#{GH_USER}/#{GH_REPO}/git/trees/master"
      }
    }
  },
  :contents => {
    :show => {
      # this will load automatically
    }
  }
}

# load all routes
fill(ghobjects)

# load contents
puts "Going down the contents rabbit hole"
ghobjects[:branches][:index][:response].each do |branch|
  ghobjects[:contents][:show][branch["name"]] = load_content({}, "", branch["name"])
end

# update a file and save in response
puts "Updating README.md"
readme = ghobjects[:contents][:show]["master"]["README.md"][:response]
ghobjects[:contents][:create] = {
  :request => {
    :url => "/repos/#{GH_USER}/#{GH_REPO}/contents/#{readme["path"]}",
    :method => "put",
    :options => {
      :sha => readme["sha"],
      :content => Base64.encode64("The time is now #{Time.now}"),
      :message => "Updating README"
    }
  }
}
ghobjects[:contents][:create][:response] = call(ghobjects[:contents][:create][:request])

puts "Writing Objects to File"
File.open("gh_objects.js", 'w') { |file|
  file.puts "var GHObjects = #{JSON.pretty_generate(ghobjects)};"
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
  file.puts test(ghobjects)

  # end header
  file.puts "});"
}
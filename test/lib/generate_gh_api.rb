#!/usr/bin/env ruby

# This file makes it easy to update the fake GHAPI with responses from the actual GitHub API.
# Run this file like this:
#
#   $ ruby generate_gh_api.rb TOKEN
#
# This will output a bunch of JS you can copy into gh_api.js

require 'octokit'
require 'json'

# Helpers
# ---------------------------------------------------------------------------

def to_var(var_name, var_value)
  "var #{var_name} = #{JSON.pretty_generate(var_value)};"
end


# Go Baby Go!
# ---------------------------------------------------------------------------

client = Octokit::Client.new(:login => "runemadsen", :oauth_token => ARGV[0])

# show user
puts "Loading users.show"
users_show = Octokit.user "runemadsen"

# index orgs
puts "Loading orgs.index"
orgs_index = client.organizations("runemadsen", :per_page => 3)

# show the first of those orgs
puts "Loading orgs.show"
orgs_show = client.organization(orgs_index.first.login)

# grab 3 repos from personal
puts "Loading repos.index"
repos_index = client.repos("runemadsen", :per_page => 3)

# show single repo
puts "Loading repos.show"
repos_show = client.repo(repos_index.first.full_name)

# grab 3 repos from organization
puts "Loading org_repos.index"
repos_org_index = client.org_repos(orgs_index.first.login, :per_page => 3)

# show repo

# grab an error response

# contents create

# contents list and follow tree

# show tree

# also branches?

File.open("ghtest.js", 'w') { |file|

  # create GHResponses
  file.puts to_var("GHResponses", {})

  # create GHResponses.users
  file.puts to_var("GHResponses.users", {})
  file.puts to_var("GHResponses.users.show", users_show)

  # create GHResponses.orgs
  file.puts to_var("GHResponses.orgs", {})
  file.puts to_var("GHResponses.orgs.index", orgs_index)
  file.puts to_var("GHResponses.orgs.show", orgs_show)

  # create GHResponses.repos
  file.puts to_var("GHResponses.repos", {})
  file.puts to_var("GHResponses.repos.index", repos_index)
  file.puts to_var("GHResponses.repos.org_index", repos_org_index)
  file.puts to_var("GHResponses.repos.show", repos_show)
}

















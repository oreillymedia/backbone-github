#!/usr/bin/env ruby

# This file makes it easy to update the fake GHAPI with responses from the actual GitHub API.
# Run this file like this:
#
#   $ ruby generate_gh_api.rb TOKEN
#
# This will output a bunch of JS you can copy into gh_api.js

require 'octokit'
require 'json'

@repo_path = "runemadsen/basic-sample"
@client = Octokit::Client.new(:login => "runemadsen", :oauth_token => ARGV[0])

# Helpers
# ---------------------------------------------------------------------------

def to_var(var_name, var_value)
  "var #{var_name} = #{JSON.pretty_generate(var_value)};"
end

def load_content(hash, path, branch)
  puts "-> loading #{path} of #{branch}"
  hash[path] = @client.contents(@repo_path, :path => path, :ref => branch)

  # if is dir
  if hash[path].is_a? Array
    hash[path].each do |file|
      load_content(hash, file.path, branch)
    end
  end
  hash
end

# Go Baby Go!
# ---------------------------------------------------------------------------

# show user
puts "Loading users.show"
users_show = Octokit.user "runemadsen"

# index orgs
puts "Loading orgs.index"
orgs_index = @client.organizations("runemadsen", :per_page => 3)

# show the first of those orgs
puts "Loading orgs.show"
orgs_show = @client.organization(orgs_index.first.login)

# grab 3 repos from personal
# TODO: Make sure that basic-sample is in there!
puts "Loading repos.index"
repos_index = @client.repos("runemadsen", :per_page => 3)

# show single repo
puts "Loading repos.show"
repos_show = @client.repo(@repo_path)

# grab 3 repos from organization
puts "Loading org_repos.index"
repos_org_index = @client.org_repos(orgs_index.first.login, :per_page => 3)

# grab branches
puts "Loading branches.index"
branches_index = @client.branches(@repo_path)

# List root of all branches and follow down the rabbit hole
puts "Going down the contents rabbit hole"
contents = {}
branches_index.each do |branch|
  contents[branch.name] = load_content({}, "/", branch.name)
end

# grab tree of first folder in master
puts "Loading trees.show"
trees_show = @client.tree(@repo_path, contents["master"]["/"].find {|h| h.type == "dir"}.sha )

# grab an error response

puts "Writing to file"

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

  # create GHResponses.branches
  file.puts to_var("GHResponses.branches", {})
  file.puts to_var("GHResponses.branches.index", branches_index)

  # create GHResponses.contents
  file.puts to_var("GHResponses.contents", contents)

  # create GHResponses.tree
  file.puts to_var("GHResponses.trees", {})
  file.puts to_var("GHResponses.trees.show", trees_show)
}

















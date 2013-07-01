var GHObjects = {
  "users": {
    "show": {
      "request": {
        "url": "/users/atlasservers"
      },
      "stubs": [
        {
          "url": "/user"
        }
      ],
      "response": {
        "login": "atlasservers",
        "id": 2284965,
        "avatar_url": "https://secure.gravatar.com/avatar/33ae9fd93e4d5c771c1bab29c8705106?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "33ae9fd93e4d5c771c1bab29c8705106",
        "url": "https://api.github.com/users/atlasservers",
        "html_url": "https://github.com/atlasservers",
        "followers_url": "https://api.github.com/users/atlasservers/followers",
        "following_url": "https://api.github.com/users/atlasservers/following{/other_user}",
        "gists_url": "https://api.github.com/users/atlasservers/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/atlasservers/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/atlasservers/subscriptions",
        "organizations_url": "https://api.github.com/users/atlasservers/orgs",
        "repos_url": "https://api.github.com/users/atlasservers/repos",
        "events_url": "https://api.github.com/users/atlasservers/events{/privacy}",
        "received_events_url": "https://api.github.com/users/atlasservers/received_events",
        "type": "User",
        "public_repos": 2,
        "followers": 0,
        "following": 0,
        "created_at": "2012-09-05T13:22:09Z",
        "updated_at": "2013-07-01T19:07:09Z",
        "public_gists": 0
      }
    }
  },
  "orgs": {
    "index": {
      "request": {
        "url": "/users/atlasservers/orgs"
      },
      "stubs": [
        {
          "url": "/user/orgs"
        }
      ],
      "response": [

      ]
    },
    "show": {
      "request": {
        "url": "/orgs/oreillymedia"
      },
      "response": {
        "login": "oreillymedia",
        "id": 382513,
        "url": "https://api.github.com/orgs/oreillymedia",
        "repos_url": "https://api.github.com/orgs/oreillymedia/repos",
        "events_url": "https://api.github.com/orgs/oreillymedia/events",
        "members_url": "https://api.github.com/orgs/oreillymedia/members{/member}",
        "public_members_url": "https://api.github.com/orgs/oreillymedia/public_members{/member}",
        "avatar_url": "https://secure.gravatar.com/avatar/457e7246de07d972d6aaa878c6ceb395?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png",
        "name": "O'Reilly Media, Inc.",
        "company": null,
        "blog": "http://oreilly.com",
        "location": "Sebastopol, CA",
        "email": null,
        "public_repos": 22,
        "public_gists": 0,
        "followers": 1,
        "following": 0,
        "html_url": "https://github.com/oreillymedia",
        "created_at": "2010-08-31T20:42:21Z",
        "updated_at": "2013-07-01T18:49:47Z",
        "type": "Organization",
        "total_private_repos": 72,
        "owned_private_repos": 72,
        "private_gists": 0,
        "disk_usage": 9201244,
        "collaborators": 0,
        "billing_email": "developers@oreilly.com",
        "plan": {
          "name": "platinum",
          "space": 62914560,
          "private_repos": 125
        }
      }
    }
  },
  "repos": {
    "index": {
      "request": {
        "url": "/users/atlasservers/repos?per_page=3"
      },
      "stubs": [
        {
          "url": "/users/atlasservers/repos?",
          "regexp": true,
          "test": "/users/atlasservers/repos?does=this&regexp=work"
        },
        {
          "url": "/user/repos?",
          "regexp": true,
          "test": "/user/repos?does=this&regexp=work"
        }
      ],
      "response": [
        {
          "id": 11101242,
          "name": "another-sample",
          "full_name": "atlasservers/another-sample",
          "owner": {
            "login": "atlasservers",
            "id": 2284965,
            "avatar_url": "https://secure.gravatar.com/avatar/33ae9fd93e4d5c771c1bab29c8705106?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
            "gravatar_id": "33ae9fd93e4d5c771c1bab29c8705106",
            "url": "https://api.github.com/users/atlasservers",
            "html_url": "https://github.com/atlasservers",
            "followers_url": "https://api.github.com/users/atlasservers/followers",
            "following_url": "https://api.github.com/users/atlasservers/following{/other_user}",
            "gists_url": "https://api.github.com/users/atlasservers/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/atlasservers/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/atlasservers/subscriptions",
            "organizations_url": "https://api.github.com/users/atlasservers/orgs",
            "repos_url": "https://api.github.com/users/atlasservers/repos",
            "events_url": "https://api.github.com/users/atlasservers/events{/privacy}",
            "received_events_url": "https://api.github.com/users/atlasservers/received_events",
            "type": "User"
          },
          "private": false,
          "html_url": "https://github.com/atlasservers/another-sample",
          "description": "This is another sample",
          "fork": false,
          "url": "https://api.github.com/repos/atlasservers/another-sample",
          "forks_url": "https://api.github.com/repos/atlasservers/another-sample/forks",
          "keys_url": "https://api.github.com/repos/atlasservers/another-sample/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/atlasservers/another-sample/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/atlasservers/another-sample/teams",
          "hooks_url": "https://api.github.com/repos/atlasservers/another-sample/hooks",
          "issue_events_url": "https://api.github.com/repos/atlasservers/another-sample/issues/events{/number}",
          "events_url": "https://api.github.com/repos/atlasservers/another-sample/events",
          "assignees_url": "https://api.github.com/repos/atlasservers/another-sample/assignees{/user}",
          "branches_url": "https://api.github.com/repos/atlasservers/another-sample/branches{/branch}",
          "tags_url": "https://api.github.com/repos/atlasservers/another-sample/tags",
          "blobs_url": "https://api.github.com/repos/atlasservers/another-sample/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/atlasservers/another-sample/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/atlasservers/another-sample/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/atlasservers/another-sample/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/atlasservers/another-sample/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/atlasservers/another-sample/languages",
          "stargazers_url": "https://api.github.com/repos/atlasservers/another-sample/stargazers",
          "contributors_url": "https://api.github.com/repos/atlasservers/another-sample/contributors",
          "subscribers_url": "https://api.github.com/repos/atlasservers/another-sample/subscribers",
          "subscription_url": "https://api.github.com/repos/atlasservers/another-sample/subscription",
          "commits_url": "https://api.github.com/repos/atlasservers/another-sample/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/atlasservers/another-sample/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/atlasservers/another-sample/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/atlasservers/another-sample/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/atlasservers/another-sample/contents/{+path}",
          "compare_url": "https://api.github.com/repos/atlasservers/another-sample/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/atlasservers/another-sample/merges",
          "archive_url": "https://api.github.com/repos/atlasservers/another-sample/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/atlasservers/another-sample/downloads",
          "issues_url": "https://api.github.com/repos/atlasservers/another-sample/issues{/number}",
          "pulls_url": "https://api.github.com/repos/atlasservers/another-sample/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/atlasservers/another-sample/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/atlasservers/another-sample/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/atlasservers/another-sample/labels{/name}",
          "created_at": "2013-07-01T16:52:50Z",
          "updated_at": "2013-07-01T16:52:50Z",
          "pushed_at": "2013-07-01T16:52:50Z",
          "git_url": "git://github.com/atlasservers/another-sample.git",
          "ssh_url": "git@github.com:atlasservers/another-sample.git",
          "clone_url": "https://github.com/atlasservers/another-sample.git",
          "svn_url": "https://github.com/atlasservers/another-sample",
          "homepage": null,
          "size": 0,
          "watchers_count": 0,
          "language": null,
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 0,
          "mirror_url": null,
          "open_issues_count": 0,
          "forks": 0,
          "open_issues": 0,
          "watchers": 0,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": false,
            "push": false,
            "pull": true
          }
        },
        {
          "id": 11101227,
          "name": "basic-sample",
          "full_name": "atlasservers/basic-sample",
          "owner": {
            "login": "atlasservers",
            "id": 2284965,
            "avatar_url": "https://secure.gravatar.com/avatar/33ae9fd93e4d5c771c1bab29c8705106?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
            "gravatar_id": "33ae9fd93e4d5c771c1bab29c8705106",
            "url": "https://api.github.com/users/atlasservers",
            "html_url": "https://github.com/atlasservers",
            "followers_url": "https://api.github.com/users/atlasservers/followers",
            "following_url": "https://api.github.com/users/atlasservers/following{/other_user}",
            "gists_url": "https://api.github.com/users/atlasservers/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/atlasservers/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/atlasservers/subscriptions",
            "organizations_url": "https://api.github.com/users/atlasservers/orgs",
            "repos_url": "https://api.github.com/users/atlasservers/repos",
            "events_url": "https://api.github.com/users/atlasservers/events{/privacy}",
            "received_events_url": "https://api.github.com/users/atlasservers/received_events",
            "type": "User"
          },
          "private": false,
          "html_url": "https://github.com/atlasservers/basic-sample",
          "description": "A repo used to test the GitHub API",
          "fork": false,
          "url": "https://api.github.com/repos/atlasservers/basic-sample",
          "forks_url": "https://api.github.com/repos/atlasservers/basic-sample/forks",
          "keys_url": "https://api.github.com/repos/atlasservers/basic-sample/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/atlasservers/basic-sample/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/atlasservers/basic-sample/teams",
          "hooks_url": "https://api.github.com/repos/atlasservers/basic-sample/hooks",
          "issue_events_url": "https://api.github.com/repos/atlasservers/basic-sample/issues/events{/number}",
          "events_url": "https://api.github.com/repos/atlasservers/basic-sample/events",
          "assignees_url": "https://api.github.com/repos/atlasservers/basic-sample/assignees{/user}",
          "branches_url": "https://api.github.com/repos/atlasservers/basic-sample/branches{/branch}",
          "tags_url": "https://api.github.com/repos/atlasservers/basic-sample/tags",
          "blobs_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/atlasservers/basic-sample/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/atlasservers/basic-sample/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/atlasservers/basic-sample/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/atlasservers/basic-sample/languages",
          "stargazers_url": "https://api.github.com/repos/atlasservers/basic-sample/stargazers",
          "contributors_url": "https://api.github.com/repos/atlasservers/basic-sample/contributors",
          "subscribers_url": "https://api.github.com/repos/atlasservers/basic-sample/subscribers",
          "subscription_url": "https://api.github.com/repos/atlasservers/basic-sample/subscription",
          "commits_url": "https://api.github.com/repos/atlasservers/basic-sample/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/atlasservers/basic-sample/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/atlasservers/basic-sample/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/atlasservers/basic-sample/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/atlasservers/basic-sample/contents/{+path}",
          "compare_url": "https://api.github.com/repos/atlasservers/basic-sample/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/atlasservers/basic-sample/merges",
          "archive_url": "https://api.github.com/repos/atlasservers/basic-sample/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/atlasservers/basic-sample/downloads",
          "issues_url": "https://api.github.com/repos/atlasservers/basic-sample/issues{/number}",
          "pulls_url": "https://api.github.com/repos/atlasservers/basic-sample/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/atlasservers/basic-sample/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/atlasservers/basic-sample/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/atlasservers/basic-sample/labels{/name}",
          "created_at": "2013-07-01T16:52:17Z",
          "updated_at": "2013-07-01T19:07:09Z",
          "pushed_at": "2013-07-01T19:07:08Z",
          "git_url": "git://github.com/atlasservers/basic-sample.git",
          "ssh_url": "git@github.com:atlasservers/basic-sample.git",
          "clone_url": "https://github.com/atlasservers/basic-sample.git",
          "svn_url": "https://github.com/atlasservers/basic-sample",
          "homepage": null,
          "size": 148,
          "watchers_count": 0,
          "language": null,
          "has_issues": false,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 0,
          "mirror_url": null,
          "open_issues_count": 0,
          "forks": 0,
          "open_issues": 0,
          "watchers": 0,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": false,
            "push": true,
            "pull": true
          }
        }
      ]
    },
    "org_index": {
      "request": {
        "url": "/orgs/oreillymedia/repos?per_page=3"
      },
      "stubs": [
        {
          "url": "/orgs/oreillymedia/repos?",
          "regexp": true
        }
      ],
      "response": [
        {
          "id": 876150,
          "name": "Tenuki",
          "full_name": "oreillymedia/Tenuki",
          "owner": {
            "login": "oreillymedia",
            "id": 382513,
            "avatar_url": "https://secure.gravatar.com/avatar/457e7246de07d972d6aaa878c6ceb395?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png",
            "gravatar_id": "457e7246de07d972d6aaa878c6ceb395",
            "url": "https://api.github.com/users/oreillymedia",
            "html_url": "https://github.com/oreillymedia",
            "followers_url": "https://api.github.com/users/oreillymedia/followers",
            "following_url": "https://api.github.com/users/oreillymedia/following{/other_user}",
            "gists_url": "https://api.github.com/users/oreillymedia/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/oreillymedia/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/oreillymedia/subscriptions",
            "organizations_url": "https://api.github.com/users/oreillymedia/orgs",
            "repos_url": "https://api.github.com/users/oreillymedia/repos",
            "events_url": "https://api.github.com/users/oreillymedia/events{/privacy}",
            "received_events_url": "https://api.github.com/users/oreillymedia/received_events",
            "type": "Organization"
          },
          "private": true,
          "html_url": "https://github.com/oreillymedia/Tenuki",
          "description": "ReST API for a Jena SPARQL Store",
          "fork": false,
          "url": "https://api.github.com/repos/oreillymedia/Tenuki",
          "forks_url": "https://api.github.com/repos/oreillymedia/Tenuki/forks",
          "keys_url": "https://api.github.com/repos/oreillymedia/Tenuki/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/oreillymedia/Tenuki/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/oreillymedia/Tenuki/teams",
          "hooks_url": "https://api.github.com/repos/oreillymedia/Tenuki/hooks",
          "issue_events_url": "https://api.github.com/repos/oreillymedia/Tenuki/issues/events{/number}",
          "events_url": "https://api.github.com/repos/oreillymedia/Tenuki/events",
          "assignees_url": "https://api.github.com/repos/oreillymedia/Tenuki/assignees{/user}",
          "branches_url": "https://api.github.com/repos/oreillymedia/Tenuki/branches{/branch}",
          "tags_url": "https://api.github.com/repos/oreillymedia/Tenuki/tags",
          "blobs_url": "https://api.github.com/repos/oreillymedia/Tenuki/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/oreillymedia/Tenuki/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/oreillymedia/Tenuki/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/oreillymedia/Tenuki/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/oreillymedia/Tenuki/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/oreillymedia/Tenuki/languages",
          "stargazers_url": "https://api.github.com/repos/oreillymedia/Tenuki/stargazers",
          "contributors_url": "https://api.github.com/repos/oreillymedia/Tenuki/contributors",
          "subscribers_url": "https://api.github.com/repos/oreillymedia/Tenuki/subscribers",
          "subscription_url": "https://api.github.com/repos/oreillymedia/Tenuki/subscription",
          "commits_url": "https://api.github.com/repos/oreillymedia/Tenuki/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/oreillymedia/Tenuki/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/oreillymedia/Tenuki/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/oreillymedia/Tenuki/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/oreillymedia/Tenuki/contents/{+path}",
          "compare_url": "https://api.github.com/repos/oreillymedia/Tenuki/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/oreillymedia/Tenuki/merges",
          "archive_url": "https://api.github.com/repos/oreillymedia/Tenuki/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/oreillymedia/Tenuki/downloads",
          "issues_url": "https://api.github.com/repos/oreillymedia/Tenuki/issues{/number}",
          "pulls_url": "https://api.github.com/repos/oreillymedia/Tenuki/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/oreillymedia/Tenuki/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/oreillymedia/Tenuki/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/oreillymedia/Tenuki/labels{/name}",
          "created_at": "2010-08-31T22:57:42Z",
          "updated_at": "2013-06-24T16:33:47Z",
          "pushed_at": "2011-01-15T23:29:24Z",
          "git_url": "git://github.com/oreillymedia/Tenuki.git",
          "ssh_url": "git@github.com:oreillymedia/Tenuki.git",
          "clone_url": "https://github.com/oreillymedia/Tenuki.git",
          "svn_url": "https://github.com/oreillymedia/Tenuki",
          "homepage": "",
          "size": 536,
          "watchers_count": 0,
          "language": "Java",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 1,
          "mirror_url": null,
          "open_issues_count": 1,
          "forks": 1,
          "open_issues": 1,
          "watchers": 0,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": true,
            "push": true,
            "pull": true
          }
        },
        {
          "id": 876208,
          "name": "pymantic",
          "full_name": "oreillymedia/pymantic",
          "owner": {
            "login": "oreillymedia",
            "id": 382513,
            "avatar_url": "https://secure.gravatar.com/avatar/457e7246de07d972d6aaa878c6ceb395?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png",
            "gravatar_id": "457e7246de07d972d6aaa878c6ceb395",
            "url": "https://api.github.com/users/oreillymedia",
            "html_url": "https://github.com/oreillymedia",
            "followers_url": "https://api.github.com/users/oreillymedia/followers",
            "following_url": "https://api.github.com/users/oreillymedia/following{/other_user}",
            "gists_url": "https://api.github.com/users/oreillymedia/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/oreillymedia/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/oreillymedia/subscriptions",
            "organizations_url": "https://api.github.com/users/oreillymedia/orgs",
            "repos_url": "https://api.github.com/users/oreillymedia/repos",
            "events_url": "https://api.github.com/users/oreillymedia/events{/privacy}",
            "received_events_url": "https://api.github.com/users/oreillymedia/received_events",
            "type": "Organization"
          },
          "private": true,
          "html_url": "https://github.com/oreillymedia/pymantic",
          "description": "Semantic Web and RDF library for Python (O'Reilly Fork)",
          "fork": false,
          "url": "https://api.github.com/repos/oreillymedia/pymantic",
          "forks_url": "https://api.github.com/repos/oreillymedia/pymantic/forks",
          "keys_url": "https://api.github.com/repos/oreillymedia/pymantic/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/oreillymedia/pymantic/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/oreillymedia/pymantic/teams",
          "hooks_url": "https://api.github.com/repos/oreillymedia/pymantic/hooks",
          "issue_events_url": "https://api.github.com/repos/oreillymedia/pymantic/issues/events{/number}",
          "events_url": "https://api.github.com/repos/oreillymedia/pymantic/events",
          "assignees_url": "https://api.github.com/repos/oreillymedia/pymantic/assignees{/user}",
          "branches_url": "https://api.github.com/repos/oreillymedia/pymantic/branches{/branch}",
          "tags_url": "https://api.github.com/repos/oreillymedia/pymantic/tags",
          "blobs_url": "https://api.github.com/repos/oreillymedia/pymantic/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/oreillymedia/pymantic/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/oreillymedia/pymantic/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/oreillymedia/pymantic/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/oreillymedia/pymantic/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/oreillymedia/pymantic/languages",
          "stargazers_url": "https://api.github.com/repos/oreillymedia/pymantic/stargazers",
          "contributors_url": "https://api.github.com/repos/oreillymedia/pymantic/contributors",
          "subscribers_url": "https://api.github.com/repos/oreillymedia/pymantic/subscribers",
          "subscription_url": "https://api.github.com/repos/oreillymedia/pymantic/subscription",
          "commits_url": "https://api.github.com/repos/oreillymedia/pymantic/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/oreillymedia/pymantic/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/oreillymedia/pymantic/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/oreillymedia/pymantic/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/oreillymedia/pymantic/contents/{+path}",
          "compare_url": "https://api.github.com/repos/oreillymedia/pymantic/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/oreillymedia/pymantic/merges",
          "archive_url": "https://api.github.com/repos/oreillymedia/pymantic/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/oreillymedia/pymantic/downloads",
          "issues_url": "https://api.github.com/repos/oreillymedia/pymantic/issues{/number}",
          "pulls_url": "https://api.github.com/repos/oreillymedia/pymantic/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/oreillymedia/pymantic/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/oreillymedia/pymantic/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/oreillymedia/pymantic/labels{/name}",
          "created_at": "2010-08-31T23:38:46Z",
          "updated_at": "2013-06-24T16:33:47Z",
          "pushed_at": "2010-12-04T22:02:02Z",
          "git_url": "git://github.com/oreillymedia/pymantic.git",
          "ssh_url": "git@github.com:oreillymedia/pymantic.git",
          "clone_url": "https://github.com/oreillymedia/pymantic.git",
          "svn_url": "https://github.com/oreillymedia/pymantic",
          "homepage": "https://github.com/norcalrdf/pymantic",
          "size": 216,
          "watchers_count": 0,
          "language": "Python",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 1,
          "mirror_url": null,
          "open_issues_count": 0,
          "forks": 1,
          "open_issues": 0,
          "watchers": 0,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": true,
            "push": true,
            "pull": true
          }
        },
        {
          "id": 880649,
          "name": "pymockhttpserver",
          "full_name": "oreillymedia/pymockhttpserver",
          "owner": {
            "login": "oreillymedia",
            "id": 382513,
            "avatar_url": "https://secure.gravatar.com/avatar/457e7246de07d972d6aaa878c6ceb395?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png",
            "gravatar_id": "457e7246de07d972d6aaa878c6ceb395",
            "url": "https://api.github.com/users/oreillymedia",
            "html_url": "https://github.com/oreillymedia",
            "followers_url": "https://api.github.com/users/oreillymedia/followers",
            "following_url": "https://api.github.com/users/oreillymedia/following{/other_user}",
            "gists_url": "https://api.github.com/users/oreillymedia/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/oreillymedia/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/oreillymedia/subscriptions",
            "organizations_url": "https://api.github.com/users/oreillymedia/orgs",
            "repos_url": "https://api.github.com/users/oreillymedia/repos",
            "events_url": "https://api.github.com/users/oreillymedia/events{/privacy}",
            "received_events_url": "https://api.github.com/users/oreillymedia/received_events",
            "type": "Organization"
          },
          "private": true,
          "html_url": "https://github.com/oreillymedia/pymockhttpserver",
          "description": "A python mock http server for unit-testing web service-dependant software",
          "fork": false,
          "url": "https://api.github.com/repos/oreillymedia/pymockhttpserver",
          "forks_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/forks",
          "keys_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/teams",
          "hooks_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/hooks",
          "issue_events_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/issues/events{/number}",
          "events_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/events",
          "assignees_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/assignees{/user}",
          "branches_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/branches{/branch}",
          "tags_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/tags",
          "blobs_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/languages",
          "stargazers_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/stargazers",
          "contributors_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/contributors",
          "subscribers_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/subscribers",
          "subscription_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/subscription",
          "commits_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/contents/{+path}",
          "compare_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/merges",
          "archive_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/downloads",
          "issues_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/issues{/number}",
          "pulls_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/oreillymedia/pymockhttpserver/labels{/name}",
          "created_at": "2010-09-01T21:05:14Z",
          "updated_at": "2013-06-24T16:33:48Z",
          "pushed_at": "2010-11-09T23:17:18Z",
          "git_url": "git://github.com/oreillymedia/pymockhttpserver.git",
          "ssh_url": "git@github.com:oreillymedia/pymockhttpserver.git",
          "clone_url": "https://github.com/oreillymedia/pymockhttpserver.git",
          "svn_url": "https://github.com/oreillymedia/pymockhttpserver",
          "homepage": "",
          "size": 164,
          "watchers_count": 0,
          "language": "Python",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 1,
          "mirror_url": null,
          "open_issues_count": 0,
          "forks": 1,
          "open_issues": 0,
          "watchers": 0,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": true,
            "push": true,
            "pull": true
          }
        }
      ]
    },
    "show": {
      "request": {
        "url": "/repos/atlasservers/basic-sample"
      },
      "response": {
        "id": 11101227,
        "name": "basic-sample",
        "full_name": "atlasservers/basic-sample",
        "owner": {
          "login": "atlasservers",
          "id": 2284965,
          "avatar_url": "https://secure.gravatar.com/avatar/33ae9fd93e4d5c771c1bab29c8705106?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
          "gravatar_id": "33ae9fd93e4d5c771c1bab29c8705106",
          "url": "https://api.github.com/users/atlasservers",
          "html_url": "https://github.com/atlasservers",
          "followers_url": "https://api.github.com/users/atlasservers/followers",
          "following_url": "https://api.github.com/users/atlasservers/following{/other_user}",
          "gists_url": "https://api.github.com/users/atlasservers/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/atlasservers/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/atlasservers/subscriptions",
          "organizations_url": "https://api.github.com/users/atlasservers/orgs",
          "repos_url": "https://api.github.com/users/atlasservers/repos",
          "events_url": "https://api.github.com/users/atlasservers/events{/privacy}",
          "received_events_url": "https://api.github.com/users/atlasservers/received_events",
          "type": "User"
        },
        "private": false,
        "html_url": "https://github.com/atlasservers/basic-sample",
        "description": "A repo used to test the GitHub API",
        "fork": false,
        "url": "https://api.github.com/repos/atlasservers/basic-sample",
        "forks_url": "https://api.github.com/repos/atlasservers/basic-sample/forks",
        "keys_url": "https://api.github.com/repos/atlasservers/basic-sample/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/atlasservers/basic-sample/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/atlasservers/basic-sample/teams",
        "hooks_url": "https://api.github.com/repos/atlasservers/basic-sample/hooks",
        "issue_events_url": "https://api.github.com/repos/atlasservers/basic-sample/issues/events{/number}",
        "events_url": "https://api.github.com/repos/atlasservers/basic-sample/events",
        "assignees_url": "https://api.github.com/repos/atlasservers/basic-sample/assignees{/user}",
        "branches_url": "https://api.github.com/repos/atlasservers/basic-sample/branches{/branch}",
        "tags_url": "https://api.github.com/repos/atlasservers/basic-sample/tags",
        "blobs_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/atlasservers/basic-sample/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/atlasservers/basic-sample/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/atlasservers/basic-sample/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/atlasservers/basic-sample/languages",
        "stargazers_url": "https://api.github.com/repos/atlasservers/basic-sample/stargazers",
        "contributors_url": "https://api.github.com/repos/atlasservers/basic-sample/contributors",
        "subscribers_url": "https://api.github.com/repos/atlasservers/basic-sample/subscribers",
        "subscription_url": "https://api.github.com/repos/atlasservers/basic-sample/subscription",
        "commits_url": "https://api.github.com/repos/atlasservers/basic-sample/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/atlasservers/basic-sample/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/atlasservers/basic-sample/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/atlasservers/basic-sample/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/atlasservers/basic-sample/contents/{+path}",
        "compare_url": "https://api.github.com/repos/atlasservers/basic-sample/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/atlasservers/basic-sample/merges",
        "archive_url": "https://api.github.com/repos/atlasservers/basic-sample/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/atlasservers/basic-sample/downloads",
        "issues_url": "https://api.github.com/repos/atlasservers/basic-sample/issues{/number}",
        "pulls_url": "https://api.github.com/repos/atlasservers/basic-sample/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/atlasservers/basic-sample/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/atlasservers/basic-sample/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/atlasservers/basic-sample/labels{/name}",
        "created_at": "2013-07-01T16:52:17Z",
        "updated_at": "2013-07-01T19:07:09Z",
        "pushed_at": "2013-07-01T19:07:08Z",
        "git_url": "git://github.com/atlasservers/basic-sample.git",
        "ssh_url": "git@github.com:atlasservers/basic-sample.git",
        "clone_url": "https://github.com/atlasservers/basic-sample.git",
        "svn_url": "https://github.com/atlasservers/basic-sample",
        "homepage": null,
        "size": 148,
        "watchers_count": 0,
        "language": null,
        "has_issues": false,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "master_branch": "master",
        "default_branch": "master",
        "permissions": {
          "admin": false,
          "push": true,
          "pull": true
        },
        "network_count": 0
      }
    }
  },
  "branches": {
    "index": {
      "request": {
        "url": "/repos/atlasservers/basic-sample/branches"
      },
      "response": [
        {
          "name": "master",
          "commit": {
            "sha": "a5dda6a6105e94747c0e83328d2be031e32fc326",
            "url": "https://api.github.com/repos/atlasservers/basic-sample/commits/a5dda6a6105e94747c0e83328d2be031e32fc326"
          }
        },
        {
          "name": "slave",
          "commit": {
            "sha": "015cd52c87ec34a4f6b48162113faffdd79c031f",
            "url": "https://api.github.com/repos/atlasservers/basic-sample/commits/015cd52c87ec34a4f6b48162113faffdd79c031f"
          }
        }
      ]
    }
  },
  "collaborators": {
    "index": {
      "request": {
        "url": "/repos/atlasservers/basic-sample/collaborators"
      },
      "response": [
        {
          "login": "atlasservers",
          "id": 2284965,
          "avatar_url": "https://secure.gravatar.com/avatar/33ae9fd93e4d5c771c1bab29c8705106?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
          "gravatar_id": "33ae9fd93e4d5c771c1bab29c8705106",
          "url": "https://api.github.com/users/atlasservers",
          "html_url": "https://github.com/atlasservers",
          "followers_url": "https://api.github.com/users/atlasservers/followers",
          "following_url": "https://api.github.com/users/atlasservers/following{/other_user}",
          "gists_url": "https://api.github.com/users/atlasservers/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/atlasservers/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/atlasservers/subscriptions",
          "organizations_url": "https://api.github.com/users/atlasservers/orgs",
          "repos_url": "https://api.github.com/users/atlasservers/repos",
          "events_url": "https://api.github.com/users/atlasservers/events{/privacy}",
          "received_events_url": "https://api.github.com/users/atlasservers/received_events",
          "type": "User"
        },
        {
          "login": "zischwartz",
          "id": 77472,
          "avatar_url": "https://secure.gravatar.com/avatar/d626261ef237ec7bfbc6debb5aa9d33d?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
          "gravatar_id": "d626261ef237ec7bfbc6debb5aa9d33d",
          "url": "https://api.github.com/users/zischwartz",
          "html_url": "https://github.com/zischwartz",
          "followers_url": "https://api.github.com/users/zischwartz/followers",
          "following_url": "https://api.github.com/users/zischwartz/following{/other_user}",
          "gists_url": "https://api.github.com/users/zischwartz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/zischwartz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/zischwartz/subscriptions",
          "organizations_url": "https://api.github.com/users/zischwartz/orgs",
          "repos_url": "https://api.github.com/users/zischwartz/repos",
          "events_url": "https://api.github.com/users/zischwartz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/zischwartz/received_events",
          "type": "User"
        },
        {
          "login": "runemadsen",
          "id": 192021,
          "avatar_url": "https://secure.gravatar.com/avatar/63682d2534602863b9b8277edcff374c?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
          "gravatar_id": "63682d2534602863b9b8277edcff374c",
          "url": "https://api.github.com/users/runemadsen",
          "html_url": "https://github.com/runemadsen",
          "followers_url": "https://api.github.com/users/runemadsen/followers",
          "following_url": "https://api.github.com/users/runemadsen/following{/other_user}",
          "gists_url": "https://api.github.com/users/runemadsen/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/runemadsen/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/runemadsen/subscriptions",
          "organizations_url": "https://api.github.com/users/runemadsen/orgs",
          "repos_url": "https://api.github.com/users/runemadsen/repos",
          "events_url": "https://api.github.com/users/runemadsen/events{/privacy}",
          "received_events_url": "https://api.github.com/users/runemadsen/received_events",
          "type": "User"
        }
      ]
    }
  },
  "trees": {
    "show": {
      "request": {
        "url": "/repos/atlasservers/basic-sample/git/trees/master"
      },
      "response": {
        "sha": "master",
        "url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/master",
        "tree": [
          {
            "mode": "100644",
            "type": "blob",
            "sha": "59efb707550e38063969e2d09f62c7dce631c684",
            "path": "README.md",
            "size": 41,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/59efb707550e38063969e2d09f62c7dce631c684"
          },
          {
            "mode": "100644",
            "type": "blob",
            "sha": "f76a4d8a45c949bc0da04534647e1d968e77c066",
            "path": "boss.jpg",
            "size": 7771,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f76a4d8a45c949bc0da04534647e1d968e77c066"
          },
          {
            "mode": "100644",
            "type": "blob",
            "sha": "0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
            "path": "index.html",
            "size": 54,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea"
          },
          {
            "mode": "040000",
            "type": "tree",
            "sha": "a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc",
            "path": "subfolder",
            "url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc"
          }
        ]
      }
    }
  },
  "contents": {
    "show": {
      "master": {
        "": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/?ref=master"
          },
          "response": [
            {
              "name": "README.md",
              "path": "README.md",
              "sha": "59efb707550e38063969e2d09f62c7dce631c684",
              "size": 41,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/master/README.md",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/59efb707550e38063969e2d09f62c7dce631c684",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/59efb707550e38063969e2d09f62c7dce631c684",
                "html": "https://github.com/atlasservers/basic-sample/blob/master/README.md"
              }
            },
            {
              "name": "boss.jpg",
              "path": "boss.jpg",
              "sha": "f76a4d8a45c949bc0da04534647e1d968e77c066",
              "size": 7771,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/boss.jpg?ref=master",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/master/boss.jpg",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f76a4d8a45c949bc0da04534647e1d968e77c066",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/boss.jpg?ref=master",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f76a4d8a45c949bc0da04534647e1d968e77c066",
                "html": "https://github.com/atlasservers/basic-sample/blob/master/boss.jpg"
              }
            },
            {
              "name": "index.html",
              "path": "index.html",
              "sha": "0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
              "size": 54,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=master",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/master/index.html",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=master",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
                "html": "https://github.com/atlasservers/basic-sample/blob/master/index.html"
              }
            },
            {
              "name": "subfolder",
              "path": "subfolder",
              "sha": "a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc",
              "size": null,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder?ref=master",
              "html_url": "https://github.com/atlasservers/basic-sample/tree/master/subfolder",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc",
              "type": "dir",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder?ref=master",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc",
                "html": "https://github.com/atlasservers/basic-sample/tree/master/subfolder"
              }
            }
          ]
        },
        "README.md": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/README.md?ref=master"
          },
          "response": {
            "name": "README.md",
            "path": "README.md",
            "sha": "59efb707550e38063969e2d09f62c7dce631c684",
            "size": 41,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/master/README.md",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/59efb707550e38063969e2d09f62c7dce631c684",
            "type": "file",
            "content": "VGhlIHRpbWUgaXMgbm93IDIwMTMtMDctMDEgMTU6MDE6NDMgLTA0MDA=\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/59efb707550e38063969e2d09f62c7dce631c684",
              "html": "https://github.com/atlasservers/basic-sample/blob/master/README.md"
            }
          }
        },
        "boss.jpg": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/boss.jpg?ref=master"
          },
          "response": {
            "name": "boss.jpg",
            "path": "boss.jpg",
            "sha": "f76a4d8a45c949bc0da04534647e1d968e77c066",
            "size": 7771,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/boss.jpg?ref=master",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/master/boss.jpg",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f76a4d8a45c949bc0da04534647e1d968e77c066",
            "type": "file",
            "content": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUUEhQWFhUXGRcYGBcY\nFxcXHBgcGBocFx0YHB8aHCggGBwlHBgYITEhJSkrLi4uFx8zODMsNygtLisB\nCgoKDg0OGxAQGywkICQsLCwsLCwsLCwsLDQvLCwsLCwsLCwsLCwsLCwsLCws\nLCwsLCwsLCwsLCwsLCwsLCwsLP/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAAA\nBwEBAAAAAAAAAAAAAAAAAQIDBAUHBgj/xABHEAACAQIDBQUFBAYIBQUBAAAB\nAhEAAwQSIQUGMUFREyJhcYEHkaGx8BQyQsEjM1KS0eEVYnOCorKz8SQlNHKD\nNUNEwtII/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAMhEAAgIBAwID\nBwEJAQAAAAAAAAECESEDEjEEQSIyURNhcZGhscGBI1JicrLC0eHwFP/aAAwD\nAQACEQMRAD8A0ZLXv/hUm3b+op5LMUsLXhafS08ndLUsTSSmvzj60p6m51iu\np6aJphZNBqf4+FPrEULVKI5VSMEsithSIk9Dx+VVW8u1/s1h7gUs3BUBgliJ\n6aAAFiddFOh4Vb2eGlZl7VN6+wdLVvI1wZiVaSqjKe88cFEju858ILNehkZV\nvzvPcxzWzdCL2ZuKoQkgAkcz97h97nPAQK5gEn1p/H4gu7Mxkk8YgdBHoB6R\nTdtSCD611xjtVEXljli2QSY4D01IH5/KmbnGpNrUEAak6eX1Huph0I46UxmJ\nDR7o94iimjIoorChUKEUKxgqOhR5fdWMO2HhgZKxwK9RW2eyTf0nLg8VdQgj\n9DdJykx/7TZo1EaHxHGZrEEeDIq93bxVwXECGJcOpKggXEiDyI0kHWCDB4yJ\nakU1Y8X2PWY0+hTqmqTdp0aytxFCpcGcIJASYBUDkAwOmmpOlXE0kQtDk0nP\nSQaBFUsWg81AGm4pcUAhqaUONIWnRRqwMp8tOAUgUsTXJEuwyKaK6nx5inop\nOnqB4j4U1AACeMn6404Br48qTaA5CB9fzpwcadIVsRkjX64culec972bGFry\nqxDXGCjT9Xbdkzk8gWjjwObwr0kw0ivMm9mKNq3bwqtly2lNwxGfMZjyklyO\npHSmS8So14OYNjoNBGvLz8efvqxweH7VsltQQBGvU8WPy9fKq3HqUOQNI46G\nRrqPhFaf7Kdhadqw5Bh4k6D3QTHiD5U1JVGwRVso9n7i4gyMuVTzYQT5dKsG\n9mLuO7mL+IIHz4VsWEtyRV9aAAgRUIynJ8jOl2MMwnsbu5C1x1DRooBgeZnW\nuZx24d+wSXAgadR1+Velb94aiuR26qssMTqeQ4/WlGWpKPcySZ59v7JAbgYq\nJicCFrW95tlW0TMFluMty93Gs42inGeOvhT6eo2aUUjnSsURqZftQPGoZq5F\noKrnd3Ed9bUffYEETP3lYx4/o9PE1TVIwP6xBmCd5e9014/76UslaMnk9Z7o\n2nGEt9oIYh3jwdy6gzrIBHvq4HGqLc/eS3jLQysGuJbtG7lByhnB01GhOUmD\nqAyyBNXrCpLgd8hg0qaRNKFMgCacJpEUsUUZgApU0U0l2pZzUUCrK1dac0ps\naAdacQ1yQb4LMOfKkeVGy6xSrYPOrADQD1+hS4olEk/X+9LVYp0KxLtAJ101\nrynvvtA3sbdYrlhmUAgjuhmiQeBAIHpXprevbAwmFuXoBKqco6mNK8vbRVrr\nPec5mclmPDiTPHlPy8DTx5A+CmY16H3Hw/Z4SyDxKKT7gPyFeebi16Q2RcBt\nWwJ+6PkKXqHhB0y5GIg/Q+VP4baXI/XlUWxZLcNIqSbfOBPrUFY7H3xYJ+6x\nPIcqotpi6W0WBM6n60qyN9oM931iP4VzmKDXr3Z53gqW48ABE+E9P41nkKKX\nerHlbetxWbovLw+VZ1i2JkZTPhymu72hsVXvpYQGAM91vy9aoNuYJbWYjQZi\nAWInTSY400KRmcVtIwIjzquqx2pA4GZNV1da4IvkKpOzsL2t1EBAzMok8BJA\nn41GpdtiCCOI1rMVHqD2dbFt4MPatMzZlW4zMQTcMkFgF7qoPujmY8JPZkVx\nvsnJfBrduO1244Aa46kSBwUTxAEajQ12jVGHlHlyImjB0oUcU4BINKAoRRxW\nQAjTF1tKec1ExLQK4+rdIeCtiQvWlqtHFKC1aMQtjeWlR76XkpBU6fXvo0AC\njUdKU2pj1oInwowKZGOW9qeHL7LxAUElVVhEfhYNz5QJPOJ415seywPeM5uA\nJjTrHT+derN49lNibJtJcNuZBOUNIIIPE6cePwNYNvruiMHdsoLme5cBzSBo\n2gAngFPLzM0VKmCjk7mySVUyAXIVB14AtHTWPrXebV23hbYNwwqqq+Z4fXlW\nI4HFM2NsqeC3UBUgaQwJEDTl8B0rbtr4QXbIlSwkEgcSByqeq3ix4HO7U9pP\nZn9HakeJAH5k8+lNW/aypGVrLZiOI11+cfxqh25gsfiSy2MGtlQNJVC7eGs5\nJ5ZQPE1xGM2disOZuq9s/ssRP7s08Ypr/YG6NhvbzC9YZ1MR3QvOetOXtotY\n7VtJFu0BPiCST68q4v2V2WxOL7O4pNsKWY8gRwnpMEVM9suLNnEpbEwUBI9T\n/Ck9n4qG3YKvae+l8hktArJ1ccWPAz0rkcTiLjk521J/E0mo7YtzoJ9ONN9g\n0wR4kk8usmuiMFEm5WHettGtR6ssNihlIPuquNMKwqctr1pFSrdsEiOg5++s\nBHoL2MXFWwU7QEzIEkdfGGGmhrTHNcLuFsJLdq0VLkZEYjN3S5EyBwUQSIGh\nrujXNo8MefImlCiNBTVhQTREcaMUZFYwhhUPG/dNTah49ZU1wdWvCV0/MhcU\n5Tail10xFYoUl1nh1pQM0UUwBaDSkwJo0pXDpFMAAqn29u9YxShb9sOFOYTP\nH0+R0q4pL1mrRkYX7QdlLY2pgiqhbRRVBWB+rY6ecOorQth3wUKty0qq9p2w\ni7JiEEtbKcwIXNq+pAGWJPDQ68KjXrxTI68wNRz004ca55PgqkdDtXZ5IPMe\nh+Bri726L33yIoAJ710gAKPADnXW7NxhcQx40/tXaSWF8TQT9A+4f2JsWxhF\nS3ZQCSAx5tHMnmdayH24lWxyCeUek1rGyL7XVRn0nUeU/wABWJe1rDsMbcdj\nIJ7vlVNLzCy4OfwGFAaOM8Kn4q2F49Kg7CYlhrPzrotsG2LYYAZvH641Sbe4\nEVg4vE2jJ0qPUy/fkmosVcmxVi0XZVUEsxCqAJJJMAADiSTWxbnezk3A9zFK\nwhezs2iBKk6d6RBIEN3Tpx5Vnm4NoHaWE7yiL1sgz0Mj189K9YWY4wJ4TpPl\n5VGeXQY4VjWz8AllAlsZVHAAQB5DlUjpSiaSRWqsI1iqC0TUdMAOKOKAo6NI\nAhhUHaDQpNTmqv2ie6fI15/W+UrpeZEgdIpwRRAUcTXWkKGtFNHHGiy0QBia\nMUYFHFMkAKKDCjAoEUTFdtfCC7adD+IEeU6GDy0rhbeFy21QpkygDJ+zGgX6\n8K0Z1qg3mwndFwctD5H+fzrn1V3KwZzNoFPLrVecFexV8IBFsEZ3J4/1R1qa\n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\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/boss.jpg?ref=master",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f76a4d8a45c949bc0da04534647e1d968e77c066",
              "html": "https://github.com/atlasservers/basic-sample/blob/master/boss.jpg"
            }
          }
        },
        "index.html": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/index.html?ref=master"
          },
          "response": {
            "name": "index.html",
            "path": "index.html",
            "sha": "0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
            "size": 54,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=master",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/master/index.html",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
            "type": "file",
            "content": "PGh0bWw+CiAgPGJvZHk+CiAgICBIZWxsbyBmcm9tIEhUTUwhCiAgPC9ib2R5\nPgo8L2h0bWw+\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=master",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
              "html": "https://github.com/atlasservers/basic-sample/blob/master/index.html"
            }
          }
        },
        "subfolder": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/subfolder?ref=master"
          },
          "response": [
            {
              "name": "SUBME.md",
              "path": "subfolder/SUBME.md",
              "sha": "748de8ca95820627b8ff75fbccf25a7264ab47a3",
              "size": 25,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=master",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/master/subfolder/SUBME.md",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=master",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
                "html": "https://github.com/atlasservers/basic-sample/blob/master/subfolder/SUBME.md"
              }
            }
          ]
        },
        "subfolder/SUBME.md": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=master"
          },
          "response": {
            "name": "SUBME.md",
            "path": "subfolder/SUBME.md",
            "sha": "748de8ca95820627b8ff75fbccf25a7264ab47a3",
            "size": 25,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=master",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/master/subfolder/SUBME.md",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
            "type": "file",
            "content": "U1VCTUUKPT09PT0KCkhlbGxvIFdvcmxkIQ==\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=master",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
              "html": "https://github.com/atlasservers/basic-sample/blob/master/subfolder/SUBME.md"
            }
          }
        }
      },
      "slave": {
        "": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/?ref=slave"
          },
          "response": [
            {
              "name": "README.md",
              "path": "README.md",
              "sha": "b21d14bffde1ef30f298d9d2d0388858af7f7f90",
              "size": 27,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=slave",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/README.md",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/b21d14bffde1ef30f298d9d2d0388858af7f7f90",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=slave",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/b21d14bffde1ef30f298d9d2d0388858af7f7f90",
                "html": "https://github.com/atlasservers/basic-sample/blob/slave/README.md"
              }
            },
            {
              "name": "SLAVEME.md",
              "path": "SLAVEME.md",
              "sha": "5591c4cce8c4876cd48f32f6d6795f8881bf4b1f",
              "size": 29,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/SLAVEME.md?ref=slave",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/SLAVEME.md",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/5591c4cce8c4876cd48f32f6d6795f8881bf4b1f",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/SLAVEME.md?ref=slave",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/5591c4cce8c4876cd48f32f6d6795f8881bf4b1f",
                "html": "https://github.com/atlasservers/basic-sample/blob/slave/SLAVEME.md"
              }
            },
            {
              "name": "index.html",
              "path": "index.html",
              "sha": "0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
              "size": 54,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=slave",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/index.html",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=slave",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
                "html": "https://github.com/atlasservers/basic-sample/blob/slave/index.html"
              }
            },
            {
              "name": "subfolder",
              "path": "subfolder",
              "sha": "a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc",
              "size": 0,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder?ref=slave",
              "html_url": "https://github.com/atlasservers/basic-sample/tree/slave/subfolder",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc",
              "type": "dir",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder?ref=slave",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/a4bae5cbf0e9fc0395eddafc16b759994c1cb3bc",
                "html": "https://github.com/atlasservers/basic-sample/tree/slave/subfolder"
              }
            }
          ]
        },
        "README.md": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/README.md?ref=slave"
          },
          "response": {
            "name": "README.md",
            "path": "README.md",
            "sha": "b21d14bffde1ef30f298d9d2d0388858af7f7f90",
            "size": 27,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=slave",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/README.md",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/b21d14bffde1ef30f298d9d2d0388858af7f7f90",
            "type": "file",
            "content": "UkVBRE1FCj09PT09PQoKSGVsbG8gV29ybGQh\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=slave",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/b21d14bffde1ef30f298d9d2d0388858af7f7f90",
              "html": "https://github.com/atlasservers/basic-sample/blob/slave/README.md"
            }
          }
        },
        "SLAVEME.md": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/SLAVEME.md?ref=slave"
          },
          "response": {
            "name": "SLAVEME.md",
            "path": "SLAVEME.md",
            "sha": "5591c4cce8c4876cd48f32f6d6795f8881bf4b1f",
            "size": 29,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/SLAVEME.md?ref=slave",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/SLAVEME.md",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/5591c4cce8c4876cd48f32f6d6795f8881bf4b1f",
            "type": "file",
            "content": "U0xBVkVNRQo9PT09PT09CgpIZWxsbyBXb3JsZCE=\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/SLAVEME.md?ref=slave",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/5591c4cce8c4876cd48f32f6d6795f8881bf4b1f",
              "html": "https://github.com/atlasservers/basic-sample/blob/slave/SLAVEME.md"
            }
          }
        },
        "index.html": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/index.html?ref=slave"
          },
          "response": {
            "name": "index.html",
            "path": "index.html",
            "sha": "0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
            "size": 54,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=slave",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/index.html",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
            "type": "file",
            "content": "PGh0bWw+CiAgPGJvZHk+CiAgICBIZWxsbyBmcm9tIEhUTUwhCiAgPC9ib2R5\nPgo8L2h0bWw+\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/index.html?ref=slave",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/0fe7afa70196a84fc7ce2c6e7b8de8ac15202bea",
              "html": "https://github.com/atlasservers/basic-sample/blob/slave/index.html"
            }
          }
        },
        "subfolder": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/subfolder?ref=slave"
          },
          "response": [
            {
              "name": "SUBME.md",
              "path": "subfolder/SUBME.md",
              "sha": "748de8ca95820627b8ff75fbccf25a7264ab47a3",
              "size": 25,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=slave",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/subfolder/SUBME.md",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=slave",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
                "html": "https://github.com/atlasservers/basic-sample/blob/slave/subfolder/SUBME.md"
              }
            }
          ]
        },
        "subfolder/SUBME.md": {
          "request": {
            "url": "/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=slave"
          },
          "response": {
            "name": "SUBME.md",
            "path": "subfolder/SUBME.md",
            "sha": "748de8ca95820627b8ff75fbccf25a7264ab47a3",
            "size": 25,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=slave",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/slave/subfolder/SUBME.md",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
            "type": "file",
            "content": "U1VCTUUKPT09PT0KCkhlbGxvIFdvcmxkIQ==\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=slave",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/748de8ca95820627b8ff75fbccf25a7264ab47a3",
              "html": "https://github.com/atlasservers/basic-sample/blob/slave/subfolder/SUBME.md"
            }
          }
        }
      }
    },
    "create": {
      "request": {
        "url": "/repos/atlasservers/basic-sample/contents/README.md",
        "method": "put",
        "options": {
          "sha": "59efb707550e38063969e2d09f62c7dce631c684",
          "content": "VGhlIHRpbWUgaXMgbm93IDIwMTMtMDctMDEgMTU6MDc6NTcgLTA0MDA=\n",
          "message": "Updating README"
        }
      },
      "response": {
        "content": {
          "name": "README.md",
          "path": "README.md",
          "sha": "1abf1b6035766af85942eb2ac8d553c654cf98ba",
          "size": 41,
          "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
          "html_url": "https://github.com/atlasservers/basic-sample/blob/master/README.md",
          "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/1abf1b6035766af85942eb2ac8d553c654cf98ba",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/1abf1b6035766af85942eb2ac8d553c654cf98ba",
            "html": "https://github.com/atlasservers/basic-sample/blob/master/README.md"
          }
        },
        "commit": {
          "sha": "49ce66f20ccb48e1db853b106bb12ab4fcd55dc7",
          "url": "https://api.github.com/repos/atlasservers/basic-sample/git/commits/49ce66f20ccb48e1db853b106bb12ab4fcd55dc7",
          "html_url": "https://github.com/atlasservers/basic-sample/commits/49ce66f20ccb48e1db853b106bb12ab4fcd55dc7",
          "author": {
            "name": "Rune Skjoldborg Madsen",
            "email": "rune@runemadsen.com",
            "date": "2013-07-01T19:07:49Z"
          },
          "committer": {
            "name": "Rune Skjoldborg Madsen",
            "email": "rune@runemadsen.com",
            "date": "2013-07-01T19:07:49Z"
          },
          "tree": {
            "sha": "7e5f24d3a75eb82836361c2426071ba6ee3c46e5",
            "url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/7e5f24d3a75eb82836361c2426071ba6ee3c46e5"
          },
          "message": "Updating README",
          "parents": [
            {
              "sha": "a5dda6a6105e94747c0e83328d2be031e32fc326",
              "url": "https://api.github.com/repos/atlasservers/basic-sample/git/commits/a5dda6a6105e94747c0e83328d2be031e32fc326",
              "html_url": "https://github.com/atlasservers/basic-sample/commits/a5dda6a6105e94747c0e83328d2be031e32fc326"
            }
          ]
        }
      }
    }
  }
};

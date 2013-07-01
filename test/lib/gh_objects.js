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
        "updated_at": "2013-07-01T17:38:12Z",
        "public_gists": 0,
        "total_private_repos": 0,
        "owned_private_repos": 0,
        "disk_usage": 148,
        "collaborators": 0,
        "plan": {
          "name": "free",
          "space": 307200,
          "collaborators": 0,
          "private_repos": 0
        },
        "private_gists": 0,
        "site_admin": false
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
        {
          "login": "oreillymedia",
          "id": 382513,
          "url": "https://api.github.com/orgs/oreillymedia",
          "repos_url": "https://api.github.com/orgs/oreillymedia/repos",
          "events_url": "https://api.github.com/orgs/oreillymedia/events",
          "members_url": "https://api.github.com/orgs/oreillymedia/members{/member}",
          "public_members_url": "https://api.github.com/orgs/oreillymedia/public_members{/member}",
          "avatar_url": "https://secure.gravatar.com/avatar/457e7246de07d972d6aaa878c6ceb395?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
        }
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
        "updated_at": "2013-07-01T17:39:20Z",
        "type": "Organization",
        "total_private_repos": 72,
        "owned_private_repos": 72,
        "private_gists": 0,
        "disk_usage": 9201240,
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
            "admin": true,
            "push": true,
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
          "updated_at": "2013-07-01T17:38:12Z",
          "pushed_at": "2013-07-01T17:38:11Z",
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
            "admin": true,
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
          "id": 2989125,
          "name": "atlas",
          "full_name": "oreillymedia/atlas",
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
          "html_url": "https://github.com/oreillymedia/atlas",
          "description": "Atlas",
          "fork": false,
          "url": "https://api.github.com/repos/oreillymedia/atlas",
          "forks_url": "https://api.github.com/repos/oreillymedia/atlas/forks",
          "keys_url": "https://api.github.com/repos/oreillymedia/atlas/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/oreillymedia/atlas/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/oreillymedia/atlas/teams",
          "hooks_url": "https://api.github.com/repos/oreillymedia/atlas/hooks",
          "issue_events_url": "https://api.github.com/repos/oreillymedia/atlas/issues/events{/number}",
          "events_url": "https://api.github.com/repos/oreillymedia/atlas/events",
          "assignees_url": "https://api.github.com/repos/oreillymedia/atlas/assignees{/user}",
          "branches_url": "https://api.github.com/repos/oreillymedia/atlas/branches{/branch}",
          "tags_url": "https://api.github.com/repos/oreillymedia/atlas/tags",
          "blobs_url": "https://api.github.com/repos/oreillymedia/atlas/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/oreillymedia/atlas/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/oreillymedia/atlas/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/oreillymedia/atlas/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/oreillymedia/atlas/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/oreillymedia/atlas/languages",
          "stargazers_url": "https://api.github.com/repos/oreillymedia/atlas/stargazers",
          "contributors_url": "https://api.github.com/repos/oreillymedia/atlas/contributors",
          "subscribers_url": "https://api.github.com/repos/oreillymedia/atlas/subscribers",
          "subscription_url": "https://api.github.com/repos/oreillymedia/atlas/subscription",
          "commits_url": "https://api.github.com/repos/oreillymedia/atlas/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/oreillymedia/atlas/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/oreillymedia/atlas/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/oreillymedia/atlas/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/oreillymedia/atlas/contents/{+path}",
          "compare_url": "https://api.github.com/repos/oreillymedia/atlas/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/oreillymedia/atlas/merges",
          "archive_url": "https://api.github.com/repos/oreillymedia/atlas/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/oreillymedia/atlas/downloads",
          "issues_url": "https://api.github.com/repos/oreillymedia/atlas/issues{/number}",
          "pulls_url": "https://api.github.com/repos/oreillymedia/atlas/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/oreillymedia/atlas/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/oreillymedia/atlas/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/oreillymedia/atlas/labels{/name}",
          "created_at": "2011-12-15T16:55:07Z",
          "updated_at": "2013-06-17T18:46:19Z",
          "pushed_at": "2013-05-15T12:33:22Z",
          "git_url": "git://github.com/oreillymedia/atlas.git",
          "ssh_url": "git@github.com:oreillymedia/atlas.git",
          "clone_url": "https://github.com/oreillymedia/atlas.git",
          "svn_url": "https://github.com/oreillymedia/atlas",
          "homepage": "",
          "size": 54164,
          "watchers_count": 2,
          "language": "D",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 0,
          "mirror_url": null,
          "open_issues_count": 38,
          "forks": 0,
          "open_issues": 38,
          "watchers": 2,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": true,
            "push": true,
            "pull": true
          }
        },
        {
          "id": 3338305,
          "name": "atlas-workers",
          "full_name": "oreillymedia/atlas-workers",
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
          "html_url": "https://github.com/oreillymedia/atlas-workers",
          "description": "Workers in the Atlas system",
          "fork": false,
          "url": "https://api.github.com/repos/oreillymedia/atlas-workers",
          "forks_url": "https://api.github.com/repos/oreillymedia/atlas-workers/forks",
          "keys_url": "https://api.github.com/repos/oreillymedia/atlas-workers/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/oreillymedia/atlas-workers/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/oreillymedia/atlas-workers/teams",
          "hooks_url": "https://api.github.com/repos/oreillymedia/atlas-workers/hooks",
          "issue_events_url": "https://api.github.com/repos/oreillymedia/atlas-workers/issues/events{/number}",
          "events_url": "https://api.github.com/repos/oreillymedia/atlas-workers/events",
          "assignees_url": "https://api.github.com/repos/oreillymedia/atlas-workers/assignees{/user}",
          "branches_url": "https://api.github.com/repos/oreillymedia/atlas-workers/branches{/branch}",
          "tags_url": "https://api.github.com/repos/oreillymedia/atlas-workers/tags",
          "blobs_url": "https://api.github.com/repos/oreillymedia/atlas-workers/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/oreillymedia/atlas-workers/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/oreillymedia/atlas-workers/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/oreillymedia/atlas-workers/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/oreillymedia/atlas-workers/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/oreillymedia/atlas-workers/languages",
          "stargazers_url": "https://api.github.com/repos/oreillymedia/atlas-workers/stargazers",
          "contributors_url": "https://api.github.com/repos/oreillymedia/atlas-workers/contributors",
          "subscribers_url": "https://api.github.com/repos/oreillymedia/atlas-workers/subscribers",
          "subscription_url": "https://api.github.com/repos/oreillymedia/atlas-workers/subscription",
          "commits_url": "https://api.github.com/repos/oreillymedia/atlas-workers/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/oreillymedia/atlas-workers/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/oreillymedia/atlas-workers/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/oreillymedia/atlas-workers/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/oreillymedia/atlas-workers/contents/{+path}",
          "compare_url": "https://api.github.com/repos/oreillymedia/atlas-workers/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/oreillymedia/atlas-workers/merges",
          "archive_url": "https://api.github.com/repos/oreillymedia/atlas-workers/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/oreillymedia/atlas-workers/downloads",
          "issues_url": "https://api.github.com/repos/oreillymedia/atlas-workers/issues{/number}",
          "pulls_url": "https://api.github.com/repos/oreillymedia/atlas-workers/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/oreillymedia/atlas-workers/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/oreillymedia/atlas-workers/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/oreillymedia/atlas-workers/labels{/name}",
          "created_at": "2012-02-02T20:06:13Z",
          "updated_at": "2013-07-01T15:51:25Z",
          "pushed_at": "2013-07-01T12:58:03Z",
          "git_url": "git://github.com/oreillymedia/atlas-workers.git",
          "ssh_url": "git@github.com:oreillymedia/atlas-workers.git",
          "clone_url": "https://github.com/oreillymedia/atlas-workers.git",
          "svn_url": "https://github.com/oreillymedia/atlas-workers",
          "homepage": "",
          "size": 106192,
          "watchers_count": 1,
          "language": "XSLT",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 0,
          "mirror_url": null,
          "open_issues_count": 3,
          "forks": 0,
          "open_issues": 3,
          "watchers": 1,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": true,
            "push": true,
            "pull": true
          }
        },
        {
          "id": 3516562,
          "name": "atlas-server",
          "full_name": "oreillymedia/atlas-server",
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
          "html_url": "https://github.com/oreillymedia/atlas-server",
          "description": "Atlas server",
          "fork": false,
          "url": "https://api.github.com/repos/oreillymedia/atlas-server",
          "forks_url": "https://api.github.com/repos/oreillymedia/atlas-server/forks",
          "keys_url": "https://api.github.com/repos/oreillymedia/atlas-server/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/oreillymedia/atlas-server/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/oreillymedia/atlas-server/teams",
          "hooks_url": "https://api.github.com/repos/oreillymedia/atlas-server/hooks",
          "issue_events_url": "https://api.github.com/repos/oreillymedia/atlas-server/issues/events{/number}",
          "events_url": "https://api.github.com/repos/oreillymedia/atlas-server/events",
          "assignees_url": "https://api.github.com/repos/oreillymedia/atlas-server/assignees{/user}",
          "branches_url": "https://api.github.com/repos/oreillymedia/atlas-server/branches{/branch}",
          "tags_url": "https://api.github.com/repos/oreillymedia/atlas-server/tags",
          "blobs_url": "https://api.github.com/repos/oreillymedia/atlas-server/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/oreillymedia/atlas-server/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/oreillymedia/atlas-server/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/oreillymedia/atlas-server/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/oreillymedia/atlas-server/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/oreillymedia/atlas-server/languages",
          "stargazers_url": "https://api.github.com/repos/oreillymedia/atlas-server/stargazers",
          "contributors_url": "https://api.github.com/repos/oreillymedia/atlas-server/contributors",
          "subscribers_url": "https://api.github.com/repos/oreillymedia/atlas-server/subscribers",
          "subscription_url": "https://api.github.com/repos/oreillymedia/atlas-server/subscription",
          "commits_url": "https://api.github.com/repos/oreillymedia/atlas-server/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/oreillymedia/atlas-server/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/oreillymedia/atlas-server/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/oreillymedia/atlas-server/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/oreillymedia/atlas-server/contents/{+path}",
          "compare_url": "https://api.github.com/repos/oreillymedia/atlas-server/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/oreillymedia/atlas-server/merges",
          "archive_url": "https://api.github.com/repos/oreillymedia/atlas-server/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/oreillymedia/atlas-server/downloads",
          "issues_url": "https://api.github.com/repos/oreillymedia/atlas-server/issues{/number}",
          "pulls_url": "https://api.github.com/repos/oreillymedia/atlas-server/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/oreillymedia/atlas-server/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/oreillymedia/atlas-server/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/oreillymedia/atlas-server/labels{/name}",
          "created_at": "2012-02-22T16:47:36Z",
          "updated_at": "2013-06-17T18:46:19Z",
          "pushed_at": "2013-04-15T14:41:11Z",
          "git_url": "git://github.com/oreillymedia/atlas-server.git",
          "ssh_url": "git@github.com:oreillymedia/atlas-server.git",
          "clone_url": "https://github.com/oreillymedia/atlas-server.git",
          "svn_url": "https://github.com/oreillymedia/atlas-server",
          "homepage": "",
          "size": 1504,
          "watchers_count": 1,
          "language": "Ruby",
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 0,
          "mirror_url": null,
          "open_issues_count": 3,
          "forks": 0,
          "open_issues": 3,
          "watchers": 1,
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
        "updated_at": "2013-07-01T17:38:12Z",
        "pushed_at": "2013-07-01T17:38:11Z",
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
          "admin": true,
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
            "sha": "9a50542539d9e7a3197d7214210140bedf14a6dd",
            "url": "https://api.github.com/repos/atlasservers/basic-sample/commits/9a50542539d9e7a3197d7214210140bedf14a6dd"
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
            "sha": "f391b17382d0248d0a891402ea036c917c0d32a2",
            "path": "README.md",
            "size": 41,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f391b17382d0248d0a891402ea036c917c0d32a2"
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
              "sha": "f391b17382d0248d0a891402ea036c917c0d32a2",
              "size": 41,
              "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
              "html_url": "https://github.com/atlasservers/basic-sample/blob/master/README.md",
              "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f391b17382d0248d0a891402ea036c917c0d32a2",
              "type": "file",
              "_links": {
                "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
                "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f391b17382d0248d0a891402ea036c917c0d32a2",
                "html": "https://github.com/atlasservers/basic-sample/blob/master/README.md"
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
            "sha": "f391b17382d0248d0a891402ea036c917c0d32a2",
            "size": 41,
            "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
            "html_url": "https://github.com/atlasservers/basic-sample/blob/master/README.md",
            "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f391b17382d0248d0a891402ea036c917c0d32a2",
            "type": "file",
            "content": "VGhlIHRpbWUgaXMgbm93IDIwMTMtMDctMDEgMTM6Mzg6MTUgLTA0MDA=\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
              "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/f391b17382d0248d0a891402ea036c917c0d32a2",
              "html": "https://github.com/atlasservers/basic-sample/blob/master/README.md"
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
          "sha": "f391b17382d0248d0a891402ea036c917c0d32a2",
          "content": "VGhlIHRpbWUgaXMgbm93IDIwMTMtMDctMDEgMTM6NDk6MDQgLTA0MDA=\n",
          "message": "Updating README"
        }
      },
      "response": {
        "content": {
          "name": "README.md",
          "path": "README.md",
          "sha": "672c0d953fc7a0958f61e0a1fb7a3d342a113411",
          "size": 41,
          "url": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
          "html_url": "https://github.com/atlasservers/basic-sample/blob/master/README.md",
          "git_url": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/672c0d953fc7a0958f61e0a1fb7a3d342a113411",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/atlasservers/basic-sample/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/atlasservers/basic-sample/git/blobs/672c0d953fc7a0958f61e0a1fb7a3d342a113411",
            "html": "https://github.com/atlasservers/basic-sample/blob/master/README.md"
          }
        },
        "commit": {
          "sha": "f6e9e9112585d567785caf582a7b9c85de02f394",
          "url": "https://api.github.com/repos/atlasservers/basic-sample/git/commits/f6e9e9112585d567785caf582a7b9c85de02f394",
          "html_url": "https://github.com/atlasservers/basic-sample/commits/f6e9e9112585d567785caf582a7b9c85de02f394",
          "author": {
            "name": "atlasservers",
            "email": "runeskjoldborgmadsen@gmail.com",
            "date": "2013-07-01T17:48:59Z"
          },
          "committer": {
            "name": "atlasservers",
            "email": "runeskjoldborgmadsen@gmail.com",
            "date": "2013-07-01T17:48:59Z"
          },
          "tree": {
            "sha": "3bb216af8f6e9460aaff6550b310334e8b8ae40b",
            "url": "https://api.github.com/repos/atlasservers/basic-sample/git/trees/3bb216af8f6e9460aaff6550b310334e8b8ae40b"
          },
          "message": "Updating README",
          "parents": [
            {
              "sha": "9a50542539d9e7a3197d7214210140bedf14a6dd",
              "url": "https://api.github.com/repos/atlasservers/basic-sample/git/commits/9a50542539d9e7a3197d7214210140bedf14a6dd",
              "html_url": "https://github.com/atlasservers/basic-sample/commits/9a50542539d9e7a3197d7214210140bedf14a6dd"
            }
          ]
        }
      }
    }
  }
};

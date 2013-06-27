(function(root) {

  /* Fake GitHub API Object
  -------------------------------------------------------------- */

  var GHAPI = {

    url : function(path) { return "https://api.github.com" + path; },
    server : null,

    // Server
    // ---------------------------------------

    fake : function(autoRespond)
    {
      this.server = sinon.fakeServer.create();
      if(autoRespond)
      {
        this.server.autoRespond = true;
      }
    },

    unfake : function()
    {
      this.server.restore();
    },

    // Requests
    // ---------------------------------------

    respond : function()
    {
      this.server.respond();
    },

    fakeRequest : function(method, path, responseBody, responseCode, responseHeaders)
    {
      if(!responseCode) responseCode = 200;
      if(!responseHeaders) responseHeaders = {};

      this.server.respondWith(method, this.url(path), [
        responseCode,
        responseHeaders,
        JSON.stringify(responseBody)
      ]);
    },

    lastRequest : function()
    {
      return _.last(this.server.requests);
    }

  };

  /* Fake GitHub Response Objects
  -------------------------------------------------------------- */

  var GHResponses = {};

  // Users
  // ---------------------------------------

  GHResponses.error = { "message" : "something went wrong" };

  // Users
  // ---------------------------------------

  GHResponses.users = {};

  GHResponses.users.show = {
    "login": "runemadsen",
    "id": 1,
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "gravatar_id": "somehexcode",
    "url": "https://api.github.com/users/runemadsen",
    "name": "rune madsen",
    "company": "O'Reilly Media",
    "blog": "https://github.com/blog",
    "location": "San Francisco",
    "email": "runemadsen@github.com",
    "hireable": false,
    "bio": "There once was...",
    "public_repos": 2,
    "public_gists": 1,
    "followers": 20,
    "following": 0,
    "html_url": "https://github.com/runemadsen",
    "created_at": "2008-01-14T04:33:35Z",
    "type": "User"
  };

  // Organizations
  // ---------------------------------------

  GHResponses.orgs = {};

  GHResponses.orgs.index = [
    {
      "login": "oreillymedia",
      "id": 1,
      "url": "https://api.github.com/orgs/oreillymedia",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    }
  ];

  GHResponses.orgs.show = {
    "login": "oreillymedia",
    "id": 1,
    "url": "https://api.github.com/orgs/oreillymedia",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "name": "oreillymedia",
    "company": "O'Reilly Media",
    "blog": "https://oreilly.com/blog",
    "location": "Sebastopol",
    "email": "oreillymedia@github.com",
    "public_repos": 2,
    "public_gists": 1,
    "followers": 20,
    "following": 0,
    "html_url": "https://github.com/oreillymedia",
    "created_at": "2008-01-14T04:33:35Z",
    "type": "Organization"
  };

  // Repos
  // ---------------------------------------

  GHResponses.repos = {};

  GHResponses.repos.index = [
    {
      "id": 1296269,
      "owner": { "login": "runemadsen",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/runemadsen" },
      "name": "Hello-World",
      "full_name": "runemadsen/Hello-World",
      "description": "This your first repo!",
      "private": false,
      "fork": false,
      "url": "https://api.github.com/repos/runemadsen/Hello-World",
      "html_url": "https://github.com/runemadsen/Hello-World",
      "clone_url": "https://github.com/runemadsen/Hello-World.git",
      "git_url": "git://github.com/runemadsen/Hello-World.git",
      "ssh_url": "git@github.com:octocat/Hello-World.git",
      "svn_url": "https://svn.github.com/runemadsen/Hello-World",
      "mirror_url": "git://git.example.com/runemadsen/Hello-World",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "watchers": 80,
      "watchers_count": 80,
      "size": 108,
      "master_branch": "master",
      "open_issues": 0,
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z"
    },
    {
      "id": 1296270,
      "owner": { "login": "runemadsen",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/runemadsen" },
      "name": "Hello-Again",
      "full_name": "runemadsen/Hello-Again",
      "description": "This your first repo!",
      "private": false,
      "fork": false,
      "url": "https://api.github.com/repos/runemadsen/Hello-Again",
      "html_url": "https://github.com/runemadsen/Hello-Again",
      "clone_url": "https://github.com/runemadsen/Hello-Again.git",
      "git_url": "git://github.com/runemadsen/Hello-Again.git",
      "ssh_url": "git@github.com:octocat/Hello-Again.git",
      "svn_url": "https://svn.github.com/runemadsen/Hello-Again",
      "mirror_url": "git://git.example.com/runemadsen/Hello-Again",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "watchers": 80,
      "watchers_count": 80,
      "size": 108,
      "master_branch": "master",
      "open_issues": 0,
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z"
    }
  ];

  GHResponses.repos.show = {
    "id": 1296269,
    "owner": {
      "login": "runemadsen",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/runemadsen"
    },
    "name": "Hello-World",
    "full_name": "runemadsen/Hello-World",
    "description": "This your first repo!",
    "private": false,
    "fork": false,
    "url": "https://api.github.com/repos/runemadsen/Hello-World",
    "html_url": "https://github.com/runemadsen/Hello-World",
    "clone_url": "https://github.com/runemadsen/Hello-World.git",
    "git_url": "git://github.com/runemadsen/Hello-World.git",
    "ssh_url": "git@github.com:runemadsen/Hello-World.git",
    "svn_url": "https://svn.github.com/runemadsen/Hello-World",
    "mirror_url": "git://git.example.com/runemadsen/Hello-World",
    "homepage": "https://github.com",
    "language": null,
    "forks": 9,
    "forks_count": 9,
    "watchers": 80,
    "watchers_count": 80,
    "size": 108,
    "master_branch": "master",
    "open_issues": 0,
    "pushed_at": "2011-01-26T19:06:43Z",
    "created_at": "2011-01-26T19:01:12Z",
    "updated_at": "2011-01-26T19:14:43Z",
    "organization": {
      "login": "runemadsen",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/runemadsen",
      "type": "Organization"
    },
    "parent": {
      "id": 1296269,
      "owner": {
        "login": "runemadsen",
        "id": 1,
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "gravatar_id": "somehexcode",
        "url": "https://api.github.com/users/runemadsen"
      },
      "name": "Hello-World",
      "full_name": "runemadsen/Hello-World",
      "description": "This your first repo!",
      "private": false,
      "fork": false,
      "url": "https://api.github.com/repos/runemadsen/Hello-World",
      "html_url": "https://github.com/runemadsen/Hello-World",
      "clone_url": "https://github.com/runemadsen/Hello-World.git",
      "git_url": "git://github.com/runemadsen/Hello-World.git",
      "ssh_url": "git@github.com:runemadsen/Hello-World.git",
      "svn_url": "https://svn.github.com/runemadsen/Hello-World",
      "mirror_url": "git://git.example.com/runemadsen/Hello-World",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "watchers": 80,
      "watchers_count": 80,
      "size": 108,
      "master_branch": "master",
      "open_issues": 0,
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z"
    },
    "source": {
      "id": 1296269,
      "owner": {
        "login": "runemadsen",
        "id": 1,
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "gravatar_id": "somehexcode",
        "url": "https://api.github.com/users/runemadsen"
      },
      "name": "Hello-World",
      "full_name": "runemadsen/Hello-World",
      "description": "This your first repo!",
      "private": false,
      "fork": false,
      "url": "https://api.github.com/repos/runemadsen/Hello-World",
      "html_url": "https://github.com/runemadsen/Hello-World",
      "clone_url": "https://github.com/runemadsen/Hello-World.git",
      "git_url": "git://github.com/runemadsen/Hello-World.git",
      "ssh_url": "git@github.com:runemadsen/Hello-World.git",
      "svn_url": "https://svn.github.com/runemadsen/Hello-World",
      "mirror_url": "git://git.example.com/runemadsen/Hello-World",
      "homepage": "https://github.com",
      "language": null,
      "forks": 9,
      "forks_count": 9,
      "watchers": 80,
      "watchers_count": 80,
      "size": 108,
      "master_branch": "master",
      "open_issues": 0,
      "pushed_at": "2011-01-26T19:06:43Z",
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z"
    },
    "has_issues": true,
    "has_wiki": true,
    "has_downloads": true
  };

  // Contents
  // ---------------------------------------

  GHResponses.contents = {};

  GHResponses.contents.create = {
    "content": {
      "name": "d.png",
      "path": "d.png",
      "sha": "b785435b6d58b3d17a8e66b399e5dcf60243eefa",
      "size": 7166,
      "url": "https://api.github.com/repos/zischwartz/atlas-book-sample/contents/d.png?ref=master",
      "html_url": "https://github.com/zischwartz/atlas-book-sample/blob/master/d.png",
      "git_url": "https://api.github.com/repos/zischwartz/atlas-book-sample/git/blobs/b785435b6d58b3d17a8e66b399e5dcf60243eefa",
      "type": "file",
      "_links": {
        "self": "https://api.github.com/repos/zischwartz/atlas-book-sample/contents/d.png?ref=master",
        "git": "https://api.github.com/repos/zischwartz/atlas-book-sample/git/blobs/b785435b6d58b3d17a8e66b399e5dcf60243eefa",
        "html": "https://github.com/zischwartz/atlas-book-sample/blob/master/d.png"
      }
    },
    "commit": {
      "sha": "c8423de54db8ededf9dc6a1bb62739640b2da50b",
      "url": "https://api.github.com/repos/zischwartz/atlas-book-sample/git/commits/c8423de54db8ededf9dc6a1bb62739640b2da50b",
      "html_url": "https://github.com/zischwartz/atlas-book-sample/commits/c8423de54db8ededf9dc6a1bb62739640b2da50b",
      "author": {
        "name": "zischwartz",
        "email": "zischwartz@gmail.com",
        "date": "2013-06-26T19:51:54Z"
      },
      "committer": {
        "name": "zischwartz",
        "email": "zischwartz@gmail.com",
        "date": "2013-06-26T19:51:54Z"
      },
      "tree": {
        "sha": "3cfa5aeda66cdc08e5dde3083697383ba4b2976a",
        "url": "https://api.github.com/repos/zischwartz/atlas-book-sample/git/trees/3cfa5aeda66cdc08e5dde3083697383ba4b2976a"
      },
      "message": "Added d.png",
      "parents": [
        {
          "sha": "6d7792dfa19e7afbcaf4abafd4735e6c93aa25ff",
          "url": "https://api.github.com/repos/zischwartz/atlas-book-sample/git/commits/6d7792dfa19e7afbcaf4abafd4735e6c93aa25ff",
          "html_url": "https://github.com/zischwartz/atlas-book-sample/commits/6d7792dfa19e7afbcaf4abafd4735e6c93aa25ff"
        }
      ]
    }
  };

  GHResponses.contents.show_file = {
    "type": "file",
    "encoding": "base64",
    "size": 5362,
    "name": "hello.txt",
    "path": "docs/hello.txt",
    "content": "SGVsbG8=", // Hello
    "sha": "3d21ec53a331a6f037a91c368710b99387d012c1",
    "url": "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt",
    "git_url": "https://api.github.com/repos/runemadsen/Hello-World/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1",
    "html_url": "https://github.com/runemadsen/Hello-World/blob/master/README.md",
    "_links": {
      "git": "https://api.github.com/repos/runemadsen/Hello-World/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1",
      "self": "https://api.github.com/repos/runemadsen/Hello-World/contents/README.md",
      "html": "https://github.com/runemadsen/Hello-World/blob/master/README.md"
    }
  };

  GHResponses.contents.show_dir = [
    {
      "type": "file",
      "size": 625,
      "name": "octokit.rb",
      "path": "lib/octokit.rb",
      "sha": "fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
      "url": "https://api.github.com/repos/runemadsen/Hello-World/contents/lib/octokit.rb",
      "git_url": "https://api.github.com/repos/runemadsen/Hello-World/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
      "html_url": "https://github.com/runemadsen/Hello-World/blob/master/lib/octokit.rb",
      "_links": {
        "self": "https://api.github.com/repos/runemadsen/Hello-World/contents/lib/octokit.rb",
        "git": "https://api.github.com/repos/runemadsen/Hello-World/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
        "html": "https://github.com/runemadsen/Hello-World/blob/master/lib/octokit.rb"
      }
    },
    {
      "type": "dir",
      "size": 0,
      "name": "octokit",
      "path": "lib/octokit",
      "sha": "a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
      "url": "https://api.github.com/repos/runemadsen/Hello-World/contents/lib/octokit",
      "git_url": "https://api.github.com/repos/runemadsen/Hello-World/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
      "html_url": "https://github.com/runemadsen/Hello-World/tree/master/lib/octokit",
      "_links": {
        "self": "https://api.github.com/repos/runemadsen/Hello-World/contents/lib/octokit",
        "git": "https://api.github.com/repos/runemadsen/Hello-World/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
        "html": "https://github.com/runemadsen/Hello-World/tree/master/lib/octokit"
      }
    }
  ];

  // Trees
  // ---------------------------------------

  GHResponses.trees = {};

  GHResponses.trees.show = {
    "sha": "9fb037999f264ba9a7fc6274d15fa3ae2ab98312",
    "url": "https://api.github.com/repos/runemadsen/Hello-World/trees/9fb037999f264ba9a7fc6274d15fa3ae2ab98312",
    "tree": [
      {
        "path": "file.rb",
        "mode": "100644",
        "type": "blob",
        "size": 30,
        "sha": "44b4fc6d56897b048c772eb4087f854f46256132",
        "url": "https://api.github.com/repos/runemadsen/Hello-World/git/blobs/44b4fc6d56897b048c772eb4087f854f46256132"
      },
      {
        "path": "subdir",
        "mode": "040000",
        "type": "tree",
        "sha": "f484d249c660418515fb01c2b9662073663c242e",
        "url": "https://api.github.com/repos/runemadsen/Hello-World/git/blobs/f484d249c660418515fb01c2b9662073663c242e"
      },
      {
        "path": "exec_file",
        "mode": "100755",
        "type": "blob",
        "size": 75,
        "sha": "45b983be36b73c0788dc9cbcb76cbb80fc7bb057",
        "url": "https://api.github.com/repos/runemadsen/Hello-World/git/blobs/45b983be36b73c0788dc9cbcb76cbb80fc7bb057"
      }
    ]
  };

  root.GHResponses = GHResponses;
  root.GHAPI = GHAPI;

})(this);
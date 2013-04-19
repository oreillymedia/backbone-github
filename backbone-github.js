window.GitHub = {};
GitHub.token = null;

/* Authenticate
--------------------------------------------------------- */

GitHub.authenticate = function(username, password, options) {
  var postData;
  postData = {};
  if (options.scope != null) {
    postData.scope = options.scope;
  }
  return $.ajax({
    url: "https://api.github.com/authorizations",
    contentType: 'application/json',
    dataType: 'json',
    type: 'POST',
    data: JSON.stringify(postData),
    headers: {
      'Authorization': "Basic " + (btoa("" + username + ":" + password))
    },
    success: function(d, s, x) {
      GitHub.token = d.token;
      if (options.success != null) {
        return options.success(d, s, x);
      }
    },
    error: options.error
  });
};

/* Sync
--------------------------------------------------------- */

GitHub.sync = function(method, model, options) {
  var extendedOptions;
  extendedOptions = _.extend({
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Accept', 'application/vnd.github+json');
      if (GitHub.token) {
        return xhr.setRequestHeader('Authorization', "bearer " + GitHub.token);
      }
    }
  }, options);
  return Backbone.sync(method, model, extendedOptions);
};

/* Extend
--------------------------------------------------------- */

GitHub.Model = Backbone.Model.extend({
  sync: GitHub.sync
});

GitHub.Collection = Backbone.Collection.extend({
  sync: GitHub.sync
});

GitHub.Relations = {
  ownedRepos: function(options) {
    var repos;
    repos = new GitHub.Repos;
    repos.url = typeof this.url === "function" ? this.url() : this.url;
    repos.url += "/repos";
    repos.fetch(options);
    return repos;
  },
  ownedOrgs: function(options) {
    var orgs;
    orgs = new GitHub.Organizations;
    orgs.url = typeof this.url === "function" ? this.url() : this.url;
    orgs.url += "/orgs";
    orgs.fetch(options);
    return orgs;
  }
};

/* User
--------------------------------------------------------- */

GitHub.User = GitHub.Model.extend({
  url : function() { return "https://api.github.com/users/" + this.get("login") },
  repos: GitHub.Relations.ownedRepos,
  organizations: GitHub.Relations.ownedOrgs
}, 
{
  fetch: function(login, options) {
    var user;
    user = new GitHub.User({
      login: login
    });
    user.fetch(options);
    return user;
  }
});

/* Organization
--------------------------------------------------------- */

GitHub.Organization = GitHub.Model.extend({
  url : function() { return "https://api.github.com/orgs/" + this.get("login") },
  repos: GitHub.Relations.ownedRepos
}, 
{
  fetch: function(login, options) {
    var org;
    org = new GitHub.Organization({
      login: login
    });
    org.fetch(options);
    return org;
  }
});

GitHub.Organizations = GitHub.Collection.extend({
  url: 'https://api.github.com/user/orgs',
  model: GitHub.Organization
});

/* Repo
--------------------------------------------------------- */

GitHub.Repo = GitHub.Model.extend({
  url: function() {
    return this.get('url') || ("https://api.github.com/repos/" + (this.get('path')));
  }
}, 
{
  fetch: function(owner, name, options) {
    var repo;
    repo = new GitHub.Repo({
      path: "" + owner + "/" + name
    });
    repo.fetch(options);
    return repo;
  }
});

GitHub.Repos = GitHub.Collection.extend({
  url: 'https://api.github.com/user/repos',
  model: GitHub.Repo
});

/* Current User
--------------------------------------------------------- */

GitHub.currentUser = new GitHub.User();
GitHub.currentUser.url = "https://api.github.com/user";
GitHub.currentUser.urlRoot = null;
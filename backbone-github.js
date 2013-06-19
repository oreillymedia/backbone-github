window.GitHub = {};
window.GitHub.url = "https://api.github.com"
GitHub.token = null;

/* Base64
 * Credit: http://www.webtoolkit.info/javascript-base64.html 
------------------------------------------------------------ */

GitHub.Base64 = {
 
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for decoding
  decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }

    }

    output = GitHub.Base64._utf8_decode(output);

    return output;

  },

  encode : function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = GitHub.Base64._utf8_encode(input);

      while (i < input.length) {

          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }

          output = output +
          this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
          this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

      }

      return output;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }

    return string;
  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

          var c = string.charCodeAt(n);

          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }

      }

      return utftext;
  }   

};

/* Authenticate
--------------------------------------------------------- */

GitHub.authenticate = function(username, password, options) {
  var postData;
  postData = {};
  if (options.scope != null) {
    postData.scope = options.scope;
  }
  return $.ajax({
    url: GitHub.url + "/authorizations",
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
  url : function() { return GitHub.url + "/users/" + this.get("login") },
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
  url : function() { return GitHub.url + "/orgs/" + this.get("login") },
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

/* Collaborator
--------------------------------------------------------- */

GitHub.Collaborator = GitHub.Model.extend({
  backboneClass : "Collaborator"
});

GitHub.Collaborators = GitHub.Collection.extend({
  
  model : GitHub.Collaborator,
  backboneClass : "Collaborators",

  initialize : function(models, options)
  {
    this.repo = options.repo
  },

  url : function() { return this.repo.url() + "/collaborators" }
});

/* Branch
--------------------------------------------------------- */

GitHub.Branch = GitHub.Model.extend({
  backboneClass : "Branch"
});

GitHub.Branches = GitHub.Collection.extend({
  
  model : GitHub.Collaborator,
  backboneClass : "Branches",

  initialize : function(models, options)
  {
    this.repo = options.repo
  },

  url : function() { return this.repo.url() + "/branches" }
});

/* Tree
--------------------------------------------------------- */

GitHub.Tree = GitHub.Model.extend({

  backboneClass : "Tree",

  initialize : function()
  {
    this.on("change", this.parse_collections, this);
    this.blobs = new GitHub.Blobs();
    this.trees = new GitHub.Trees();
    this.parse_collections();
  },

  parse_collections: function()
  {
    this.blobs.reset()
    this.trees.reset()

    _.each(this.get("tree"), function(o) {
      if(o.type == "blob")
      {
        this.blobs.add(new GitHub.Blob(o));
      }
      else if(o.type == "tree")
      {
        this.trees.add(new GitHub.Tree(o));
      }
    }, this);
  },

  url : function()
  { 
    return this.get("url") || this.get("repo").url() + "/git/trees/" + this.get("sha")
  }
});

GitHub.Trees = GitHub.Collection.extend({
  model : GitHub.Tree,
  backboneClass : "Trees"
});

/* Blob
--------------------------------------------------------- */

GitHub.Blob = GitHub.Model.extend({
  backboneClass : "Blob"
});

GitHub.Blobs = GitHub.Collection.extend({
  model : GitHub.Blob,
  backboneClass : "Blobs"
});

/* Contents
--------------------------------------------------------- */

GitHub.Content = GitHub.Model.extend({
  backboneClass : "Content",

  raw : function()
  {
    if(this.get("type") == "file" && this.get("content"))
      return GitHub.Base64.decode(this.get("content"));
    else
      throw new Error('No Base64 encoded content found in: ' + this.get("type"));
  },
  cook: function(content)
  {
    if(this.get("type") == "file" && this.get("content"))
      this.set('content',GitHub.Base64.encode(content))

    else
      throw new Error('No Base64 encoded content found in: ' + this.get("type"));
  },
  url: function() 
  {
    repo = this.get('repo');
    url = repo.url()+'/contents/'+ this.get('path')+'?ref='+this.get('ref');
    return url;
  }


});

GitHub.Contents = GitHub.Collection.extend({
  model : GitHub.Content,
  backboneClass : "Contents"
});

/* Repo
--------------------------------------------------------- */

GitHub.Repo = GitHub.Model.extend({
  
  backboneClass : "Repo",

  url: function()
  {
    if(this.get("url"))
      return this.get("url")
    else if(this.get("owner") && this.get("owner").login && this.get("name"))
      return GitHub.url + "/repos/" + this.get("owner").login + "/" + this.get("name")
    else
      return GitHub.url + "/repos/" + this.get("full_name");
  },

  contents : function(ref, path, options)
  {
    var t=this;
    var sync_options = {
      url : this.url() + "/contents/" + path,
      data : $.param({ref:ref}),
      success : function(res)
      {
        res.repo = t;
        res.ref = ref
        res.id = res.sha
        var model = _.isArray(res) ? new GitHub.Contents(res) : new GitHub.Content(res);

        if(options.success) options.success(model);
      },
      error : function(e1, e2, e3)
      {
        if(options.error) options.error(e1, e2, e3);
      }
    }

    // Backbone.sync needs an empty model to work
    GitHub.sync('read', new Backbone.Model(), sync_options)
  },

  create_file : function(ref, path, file_content, options)
  {
    var newFile = new GitHub.Content({
      ref: ref,
      repo : this,
      content: GitHub.Base64.encode(file_content),
      path: path
    });

    newFile.save();
    return newFile;
  },

  collaborators : function(options)
  {
    var collaborators = new GitHub.Collaborators([], {repo:this})
    collaborators.fetch(options)
    return collaborators
  },

  branches : function(options)
  {
    var branches = new GitHub.Branches([], {repo:this})
    branches.fetch(options)
    return branches
  },

  // Git Data
  // -------------------------------------------------------------

  tree : function(sha, options)
  {
    var tree = new GitHub.Tree({sha:sha, repo:this})
    tree.fetch(options)
    return tree
  }
}, 
{
  fetch: function(owner, name, options) {
    var repo;
    repo = new GitHub.Repo({
      full_name: owner + "/" + name
    });
    repo.fetch(options);
    return repo;
  }
});

GitHub.Repos = GitHub.Collection.extend({
  url: GitHub.url + '/user/repos',
  model: GitHub.Repo
});

/* Current User
--------------------------------------------------------- */

GitHub.currentUser = new GitHub.User();
GitHub.currentUser.url = GitHub.url + "/user";
GitHub.currentUser.urlRoot = null;
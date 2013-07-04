# Backbone GitHub

NB: This library has added ton of features since we wrote this README. Please see test coverage for features.

Backbone GitHub is a 100% client-side Javascript library for accessing the GitHub API using Cross Origin Resource Sharing.

The library is covered by a suite of Jasmine tests in the `/test` directory.

## Usage

### The options object

Many of the methods in the library takes an `options` object that is passed directly to the fetch methods in Backbone. This means you can give it a `success` or `error` callback, along with other jQuery specific attributes, like `data`, etc.

### Oauth

If you already have an OAuth token, you can pass it to the library, and it will be used to make authenticated calls to the API.

```javascript
GitHub.token = "abcdefg"
```

If you don't have an OAuth token, you can use basic auth to retrieve a token, via the `GitHub.authenticate` method. Note that this will authenticate the user with a generic "GitHub API" application. In order to have an app-specific token you need to use the redirect flow, which is not available in this library.

The third parameter takes is an `options` object with available options:

* **success:** a callback function that takes arguments
  `data`, `textStatus`, and `jqXHR` (standard jQuery
  success callback)
* **error:** a callback function that takes arguments
  `jqXHR`, `textStatus`, and `errorThrown`
* **scope:** provide comma-separated scopes. For example,
  `repo,user`

```javascript
GitHub.authenticate("myuser", "mypassword", {
	success : function(data)
	{
		console.log(token.data);
	}
})
```

### GitHub.currentUser

If using an OAuth token, you can get info on the current user through the `GitHub.currentUser` variable.

```javascript
GitHub.currentUser.fetch()
```

This user is now a GitHub.User model, with all the methods listed below.

### GitHub.User

You can also retrieve info on a user directly from the `GitHub.User` object. The second parameter is an options object that takes a `success` and `error` callback.

```javascript
GitHub.User.fetch('myuser', {
	success: function(u) {
  	// u is now a loaded GitHub.User model instance
	}
});
```

You can the fetch a users repositories via the `repos` callback. The method returns a `GitHub.Repos` collection.

```javascript
u.repos({
	success: function(r) {
  	// r is now a loaded GitHub.Repos collection
	}
});
```

You can fetch a users organizations via the `organizations` callback. The method returns a `GitHub.Organizations` collection.

```javascript
u.organizations({
	success: function(r) {
  	// r is now a loaded GitHub.Organizations collection
	}
});
```

### GitHub.Organization

You can fetch an organization by name via the `GitHub.Organization.fetch` callback. The second parameter is an options object that takes a `success` and `error` callback.

```javascript
GitHub.Organization.fetch('myuser', {
	success: function(o){
  	// o is now a loaded GitHub.Organization model
  }
});
```

You can then fetch an organizations' repositories via the `repos` callback. The method returns a `GitHub.Repos` collection.

```javascript
o.repos({
	success: function(r) {
  	// r is now a loaded GitHub.Repos collection
	}
});
```

### GitHub.Repo

You can fetch a by knowing its owner and name. The third parameter is an options object that takes a `success` and `error` callback.

```javascript
GitHub.Repo.fetch('myuser', 'myrepos', {
	success: function(r) {
  	// r is now a loaded GitHub.Repo model
	}
});
```

From a `GitHub.Repo` object, you can retrieve a selection of data. In the following example we assume that the variable `r` is a `GitHub.Repo` instance that has at least the necessary information to figure our the URL of the repo. This means that you don't need to fetch the entire repo info before using the methods explained below. Instead you can initialize a repo like this:

```javascript
var r = new GitHub.Repo({full_name:"runemadsen/myrepo"})
```

... or like this

```javascript
var r = new GitHub.Repo({owner:{login:"runemadsen"}, name:"myrepo"})
```

... or with a full URL

```javascript
var r = new GitHub.Repo({url:"https://api.github.com/repos/runemadsen/Hello-World"})
```

### GitHub.File and GitHub.Dir

This method allows you to retrieve the contents of a file or folder from the repo, without first loading a ref, then a tree, and then the blob.

The method takes the string name of a ref (commit/branch/tag), the path to a folder or file, and an options hash.

```javascript
r.contents("master", "docs/hellotxt", {
	success : function(res)
	{
		// res is now a loaded GitHub.File model or a GitHub.Dir collection
		// you can check the type by calling res.backboneClass
	}
})
```

The method will wither return a GitHub.File model, or a GitHub.Dir collection.

## License

This library was originally ported from Michal Bleigh's amazing `backbone-github` library. All credit goes to the original author.

Copyright (c) 2012 Michael Bleigh and Intridea, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

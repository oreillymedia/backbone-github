# Backbone GitHub

**NOTE:** Under development, not released yet.

Backbone GitHub is a 100% client-side Javascript library for accessing
the GitHub API using Cross Origin Resource Sharing.

## Usage

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

### Github.User

If using an OAuth token, you can get info on the current user through the `GitHub.currentUser` variable.

```javascript
GitHub.currentUser.fetch()
```

You can also retrieve info on a user directly from the `GitHub.User` object. The second parameter is an options object that takes a `success` and `error` callback.

```javascript
GitHub.User.fetch('myuser', {
	success: function(u) {
  	// u is now a loaded GitHub.User model instance
	}
});
```

You can fetch a users repositories via the `repos` callback. The method returns a `GitHub.Repos` collection.

```javascript
var u = GitHub.currentUser;
u.repos({
	success: function(r) {
  	// r is now a loaded GitHub.Repos collection
	}
});
```

You can fetch a users organizations via the `organizations` callback. The method returns a `GitHub.Organizations` collection.

```javascript
var u = GitHub.currentUser;
u.organizations({
	success: function(r) {
  	// r is now a loaded GitHub.Organizations collection
	}
});
```

## License

This library was originally ported from Michal Bleigh's amazing `backbone-github` library. All credit goes to the original author.

Copyright (c) 2012 Michael Bleigh and Intridea, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
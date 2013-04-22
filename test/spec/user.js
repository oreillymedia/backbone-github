/* Current User
------------------------------------------------------------------- */

describe("currentUser", function() {

  beforeEach(function() {
    API.xhr_fake();
  });

  afterEach(function() {
    API.xhr_restore();
  });

	it("should call correct URL in currentUser.fetch()", function()
	{
  	GitHub.currentUser.fetch();
  	expect(API.xhr_last().url).toEqual("https://api.github.com/user");
	});

	it("should call correct URL in currentUser.repos()", function()
	{
  	GitHub.currentUser.repos();
  	expect(API.xhr_last().url).toEqual("https://api.github.com/user/repos");
	});

	it("should call correct URL in currentUser.organizations()", function()
	{
  	GitHub.currentUser.organizations();
  	expect(API.xhr_last().url).toEqual("https://api.github.com/user/orgs");
	});

});

/* GitHub.User
------------------------------------------------------------------- */

describe("User", function() {

  beforeEach(function() {
    API.xhr_fake();
  });

  afterEach(function() {
    API.xhr_restore();
  });

	it("should call correct URL in User.fetch()", function()
	{
  	GitHub.User.fetch('runemadsen');
  	expect(API.xhr_last().url).toEqual("https://api.github.com/users/runemadsen");
	});

	it("should call correct URL in user.repos()", function()
	{
  	var u = new GitHub.User(GitHubObjects.users.show)
  	u.repos();
  	expect(API.xhr_last().url).toEqual("https://api.github.com/users/runemadsen/repos");
	});

	it("should call correct URL in user.organizations()", function()
	{
  	var u = new GitHub.User(GitHubObjects.users.show)
  	u.organizations();
  	expect(API.xhr_last().url).toEqual("https://api.github.com/users/runemadsen/orgs");
	});

});
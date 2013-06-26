/* Current User
------------------------------------------------------------------- */

describe("currentUser", function() {

  beforeEach(function() {
    GHAPI.fake();
  });

  afterEach(function() {
    GHAPI.unfake();
  });

	it("should call correct URL in currentUser.fetch()", function()
	{
  	GitHub.currentUser.fetch();
  	expect(GHAPI.lastRequest().url).toEqual("https://api.github.com/user");
	});

	it("should call correct URL in currentUser.repos()", function()
	{
  	GitHub.currentUser.repos();
  	expect(GHAPI.lastRequest().url).toEqual("https://api.github.com/user/repos");
	});

	it("should call correct URL in currentUser.organizations()", function()
	{
  	GitHub.currentUser.organizations();
  	expect(GHAPI.lastRequest().url).toEqual("https://api.github.com/user/orgs");
	});

});

/* GitHub.User
------------------------------------------------------------------- */

describe("User", function() {

  beforeEach(function() {
    GHAPI.fake();
  });

  afterEach(function() {
    GHAPI.unfake();
  });

	it("should call correct URL in User.fetch()", function()
	{
  	GitHub.User.fetch('runemadsen');
  	expect(GHAPI.lastRequest().url).toEqual("https://api.github.com/users/runemadsen");
	});

	it("should call correct URL in user.repos()", function()
	{
  	var u = new GitHub.User(GHResponses.users.show)
  	u.repos();
  	expect(GHAPI.lastRequest().url).toEqual("https://api.github.com/users/runemadsen/repos");
	});

	it("should call correct URL in user.organizations()", function()
	{
  	var u = new GitHub.User(GHResponses.users.show)
  	u.organizations();
  	expect(GHAPI.lastRequest().url).toEqual("https://api.github.com/users/runemadsen/orgs");
	});

});
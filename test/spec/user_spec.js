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
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/user"));
	});

	it("should call correct URL in currentUser.repos()", function()
	{
  	GitHub.currentUser.repos();
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/user/repos"));
	});

	it("should call correct URL in currentUser.organizations()", function()
	{
  	GitHub.currentUser.organizations();
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/user/orgs"));
	});

  it("should call correct URLs and methods in user.fork()", function()
  {
    GitHub.currentUser.fork('oreillymedia/test-repo');
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/oreillymedia/test-repo/forks"));
    expect(GHAPI.lastRequest().method).toEqual("POST");
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
  	GitHub.User.fetch('atlasservers');
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/users/atlasservers"));
	});

	it("should call correct URL in user.repos()", function()
	{
  	var u = new GitHub.User(GHObjects.users.show.response);
  	u.repos();
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/users/atlasservers/repos"));
	});

	it("should call correct URL in user.organizations()", function()
	{
  	var u = new GitHub.User(GHObjects.users.show.response)
  	u.organizations();
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/users/atlasservers/orgs"));
	});

});
describe("Organization", function() {

  beforeEach(function() {
    API.xhr_fake();
  });

  afterEach(function() {
    API.xhr_restore();
  });

	it("should call correct URL in Organization.fetch()", function()
	{
  	GitHub.Organization.fetch('oreillymedia');
  	expect(API.xhr_last().url).toEqual("https://api.github.com/orgs/oreillymedia");
	});

	it("should call correct URL in organization.repos()", function()
	{
  	var o = new GitHub.Organization(GitHubObjects.orgs.show)
  	o.repos();
  	expect(API.xhr_last().url).toEqual("https://api.github.com/orgs/oreillymedia/repos");
	});

});

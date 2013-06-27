describe("Organization", function() {

  beforeEach(function() {
    GHAPI.fake();
  });

  afterEach(function() {
    GHAPI.unfake();
  });

	it("should call correct URL in Organization.fetch()", function()
	{
  	GitHub.Organization.fetch('oreillymedia');
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/orgs/oreillymedia"));
	});

	it("should call correct URL in organization.repos()", function()
	{
  	var o = new GitHub.Organization(GHObjects.orgs.show.response);
  	o.repos();
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/orgs/oreillymedia/repos"));
	});

});
describe("GitHub", function() {

	beforeEach(function() {
		API.xhr_fake();
	});

	afterEach(function() {
		API.xhr_restore();
	});

  /* Current User
  ------------------------------------------------------------------- */

	describe("currentUser", function() {

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

  /* GitHub.Organization
  ------------------------------------------------------------------- */

	describe("Organization", function() {

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

  /* GitHub.Repo
  ------------------------------------------------------------------- */

	describe("Repo", function() {

  	it("should call correct URL in Repo.fetch()", function()
		{
    	GitHub.Repo.fetch('runemadsen', 'Hello-World');
    	expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
  	});

    it("should call correct URL in Repo.fetch() with only full_name", function()
    {
      var r = new GitHub.Repo({full_name:"runemadsen/Hello-World"})
      r.fetch();
      expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
    });

    it("should call correct URL in Repo.fetch() with only url", function()
    {
      var r = new GitHub.Repo({url:"https://api.github.com/repos/runemadsen/Hello-World"})
      r.fetch();
      expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
    });

    it("should call correct URL in Repo.fetch() with only login and name", function()
    {
      var r = new GitHub.Repo({owner:{login:"runemadsen"}, name:"Hello-World"})
      r.fetch();
      expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
    });

    describe("contents()", function() {

      var r;

      beforeEach(function() {
        r = new GitHub.Repo({full_name:"runemadsen/Hello-World"})
      });

      it("should call correct URL in Repo.contents()", function()
      {
        r.contents("master", "docs/hello.txt")
        expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master");
      });

      it("should return GitHub.File in Repo.contents()", function()
      {
      });

      it("should return GitHub.Dir in Repo.contents()", function()
      {
      });

      it("should call options success callback on success", function()
      {

      });

      it("should preserve options attributes to add to ajax call", function()
      {

      });

    });
  
	});

});
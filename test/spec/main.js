describe("GitHub", function() {

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

  /* GitHub.Organization
  ------------------------------------------------------------------- */

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

  /* GitHub.Repo
  ------------------------------------------------------------------- */

	describe("Repo", function() {

    beforeEach(function() {
      API.xhr_fake();
    });

    afterEach(function() {
      API.xhr_restore();
    });

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
  
	});

  /* GitHub.repo.contents()
  ------------------------------------------------------------------- */

  describe("GitHub.repo.contents()", function() {

      var r;

      beforeEach(function() {
        r = new GitHub.Repo({full_name:"runemadsen/Hello-World"})
      });

      it("should call correct URL in Repo.contents()", function()
      {
        API.xhr_fake();
        r.contents("master", "docs/hello.txt")
        expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master");
        API.xhr_restore();
      });

      it("should return GitHub.File in Repo.contents()", function()
      {
        API.server_fake();
        API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [200, {}, to_s(GitHubObjects.contents.show.file)]);
        
        var result;
        r.contents("master", "docs/hello.txt", {
          success : function(o)
          {
            result = o;
          }
        });
        API.server.respond();

        expect(result.backboneClass).toBe("File")
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
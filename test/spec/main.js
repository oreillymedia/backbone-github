describe("GitHub", function() {

	var xhr, requests;

	beforeEach(function() {
		xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) { requests.push(req); };
	});

	afterEach(function() {
		xhr.restore();
	});

  /* Current User
  ------------------------------------------------------------------- */

	describe("currentUser", function() {

  	it("should call correct URL in currentUser.fetch()", function()
		{
    	GitHub.currentUser.fetch();
    	expect(requests[0].url).toEqual("https://api.github.com/user");
  	});

  	it("should call correct URL in currentUser.repos()", function()
		{
    	GitHub.currentUser.repos();
    	expect(requests[0].url).toEqual("https://api.github.com/user/repos");
  	});

  	it("should call correct URL in currentUser.organizations()", function()
		{
    	GitHub.currentUser.organizations();
    	expect(requests[0].url).toEqual("https://api.github.com/user/orgs");
  	});

	});

  /* GitHub.User
  ------------------------------------------------------------------- */

	describe("User", function() {

  	it("should call correct URL in User.fetch()", function()
		{
    	GitHub.User.fetch('runemadsen');
    	expect(requests[0].url).toEqual("https://api.github.com/users/runemadsen");
  	});

  	it("should call correct URL in user.repos()", function()
		{
    	var u = new GitHub.User(GitHubObjects.users.show)
    	u.repos();
    	expect(requests[0].url).toEqual("https://api.github.com/users/runemadsen/repos");
  	});

  	it("should call correct URL in user.organizations()", function()
		{
    	var u = new GitHub.User(GitHubObjects.users.show)
    	u.organizations();
    	expect(requests[0].url).toEqual("https://api.github.com/users/runemadsen/orgs");
  	});

	});

  /* GitHub.Organization
  ------------------------------------------------------------------- */

	describe("Organization", function() {

  	it("should call correct URL in Organization.fetch()", function()
		{
    	GitHub.Organization.fetch('oreillymedia');
    	expect(requests[0].url).toEqual("https://api.github.com/orgs/oreillymedia");
  	});

  	it("should call correct URL in organization.repos()", function()
		{
    	var o = new GitHub.Organization(GitHubObjects.orgs.show)
    	o.repos();
    	expect(requests[0].url).toEqual("https://api.github.com/orgs/oreillymedia/repos");
  	});

	});

  /* GitHub.Repo
  ------------------------------------------------------------------- */

	describe("Repo", function() {

  	it("should call correct URL in Repo.fetch()", function()
		{
    	GitHub.Repo.fetch('runemadsen', 'Hello-World');
    	expect(requests[0].url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
  	});

    it("should call correct URL in Repo.fetch() with only full_name", function()
    {
      var r = new GitHub.Repo({full_name:"runemadsen/Hello-World"})
      r.fetch();
      expect(requests[0].url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
    });

    it("should call correct URL in Repo.fetch() with only url", function()
    {
      var r = new GitHub.Repo({url:"https://api.github.com/repos/runemadsen/Hello-World"})
      r.fetch();
      expect(requests[0].url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
    });

    it("should call correct URL in Repo.fetch() with only login and name", function()
    {
      var r = new GitHub.Repo({owner:{login:"runemadsen"}, name:"Hello-World"})
      r.fetch();
      expect(requests[0].url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
    });

    it("should call correct URL in Repo.fetch() with only login and name", function()
    {
    });

    it("should call correct URL in Repo.contents()", function()
    {
    });

    it("should return GitHub.File in Repo.contents()", function()
    {
    });

    it("should return GitHub.Dir in Repo.contents()", function()
    {
    });

	});

  /* GitHub.File
  ------------------------------------------------------------------- */

  describe("File and Dir", function() {

    

    it("should call correct URL in Repo.contents()", function()
    {
      GitHub.Repo.fetch('runemadsen', 'Hello-World');
      expect(requests[0].url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
    });

    // it should work with just the login and the repo name when fetching data from the repos 
    // so we don't need to fetch the repo, then fetch the thing we want

    // should check if url is there, then if full_path is there, then use login and name is there

  });

});
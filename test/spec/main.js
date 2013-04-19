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

	describe("currentUser", function() {

  	it("Should call correct URL in currentUser.fetch()", function()
		{
    	GitHub.currentUser.fetch();
    	expect(requests[0].url).toEqual("https://api.github.com/user");
  	});

  	it("Should call correct URL in currentUser.repos()", function()
		{
    	GitHub.currentUser.repos();
    	expect(requests[0].url).toEqual("https://api.github.com/user/repos");
  	});

  	it("Should call correct URL in currentUser.organizations()", function()
		{
    	GitHub.currentUser.organizations();
    	expect(requests[0].url).toEqual("https://api.github.com/user/orgs");
  	});

	});

	describe("User", function() {

  	it("Should call correct URL in User.fetch()", function()
		{
    	GitHub.User.fetch('runemadsen');
    	expect(requests[0].url).toEqual("https://api.github.com/users/runemadsen");
  	});

  	it("Should call correct URL in user.repos()", function()
		{
    	var u = new GitHub.User(GitHubObjects.users.show)
    	u.repos();
    	expect(requests[0].url).toEqual("https://api.github.com/users/runemadsen/repos");
  	});

  	it("Should call correct URL in user.organizations()", function()
		{
    	var u = new GitHub.User(GitHubObjects.users.show)
    	u.organizations();
    	expect(requests[0].url).toEqual("https://api.github.com/users/runemadsen/orgs");
  	});

	});

	describe("Organization", function() {

  	it("Should call correct URL in Organization.fetch()", function()
		{
    	GitHub.Organization.fetch('oreillymedia');
    	expect(requests[0].url).toEqual("https://api.github.com/orgs/oreillymedia");
  	});

  	it("Should call correct URL in organization.repos()", function()
		{
    	var o = new GitHub.Organization(GitHubObjects.orgs.show)
    	o.repos();
    	expect(requests[0].url).toEqual("https://api.github.com/orgs/oreillymedia/repos");
  	});

	});

	describe("Repo", function() {

  	it("Should call correct URL in Repo.fetch()", function()
		{
    	GitHub.Repo.fetch('runemadsen', 'Hello-World');
    	expect(requests[0].url).toEqual("https://api.github.com/repos/runemadsen/Hello-World");
  	});

	});

  

});
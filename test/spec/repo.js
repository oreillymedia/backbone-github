/* Repo
------------------------------------------------------------------- */

describe("Repo", function() {

  beforeEach(function() {
    API.xhr_fake();
  });

  afterEach(function() {
    API.xhr_restore();
  });

  it("should have backboneClass", function()
  {
    var r = new GitHub.Repo({full_name:"runemadsen/Hello-World"})
    expect(r.backboneClass).toEqual("Repo");
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

  it("should fetch a tree from the given sha", function() {
    var tree;
    var r = Helpers.get_repo();
    r.tree("master", {
      success : function(t) { tree = t }
    })
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/git/trees/master");
  })

  it("should fetch collaborators", function() {
    var collab;
    var r = Helpers.get_repo();
    r.collaborators({
      success : function(c) { collab = c }
    })
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/collaborators");
  })

  it("should fetch branches", function() {
    var branches;
    var r = Helpers.get_repo();
    r.branches({
      success : function(b) { branches = b }
    })
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/branches");
  })

});

describe("GitHub.repo.contents()", function() {

  var r;

  beforeEach(function() {
    r = Helpers.get_repo();
  });

  it("should call correct URL in Repo.contents()", function()
  {
    API.xhr_fake();
    r.contents("master", "docs/hello.txt")
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master");
    API.xhr_restore();
  });

  it("should return GitHub.Content in Repo.contents()", function()
  {
    API.server_fake();
    API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [200, {}, to_s(GitHubObjects.contents.show.file)]);
    var result;
    r.contents("master", "docs/hello.txt", {
      success : function(o) { result = o; }
    });
    API.server.respond();
    expect(result.backboneClass).toBe("Content");
    API.server_restore();
  });

  it("should return GitHub.Dir in Repo.contents()", function()
  {
    API.server_fake();
    API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs?ref=master", [200, {}, to_s(GitHubObjects.contents.show.dir)]);
    var result;
    r.contents("master", "docs", {
      success : function(o) { result = o; }
    });
    API.server.respond();
    expect(result.backboneClass).toBe("Contents");
    API.server_restore();
  });

  it("should call options success callback on success", function()
  {
    var options = { success : function() {} };
    spyOn(options, "success");
    API.server_fake();
    API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [200, {}, to_s(GitHubObjects.contents.show.file)]);
    var result;
    r.contents("master", "docs/hello.txt", options);
    API.server.respond();
    expect(options.success).toHaveBeenCalled();
    API.server_restore();
  });

});
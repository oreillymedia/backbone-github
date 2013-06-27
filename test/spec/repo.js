/* Repo
------------------------------------------------------------------- */

describe("Repo", function() {

  beforeEach(function() {
    GHAPI.fake();
  });

  afterEach(function() {
    GHAPI.unfake();
  });

  it("should have backboneClass", function()
  {
    var r = new GitHub.Repo({full_name:"runemadsen/Hello-World"});
    expect(r.backboneClass).toEqual("Repo");
  });

	it("should call correct URL in Repo.fetch()", function()
	{
  	GitHub.Repo.fetch('runemadsen', 'Hello-World');
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World"));
	});

  it("should call correct URL in Repo.fetch() with only full_name", function()
  {
    var r = new GitHub.Repo({full_name:"runemadsen/Hello-World"})
    r.fetch();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World"));
  });

  it("should call correct URL in Repo.fetch() with only url", function()
  {
    var r = new GitHub.Repo({url:GHAPI.url("/repos/runemadsen/Hello-World")});
    r.fetch();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World"));
  });

  it("should call correct URL in Repo.fetch() with only login and name", function()
  {
    var r = new GitHub.Repo({owner:{login:"runemadsen"}, name:"Hello-World"})
    r.fetch();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World"));
  });

  it("should fetch a tree from the given sha", function() {
    var tree;
    var r = Helpers.get_repo();
    r.tree("master", {
      success : function(t) { tree = t }
    })
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World/git/trees/master"));
  })

  it("should fetch collaborators", function() {
    var collab;
    var r = Helpers.get_repo();
    r.collaborators({
      success : function(c) { collab = c }
    })
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World/collaborators"));
  })

  it("should fetch branches", function() {
    var branches;
    var r = Helpers.get_repo();
    r.branches({
      success : function(b) { branches = b }
    })
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World/branches"));
  });

});

describe("GitHub.repo.contents()", function() {

  var r;

  beforeEach(function() {
    GHAPI.fake();
    r = Helpers.get_repo();
  });

  afterEach(function() {
    GHAPI.unfake();
  });

  it("should call correct URL in Repo.contents()", function()
  {
    r.contents("master", "docs/hello.txt")
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master"));
  });

  it("should call correct URL in Repo.create_file()", function()
  {
    file_content = "Hello World!!!"
    r.create_file('master', "docs/hello.txt", file_content)
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master"));
    expect(GHAPI.lastRequest().method).toEqual("PUT");
    content = JSON.parse(GHAPI.lastRequest().requestBody).content;
    expect(content).toEqual(GitHub.Base64.encode(file_content));
  });

  it("should return GitHub.Content in Repo.contents()", function()
  {
    GHAPI.fakeRequest("get", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.contents.show_file);
    var result;
    r.contents("master", "docs/hello.txt", {
      success : function(o) { result = o; }
    });
    GHAPI.respond();
    expect(result.backboneClass).toBe("Content");
  });

  it("should return GitHub.Dir in Repo.contents()", function()
  {
    GHAPI.fakeRequest("get", "/repos/runemadsen/Hello-World/contents/docs?ref=master", GHResponses.contents.show_dir);
    var result;
    r.contents("master", "docs", {
      success : function(o) { result = o; }
    });
    GHAPI.respond();
    expect(result.backboneClass).toBe("Contents");
  });

  it("should call options success callback on success", function()
  {
    GHAPI.fakeRequest("get", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.contents.show_file);
    var result;
    var options = { success : function() {} };
    spyOn(options, "success");
    r.contents("master", "docs/hello.txt", options);
    GHAPI.respond();
    expect(options.success).toHaveBeenCalled();
  });

  it("should return raw content parsed from Base64", function()
  {
    GHAPI.fakeRequest("get", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.contents.show_file);
    var result;
    r.contents("master", "docs/hello.txt", {
      success : function(o) { result = o; }
    });
    GHAPI.respond();
    expect(result.raw()).toBe("Hello");
  });

});

describe('Github.repo.create_file', function(){

  var r;

  beforeEach(function() {
    GHAPI.fake(true);
    r = Helpers.get_repo();
  });

  afterEach(function() {
    GHAPI.unfake();
  });

  it("should PUT (not post!) to the URL in the actual repo on github, with correct contents and commit message ", function()
  {
    file_content = "Hello World!!!";
    commit_message = 'added file.txt';
    r.create_file('master', "docs/hello.txt", file_content, commit_message);
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master"));
    expect(GHAPI.lastRequest().method).toEqual("PUT");
    content = JSON.parse(GHAPI.lastRequest().requestBody).content;
    expect(JSON.parse(GHAPI.lastRequest().requestBody).message).toEqual(commit_message);
    expect(content).toEqual(GitHub.Base64.encode(file_content));
  });

  it("should call success cb() on create_file", function()
  {
    GHAPI.fakeRequest("put", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.contents.show_file);
    var options = {success: function(){}};
    spyOn(options, 'success');
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    r.create_file('master', "docs/hello.txt", file_content, commit_message, options);
    GHAPI.respond();
    expect(options.success).toHaveBeenCalled();
  });

  it("should call error cb() on create_file", function()
  {
    GHAPI.fakeRequest("put", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.error, 500);
    var options = {error: function(){}};
    spyOn(options, 'error');
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    r.create_file('master', "docs/hello.txt", file_content, commit_message, options);
    GHAPI.respond();
    expect(options.error).toHaveBeenCalled();
  });

  it("should modify the model based on the content returned by the api", function()
  {
    GHAPI.fakeRequest("put", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.contents.create);
    var options = {success: function(){} };
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    newFile = r.create_file('master', "docs/hello.txt", file_content, commit_message, options);
    GHAPI.respond();
    expect(newFile.get('sha')).toEqual(GHResponses.contents.create.content.sha);
  });

  it("should PUT to the URL in the actual repo on github", function()
  {
    GHAPI.fakeRequest("get", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.contents.show_file);
    GHAPI.fakeRequest("put", "/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", GHResponses.contents.create);

    var result;
    r.contents("master", "docs/hello.txt", {
        success: function(o){ result = o;},
        error: function(e){console.log(e);}
    });
    GHAPI.respond();
    file_content = "bye bye"
    result.cook(file_content); //need to base64
    result.save();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master"));
    expect(GHAPI.lastRequest().method).toEqual("PUT");
    content = JSON.parse(GHAPI.lastRequest().requestBody).content;
    expect(content).toEqual(GitHub.Base64.encode(file_content));
  });

});
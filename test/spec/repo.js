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

  it("should return raw content parsed from Base64", function()
  {
    API.server_fake();
    API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [200, {}, to_s(GitHubObjects.contents.show.file)]);
    var result;
    r.contents("master", "docs/hello.txt", {
      success : function(o) { result = o; }
    });
    API.server.respond();
    expect(result.raw()).toBe("Hello");
    API.server_restore();
  });

});



describe('Github.repo.create_file', function(){

  var r;

  beforeEach(function() {
    r = Helpers.get_repo();
  });

  it("should PUT (not post!) to the URL in the actual repo on github, with correct contents and commit message ", function()
  {
    API.xhr_fake();
    file_content = "Hello World!!!";
    commit_message = 'added file.txt';
    r.create_file('master', "docs/hello.txt", file_content, commit_message);
    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master");
    expect(API.xhr_last().method).toEqual("PUT");
    content = JSON.parse(API.xhr_last().requestBody).content;
    expect(JSON.parse(API.xhr_last().requestBody).message).toEqual(commit_message);
    expect(content).toEqual(GitHub.Base64.encode(file_content));

    API.xhr_restore();
  });

  it("should call success cb() on create_file", function()
  {
    API.server_fake();
    API.server.respondWith("put", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [200, {}, to_s(GitHubObjects.contents.show.file)]);
    var options = {success: function(){} };
    spyOn(options, 'success');
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    r.create_file('master', "docs/hello.txt", file_content, commit_message, options);
    API.server.respond();
    expect(options.success).toHaveBeenCalled();
    API.server_restore();
  });


  it("should modify the model based on the content returned by the api", function()
  {
    API.server_fake();
    API.server.respondWith("put", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [201, {}, to_s(GitHubObjects.contents.create)]);
    var options = {success: function(){} };
    // spyOn(options, 'success');
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    newFile = r.create_file('master', "docs/hello.txt", file_content, commit_message, options);
    console.log(newFile);
    API.server.respond();
    expect(newFile.get('sha')).toEqual(GitHubObjects.contents.create.content.sha);
    API.server_restore();
  });

    it("should call error cb() on create_file", function()
  {
    API.server_fake();
    API.server.respondWith("put", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [500, {}, to_s(GitHubObjects.contents.show.file)]);
    var options = {error: function(){} };
    spyOn(options, 'error');
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    r.create_file('master', "docs/hello.txt", file_content, commit_message, options);
    API.server.respond();
    expect(options.error).toHaveBeenCalled();
    API.server_restore();
  });

  it("should PUT to the URL in the actual repo on github", function()
  {
    API.server_fake();
    var result;
    API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master", [200, {}, to_s(GitHubObjects.contents.show.file)]);
    r.contents("master", "docs/hello.txt", {
        success: function(o){ result = o;},
        error: function(e){console.log(e);}
    });
    API.server.respond();
    file_content = "bye bye"

    API.server_restore();
    API.xhr_fake();
    result.cook(file_content); //need to base64
    result.save();

    expect(API.xhr_last().url).toEqual("https://api.github.com/repos/runemadsen/Hello-World/contents/docs/hello.txt?ref=master");
    expect(API.xhr_last().method).toEqual("PUT");
    content = JSON.parse(API.xhr_last().requestBody).content;
    expect(content).toEqual(GitHub.Base64.encode(file_content));
    API.xhr_restore();

  });

});
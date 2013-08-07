/* Repo
------------------------------------------------------------------- */

describe("Repo", function() {

  beforeEach(function() {
    GHAPI.fake(true);
  });

  afterEach(function() {
    GHAPI.unfake();
  });

  it("should have backboneClass", function()
  {
    var r = new GitHub.Repo({full_name:"atlasservers/basic-sample"});
    expect(r.backboneClass).toEqual("Repo");
  });

	it("should call correct URL in Repo.fetch()", function()
	{
  	GitHub.Repo.fetch('atlasservers', 'basic-sample');
  	expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample"));
	});

  it("should call correct URL in Repo.fetch() with only full_name", function()
  {
    var r = new GitHub.Repo({full_name:"atlasservers/basic-sample"})
    r.fetch();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample"));
  });

  it("should call correct URL in Repo.fetch() with only url", function()
  {
    var r = new GitHub.Repo({url:GHAPI.url("/repos/atlasservers/basic-sample")});
    r.fetch();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample"));
  });

  it("should call correct URL in Repo.fetch() with only login and name", function()
  {
    var r = new GitHub.Repo({owner:{login:"atlasservers"}, name:"basic-sample"})
    r.fetch();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample"));
  });

  it("should fetch a tree from the given sha", function() {
    var r = Helpers.get_repo();
    r.tree("master");
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample/git/trees/master"));
  })

  it("should fetch collaborators", function() {
    var r = Helpers.get_repo();
    r.collaborators();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample/collaborators"));
  })

  it("should fetch branches", function() {
    var r = Helpers.get_repo();
    r.branches()
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample/branches"));
  });

});

describe("GitHub.repo.contents()", function() {

  var r;

  beforeEach(function() {
    GHAPI.fake(true);
    r = Helpers.get_repo();
  });

  afterEach(function() {
    GHAPI.unfake();
  });

  it("should call correct URL in Repo.contents()", function()
  {
    r.contents("master", "subfolder/SUBME.md")
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=master"));
  });

  it("should call correct URL in Repo.create_file()", function()
  {
    file_content = "Hello World!!!"
    r.create_file('master', "subfolder/SUBME.md", file_content)
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md"));
    expect(GHAPI.lastRequest().method).toEqual("PUT");
    response = JSON.parse(GHAPI.lastRequest().requestBody);
    expect(response.content).toEqual(GitHub.Base64.encode(file_content));
    expect(response.branch).toEqual("master");
  });

  it("should return GitHub.Content in Repo.contents()", function()
  {
    var result;
    r.contents("master", "subfolder/SUBME.md", {
      success : function(o) { result = o; }
    });
    GHAPI.respond();
    expect(result.backboneClass).toBe("Content");
  });

  it("should return GitHub.Dir in Repo.contents()", function()
  {
    var result;
    r.contents("master", "subfolder", {
      success : function(o) { result = o; }
    });
    GHAPI.respond();
    expect(result.backboneClass).toBe("Contents");
  });

  it("should call options success callback on success", function()
  {
    var result;
    var options = { success : function() {} };
    spyOn(options, "success");
    r.contents("master", "subfolder/SUBME.md", options);
    GHAPI.respond();
    expect(options.success).toHaveBeenCalled();
  });

  it("should return raw content parsed from Base64", function()
  {
    var result;
    r.contents("master", "subfolder/SUBME.md", {
      success : function(o) { result = o; }
    });
    GHAPI.respond();
    expect(result.raw()).toBe(GitHub.Base64.decode(GHAPI.contents("master", "subfolder/SUBME.md").response.content));
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
    r.create_file('master', "subfolder/SUBME.md", file_content, commit_message);
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md"));
    expect(GHAPI.lastRequest().method).toEqual("PUT");
    response = JSON.parse(GHAPI.lastRequest().requestBody);
    expect(response.message).toEqual(commit_message);
    expect(response.content).toEqual(GitHub.Base64.encode(file_content));
    expect(response.branch).toEqual("master");
  });

  it("should call success cb() on create_file", function()
  {
    var options = {success: function(){}};
    spyOn(options, 'success');
    file_content = "Hello World!!!";
    commit_message = 'added README.md';
    r.create_file('master', "README.md", file_content, commit_message, options);
    GHAPI.respond();
    expect(options.success).toHaveBeenCalled();
  });

  it("should call error cb() on create_file", function()
  {
    var options = {error: function(){}};
    spyOn(options, 'error');
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    r.create_file('master', "subfolder/SUBME.md", file_content, commit_message, options);
    GHAPI.respond();
    expect(options.error).toHaveBeenCalled();
  });

  it("should modify the model based on the content returned by the api", function()
  {
    var options = {success: function(){} };
    file_content = "Hello World!!!";
    commit_message = 'added hello.txt';
    newFile = r.create_file('master', "README.md", file_content, commit_message, options);
    GHAPI.respond();
    expect(newFile.get('sha')).toEqual(GHObjects.contents.create.response.content.sha);
  });

  it("should PUT to the URL in the actual repo on github", function()
  {
    var result;
    r.contents("master", "subfolder/SUBME.md", {
        success: function(o){ result = o;},
        error: function(e){console.log(e);}
    });
    GHAPI.respond();
    file_content = "bye bye";
    result.cook(file_content); //need to base64
    result.save();
    expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/basic-sample/contents/subfolder/SUBME.md?ref=master"));
    expect(GHAPI.lastRequest().method).toEqual("PUT");
    content = JSON.parse(GHAPI.lastRequest().requestBody).content;
    expect(content).toEqual(GitHub.Base64.encode(file_content));
  });

});

describe('Github.repo.update_file', function(){

  var r;

    beforeEach(function() {
      GHAPI.fake(true);
      r = Helpers.get_repo();
    });

    afterEach(function() {
      GHAPI.unfake();
    });

    it("should not screw up the model of the file it is being passed to update", function()
    {
      // This should be failing, based on what's happening with the real api...
      var file;
      r.contents("master", "README.md", {
        success : function(o) { file = o; }
      });
      GHAPI.respond();
      r.update_file("master", "README.md", 'This is tricky, yo.', 'updated README.md', file);
      expect(file.raw()).toEqual('This is tricky, yo.');
    });
  });

describe('Github.repo.rename', function(){

    beforeEach(function() {
      GHAPI.fake(true);
    });

    afterEach(function() {
      GHAPI.unfake();
    });

    it("should call the correct URL and method", function()
    {
      //to not fake it, use the token, ie: GitHub.token = 'bla bla'
      var r = new GitHub.Repo({url:GHAPI.url("/repos/atlasservers/test-repo")});
      r.rename('new-name-for-test-repo');
      expect(GHAPI.lastRequest().method).toEqual("PATCH");
      expect(GHAPI.lastRequest().url).toEqual(GHAPI.url("/repos/atlasservers/test-repo"));
    });
  });
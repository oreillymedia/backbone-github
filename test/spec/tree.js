/* Tree
------------------------------------------------------------------- */

describe("Tree", function() {

	it("should parse data into collections on initialize", function()
	{
  	var tree = new GitHub.Tree(GitHubObjects.trees.show)
    expect(tree.trees.length).toBe(1)
    expect(tree.blobs.length).toBe(2)
	});

  it("should use url attribute if it has one", function()
  {
    var url = "http://blabla"
    var tree = new GitHub.Tree({sha:"master", repo:Helpers.get_repo(), url:url});
    expect(tree.url()).toBe(url)
  });

  it("should parse data into collections on fetch", function()
  {
    API.server_fake();
    API.server.respondWith("get", "https://api.github.com/repos/runemadsen/Hello-World/git/trees/master", [200, {}, to_s(GitHubObjects.trees.show)]);

    var tree = new GitHub.Tree({sha:"master", repo:Helpers.get_repo()});
    tree.fetch();

    API.server.respond();

    expect(tree.trees.length).toBe(1)
    expect(tree.blobs.length).toBe(2)

    API.server_restore();
  });

  it("fetch should work on child trees because they have a url", function() {
    API.xhr_fake();
    var tree = new GitHub.Tree(GitHubObjects.trees.show)
    var sub_tree = tree.trees.first()
    sub_tree.fetch()
    expect(API.xhr_last().url).toEqual(GitHubObjects.trees.show.tree[1].url);
    API.xhr_restore();
  });

});
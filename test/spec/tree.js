/* Tree
------------------------------------------------------------------- */

describe("Tree", function() {

	it("should parse data into collections on initialize", function()
	{
  	var tree = new GitHub.Tree(GHResponses.trees.show)
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
    GHAPI.fake();
    GHAPI.fakeRequest("get", "/repos/runemadsen/Hello-World/git/trees/master", GHResponses.trees.show, 200);
    var tree = new GitHub.Tree({sha:"master", repo:Helpers.get_repo()});
    tree.fetch();
    GHAPI.respond();
    expect(tree.trees.length).toBe(1)
    expect(tree.blobs.length).toBe(2)
    GHAPI.unfake();
  });

  it("fetch should work on child trees because they have a url", function() {
    GHAPI.fake();
    var tree = new GitHub.Tree(GHResponses.trees.show);
    var sub_tree = tree.trees.first();
    sub_tree.fetch();
    GHAPI.respond();
    expect(GHAPI.lastRequest().url).toEqual(GHResponses.trees.show.tree[1].url);
    GHAPI.unfake();
  });

});
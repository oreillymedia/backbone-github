/* Tree
------------------------------------------------------------------- */

describe("Tree", function() {

	it("should parse data into collections on initialize", function()
	{
  	var tree = new GitHub.Tree(GHObjects.trees.show.response)
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
    GHAPI.fake(true);
    var tree = new GitHub.Tree({sha:"master", repo:Helpers.get_repo()});
    tree.fetch();
    GHAPI.respond();
    expect(tree.trees.length).toBe(1)
    expect(tree.blobs.length).toBe(2)
    GHAPI.unfake();
  });

  it("fetch should work on child trees because they have a url", function() {
    GHAPI.fake();
    console.log(GHObjects.trees.show.response)
    var tree = new GitHub.Tree(GHObjects.trees.show.response);
    var sub_tree = tree.trees.first();
    console.log(sub_tree);
    sub_tree.fetch();
    GHAPI.respond();
    expect(GHAPI.lastRequest().url).toEqual(GHObjects.trees.show.response.tree[1].url);
    GHAPI.unfake();
  });

});
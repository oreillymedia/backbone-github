/* Tree
------------------------------------------------------------------- */

describe("Tree", function() {

	it("should parse data into collections on initialize", function()
	{
  	var tree = new GitHub.Tree(GHObjects.trees.show.response)
    expect(tree.trees.length).toBe(_.filter(GHObjects.trees.show.response, function(obj) {
      return obj.type == "tree"
    }).length);
    expect(tree.blobs.length).toBe(_.filter(GHObjects.trees.show.response, function(obj) {
      return obj.type == "blob"
    }).length))
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
    expect(tree.trees.length).toBe(_.filter(GHObjects.trees.show.response, function(obj) {
      return obj.type == "tree"
    }).length))
    expect(tree.blobs.length).toBe(_.filter(GHObjects.trees.show.response, function(obj) {
      return obj.type == "blob"
    }).length))
    GHAPI.unfake();
  });

  it("fetch should work on child trees because they have a url", function() {
    GHAPI.fake();
    var tree = new GitHub.Tree(GHObjects.trees.show.response);
    var sub_tree = tree.trees.first();
    sub_tree.fetch();
    GHAPI.respond();

    subfolder_tree = _.find(GHObjects.trees.show.response.tree, function(git) {
        return git.type == "tree"
    });

    expect(GHAPI.lastRequest().url).toEqual(subfolder_tree.url);
    GHAPI.unfake();
  });

});
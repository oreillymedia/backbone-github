var to_s = function(o)
{
	return JSON.stringify(o);
}

var API = {

	xhr : null,
	requests : null,
	server : null,

	xhr_fake : function()
	{
		API.xhr = sinon.useFakeXMLHttpRequest();
    API.requests = [];
    API.xhr.onCreate = function (req) { API.requests.push(req); };
	},

	xhr_restore : function()
	{
		API.xhr.restore();
	},

	xhr_last : function()
	{
		return _.last(API.requests);
	},

	server_fake : function()
	{
		API.server = sinon.fakeServer.create();
	},

	server_restore : function()
	{
		API.server.restore();
	}

}
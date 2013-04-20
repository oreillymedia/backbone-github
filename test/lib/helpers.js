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

	},

	server_restore : function()
	{

	}


}
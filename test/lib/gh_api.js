var GHAPI = {

  server : null,

  url : function(path)
  {
    if(path.match(/https:\/\/api\.github\.com/))
    {
      return path;
    }
    else
    {
      return "https://api.github.com" + path;
    }
  },

  // Server
  // ---------------------------------------

  fake : function(fakeAll)
  {
    this.server = sinon.fakeServer.create();
    if(fakeAll) this.fakeRequestOnObject(GHObjects);
  },

  unfake : function()
  {
    this.server.restore();
  },

  // Requests
  // ---------------------------------------

  fakeRequestOnObject : function(obj)
  {
    if(obj.response && obj.call)
    {
      //console.log("Faking: [" + obj.call.method + "] " + obj.call.url + " with:");
      //console.log(obj.response);
      this.fakeRequest(obj.call.method, obj.call.url, obj.response);
    }
    else
    {
      for(var key in obj){
        this.fakeRequestOnObject(obj[key]);
      }
    }
  },

  respond : function()
  {
    this.server.respond();
  },

  fakeRequest : function(method, path, responseBody, responseCode, responseHeaders)
  {
    if(!responseCode) responseCode = 200;
    if(!responseHeaders) responseHeaders = {};

    this.server.respondWith(method, this.url(path), [
      responseCode,
      responseHeaders,
      JSON.stringify(responseBody)
    ]);
  },

  lastRequest : function()
  {
    return this.server.requests[this.server.requests.length-1];
  },

  // Helpers
  // ---------------------------------------

  contents : function(branch, path)
  {
    return GHObjects.contents.show[branch][path];
  }

};
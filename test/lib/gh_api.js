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

    if(fakeAll)
    {
      this.fakeRequestOnObject(GHObjects);
    }
  },

  unfake : function()
  {
    this.server.restore();
  },

  // Requests
  // ---------------------------------------

  fakeRequestOnObject : function(obj)
  {
    if(obj.response && obj.request)
    {
      var all_requests = [obj.request];
      if(obj.stubs)
      {
        for(var i = 0; i < obj.stubs.length; i++)
        {
          all_requests.push(obj.stubs[i]);
        }
      }

      for(var i = 0; i < all_requests.length; i++)
      {
        this.fakeRequest(all_requests[i], obj.response);
      }
    }
    else
    {
      for(var key in obj) {
        this.fakeRequestOnObject(obj[key]);
      }
    }
  },

  respond : function()
  {
    this.server.respond();
  },

  fakeRequest : function(request, response, responseCode, responseHeaders)
  {
    if(!responseCode) responseCode = 200;
    if(!responseHeaders) responseHeaders = {};
    var method = request.method || "get";
    var abs_url;
    if(request.regexp)
    {
      abs_url = new RegExp(request.url);
    }
    else
    {
      abs_url = this.url(request.url);
    }

    //console.log("Faking: [" + method + "] " + abs_url + " with:");
    //console.log(response);

    this.server.respondWith(method, abs_url, [
      responseCode,
      responseHeaders,
      JSON.stringify(response)
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
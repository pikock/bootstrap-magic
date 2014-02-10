(function(){
  var BrowserStack = {};

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // Tiny Ajax Post
  var post = function (url, json, cb){
    var req;

    if (window.ActiveXObject)
      req = new ActiveXObject('Microsoft.XMLHTTP');
    else if (window.XMLHttpRequest)
      req = new XMLHttpRequest();
    else
      throw "Strider: No ajax"

    req.onreadystatechange = function () {
        if (req.readyState==4)
          cb(req.responseText);
      };
    var data = "data=" + JSON.stringify(json)
    req.open("POST", url, true);
    req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    req.setRequestHeader('X-Browser-String', BrowserStack.browser_string);
    req.setRequestHeader('X-Worker-UUID', BrowserStack.worker_uuid);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.setRequestHeader('Content-length',  data.length);
    req.setRequestHeader('Connection', 'close');
    req.send(data);
  }

  if (typeof console !== 'object') {
    var console = {};
    window.console = console;
  }

  _console_log = console.log;

  console.log = function (arguments) {
    post('/_log/', arguments, function () {});
  };

  BrowserStack.post = post;
  BrowserStack.getParameterByName = getParameterByName;

  BrowserStack.browser_string = getParameterByName('_browser_string');
  BrowserStack.worker_uuid = getParameterByName('_worker_key');

  window.BrowserStack = BrowserStack;
})();

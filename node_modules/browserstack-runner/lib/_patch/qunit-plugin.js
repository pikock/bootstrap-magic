// Here begins strider-qunit extension plugin
(function(){

  var striderErrors = []
    , i = 0;

  QUnit.log = function(res){
    i++;
    if (!res || !res.result){
      // Failure:
      striderErrors.push(JSON.stringify(res));
    }
    if (i%50 == 0){
      var data = {
          tests_run: i
        , tracebacks: striderErrors
        , url : window.location.pathname
      }
      striderErrors = [];
      BrowserStack.post('/_progress', data, function(){}); 
    }
  }

  QUnit.done = function(results){
    results.tracebacks = striderErrors;
    results.url = window.location.pathname;
    BrowserStack.post("/_report", results, function(){});
  }
})();
// End Strider

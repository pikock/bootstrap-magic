describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-select-with-non-string-options/index-jquery.html");
  });
  
it('should initialize to model', function() {
  expect(element(by.model('model.id')).$('option:checked').getText()).toEqual('Two');
});
});
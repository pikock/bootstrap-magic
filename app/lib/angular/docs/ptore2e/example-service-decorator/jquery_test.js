describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-service-decorator/index-jquery.html");
  });
  
it('should display log messages in dom', function() {
  element.all(by.repeater('l in myLog')).count().then(function(count) {
    expect(count).toEqual(6);
  });
});
});
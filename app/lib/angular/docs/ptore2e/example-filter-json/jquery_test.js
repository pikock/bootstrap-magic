describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-filter-json/index-jquery.html");
  });
  
it('should jsonify filtered objects', function() {
  expect(element(by.id('default-spacing')).getText()).toMatch(/\{\n {2}"name": ?"value"\n}/);
  expect(element(by.id('custom-spacing')).getText()).toMatch(/\{\n {4}"name": ?"value"\n}/);
});
});
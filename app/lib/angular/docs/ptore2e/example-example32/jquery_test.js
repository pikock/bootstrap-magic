describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("examples/example-example32/index-jquery.html");
  });
  
  it('should add Hello to the name', function() {
    expect(element(by.binding("{{ greeting }}")).getText()).toEqual('Bonjour World!');
  });
});
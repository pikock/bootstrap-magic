describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("examples/example-example59/index.html");
  });
  
  it('should check ng-click', function() {
    expect(element(by.binding('count')).getText()).toMatch('0');
    element(by.css('button')).click();
    expect(element(by.binding('count')).getText()).toMatch('1');
  });
});
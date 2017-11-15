describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-ng-hide-simple/index.html");
  });
  
it('should check ngHide', function() {
  var checkbox = element(by.model('checked'));
  var checkElem = element(by.css('.check-element'));

  expect(checkElem.isDisplayed()).toBe(true);
  checkbox.click();
  expect(checkElem.isDisplayed()).toBe(false);
});
});
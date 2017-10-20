describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-orderBy-static/index-jquery.html");
  });
  
// Element locators
var names = element.all(by.repeater('friends').column('friend.name'));

it('should sort friends by age in reverse order', function() {
  expect(names.get(0).getText()).toBe('Adam');
  expect(names.get(1).getText()).toBe('Julie');
  expect(names.get(2).getText()).toBe('Mike');
  expect(names.get(3).getText()).toBe('Mary');
  expect(names.get(4).getText()).toBe('John');
});
});
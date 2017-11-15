describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-orderBy-custom-comparator/index.html");
  });
  
// Element locators
var container = element(by.css('.custom-comparator'));
var names = container.all(by.repeater('friends').column('friend.name'));

it('should sort friends by favorite letter (in correct alphabetical order)', function() {
  expect(names.get(0).getText()).toBe('John');
  expect(names.get(1).getText()).toBe('Adam');
  expect(names.get(2).getText()).toBe('Mike');
  expect(names.get(3).getText()).toBe('Mary');
  expect(names.get(4).getText()).toBe('Julie');
});
});
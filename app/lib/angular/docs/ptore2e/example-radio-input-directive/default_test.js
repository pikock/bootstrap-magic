describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-radio-input-directive/index.html");
  });
  
it('should change state', function() {
  var inputs = element.all(by.model('color.name'));
  var color = element(by.binding('color.name'));

  expect(color.getText()).toContain('blue');

  inputs.get(0).click();
  expect(color.getText()).toContain('red');

  inputs.get(1).click();
  expect(color.getText()).toContain('green');
});
});
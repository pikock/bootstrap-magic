describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("examples/example-example56/index.html");
  });
  
  it('should check ng-class-odd and ng-class-even', function() {
    expect(element(by.repeater('name in names').row(0).column('name')).getAttribute('class')).
      toMatch(/odd/);
    expect(element(by.repeater('name in names').row(1).column('name')).getAttribute('class')).
      toMatch(/even/);
  });
});
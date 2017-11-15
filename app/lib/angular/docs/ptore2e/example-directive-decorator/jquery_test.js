describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-directive-decorator/index-jquery.html");
  });
  
it('should warn when an expression in the interpolated value is falsy', function() {
  var id3 = element(by.id('id3'));
  var id8 = element(by.id('id8'));
  var someOther = element(by.id('someOtherId'));
  var someOther5 = element(by.id('someOtherId5'));

  expect(id3.getText()).toEqual('View Product 3');
  expect(id3.getAttribute('href')).toContain('/products/3/view');

  expect(id8.getText()).toEqual('View Product 8');
  expect(id8.getAttribute('href')).toContain('/products/8/view');

  expect(someOther.getText()).toEqual('View Product');
  expect(someOther.getAttribute('href')).toContain('/products//view');

  expect(someOther5.getText()).toEqual('View Product 5');
  expect(someOther5.getAttribute('href')).toContain('/products/5/view');

  expect(element(by.binding('warnCount')).getText()).toEqual('Warn Count: 1');
});
});
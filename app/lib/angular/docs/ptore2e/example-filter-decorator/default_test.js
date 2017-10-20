describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-filter-decorator/index.html");
  });
  
it('should default date filter to short date format', function() {
  expect(element(by.id('genesis')).getText())
    .toMatch(/Initial Commit default to short date: \d{1,2}\/\d{1,2}\/\d{2}/);
});

it('should still allow dates to be formatted', function() {
  expect(element(by.id('ngConf')).getText())
    .toMatch(/ng-conf 2016 with full date format: [A-Za-z]+, [A-Za-z]+ \d{1,2}, \d{4}/);
});
});
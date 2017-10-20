it('should check ngShow', function() {
  var checkbox = element(by.model('checked'));
  var checkElem = element(by.css('.check-element'));

  expect(checkElem.isDisplayed()).toBe(false);
  checkbox.click();
  expect(checkElem.isDisplayed()).toBe(true);
});
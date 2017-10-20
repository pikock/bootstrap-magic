var checkbox = element(by.css('custom-checkbox'));
var checkedCheckbox = element(by.css('custom-checkbox.checked'));

it('should have the `checked` class only when checked', function() {
  expect(checkbox.isPresent()).toBe(true);
  expect(checkedCheckbox.isPresent()).toBe(false);

  checkbox.click();
  expect(checkedCheckbox.isPresent()).toBe(true);

  checkbox.click();
  expect(checkedCheckbox.isPresent()).toBe(false);
});

it('should have the `aria-checked` attribute set to the appropriate value', function() {
  expect(checkedCheckbox.isPresent()).toBe(false);
  expect(checkbox.getAttribute('aria-checked')).toBe('false');

  checkbox.click();
  expect(checkedCheckbox.isPresent()).toBe(true);
  expect(checkbox.getAttribute('aria-checked')).toBe('true');

  checkbox.click();
  expect(checkedCheckbox.isPresent()).toBe(false);
  expect(checkbox.getAttribute('aria-checked')).toBe('false');
});
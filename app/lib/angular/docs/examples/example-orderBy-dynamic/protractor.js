// Element locators
var unsortButton = element(by.partialButtonText('unsorted'));
var nameHeader = element(by.partialButtonText('Name'));
var phoneHeader = element(by.partialButtonText('Phone'));
var ageHeader = element(by.partialButtonText('Age'));
var firstName = element(by.repeater('friends').column('friend.name').row(0));
var lastName = element(by.repeater('friends').column('friend.name').row(4));

it('should sort friends by some property, when clicking on the column header', function() {
  expect(firstName.getText()).toBe('Adam');
  expect(lastName.getText()).toBe('John');

  phoneHeader.click();
  expect(firstName.getText()).toBe('John');
  expect(lastName.getText()).toBe('Mary');

  nameHeader.click();
  expect(firstName.getText()).toBe('Adam');
  expect(lastName.getText()).toBe('Mike');

  ageHeader.click();
  expect(firstName.getText()).toBe('John');
  expect(lastName.getText()).toBe('Adam');
});

it('should sort friends in reverse order, when clicking on the same column', function() {
  expect(firstName.getText()).toBe('Adam');
  expect(lastName.getText()).toBe('John');

  ageHeader.click();
  expect(firstName.getText()).toBe('John');
  expect(lastName.getText()).toBe('Adam');

  ageHeader.click();
  expect(firstName.getText()).toBe('Adam');
  expect(lastName.getText()).toBe('John');
});

it('should restore the original order, when clicking "Set to unsorted"', function() {
  expect(firstName.getText()).toBe('Adam');
  expect(lastName.getText()).toBe('John');

  unsortButton.click();
  expect(firstName.getText()).toBe('John');
  expect(lastName.getText()).toBe('Julie');
});
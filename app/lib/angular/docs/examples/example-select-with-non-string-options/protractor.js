it('should initialize to model', function() {
  expect(element(by.model('model.id')).$('option:checked').getText()).toEqual('Two');
});
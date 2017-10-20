it('should display log messages in dom', function() {
  element.all(by.repeater('l in myLog')).count().then(function(count) {
    expect(count).toEqual(6);
  });
});
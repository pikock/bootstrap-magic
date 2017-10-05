describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("examples/example-example46/index-jquery.html");
  });
  
  it('should toggle readonly attr', function() {
    expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeFalsy();
    element(by.model('checked')).click();
    expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeTruthy();
  });
});
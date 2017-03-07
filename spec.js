// spec.js
fdescribe('Protractor Demo App', function() {
  var firstNumber = element(by.model('sortCriteria'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('rating'));

  beforeEach(function() {
    browser.get('https://shawon-barua.github.io');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Ristorante Con Fusion: Menu');
  });

  it('should write in text box', function() {
    firstNumber.sendKeys('rating');

    expect(latestResult.getText()).toEqual('2');
  });

 
});
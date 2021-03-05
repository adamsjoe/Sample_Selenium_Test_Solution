'use strict';

var assert = require('assert');

module.exports = {
  /**
   * @function
   * @return {string} baseUrl (config file stores this in browser object)
   * @summary returns with the baseUrl
   */
  getBaseUrl: function () {
    return browser.options.baseUrl;
  },

  /**
   * @function
   * @param {string} url
   * @summary Go to the specified URL
   */
  goToURL: function (url) {

    let message = 'Navigating to "' + url + '"';
    // addStep(message);

    browser.url(url);
  },    

  getPageTitle: function() {
    return browser.getTitle();
  },

  /**
   * @function
   * @param {string} locator
   * @return {string} text from the element
   * @summary Returns the text from the specified element
   */
  getText: function (locator) {

    let message = 'Getting the text of the element with tag ' + locator;
    // addStep(message);

    const locatorString = $(locator);

    var returnText = locatorString.getText();

    console.log(returnText);
 
    return returnText;
  },

   /**
   * @function
   * @param {string} locator element to get state of
   * @returns {boolean} true if checked, false if not
   * @summary Checks the "selected" state of the element - only for checkboxes
   */
  getElementSelectedStatus: function (locator) {
    let message = 'Getting the state of checkbox at "' + locator + '"';

    let element = $(locator);

    return element.isSelected();
  },

  ///////////////////////////////////////////
  //
  // page validations
  //
  ///////////////////////////////////////////

    /**
   * @function
   * @param {string} locator
   * @summary Verify that an element is present
   */
  verifyElementPresent: function (locator) {
    let message = 'Verifing the element identified with "' + locator + '" can be found.';  

    const el = $(locator);

    assert(el.isExisting, 'Cannot find the element identified with "' + locator);
  },

  verifyPageTitle: function(expectedTitle) {

    assert(expectedTitle === browser.getTitle(), "Expected '"+ expectedTitle + "' but got '" + browser.getTitle() + "' for page title.")

  },

  /**
   * @function
   * @param {string} locator
   * @param {string} expectedText
   * @summary Verifies text at the locator with a "known" string
   */
  verifyTextFromInput: function (locator, expectedText) {    
    let message = 'Verifying the text at "' + locator + '" is "' + expectedText + '"';

    const el = $(locator);

    // var actualText = el.getText();
    var actualText = el.getValue();

    assert(
      expectedText == actualText,
      'Expected "' + expectedText + '" but got "' + actualText + '".  The test has failed.',
    );
  },  


  ///////////////////////////////////////////
  //
  // page interactions
  //
  ///////////////////////////////////////////

  clickElement: function (locator) {
    let message = 'Clicking element referenced as "' + locator + '"';

    const locatorString = $(locator);

    locatorString.click();
  },

  enterText: function (locator, text) {
    let message = 'Clearing and entering "' + text + '" into the field referenced as "' + locator + '"';

    var locatorString = $(locator);
    locatorString.waitForExist(10000);

    //zal.addZaleniumCaption(message);
    locatorString.setValue(text);
  },

  selectDropDownByValue: function(locator, value) {
    const locatorString = $(locator);
    locatorString.selectByVisibleText(value);
  }
}
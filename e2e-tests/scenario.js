'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /contactList when location hash is empty', function() {
    browser.get('');
    expect(browser.getCurrentUrl()).toMatch("/contactList");
  });


  describe('contactList', function() {

    beforeEach(function() {
      browser.get('/#!/contactList');
    });


    it('should render view1 when user navigates to /view1', function() {
      
      var contactFilter = element(by.model('contactSearchFilter'));
      contactFilter.sendKeys('Alessandro');

      var pageTitle = element(by.id('contactFilter'));
      pageTitle.click();

      // Returns the SPAN for the first cat's name.
      var firstContactFullName = element(by.repeater('item in list').
      row(0).column('item.fullName'));

      console.log(firstContactFullName.getText());

    });

  });

});
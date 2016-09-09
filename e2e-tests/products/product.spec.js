'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('cartApp - Products', function ()
{
  it('should automatically redirect to /home when location hash/fragment is empty', function ()
  {
    browser.get('/#');
    expect(browser.getTitle()).toMatch("My AngularJS App");
  });

  describe('Products', function ()
  {
    beforeEach(function ()
    {
      browser.get('/#/products');
    });

    it('should render products.html when user navigates to /#/products', function ()
    {
      expect(browser.getLocationAbsUrl()).toMatch("/products");
    });

    it('should return 3 products', function ()
    {
      expect(element.all(by.repeater('product in pc.products')).count()).toEqual(3);
    });

    it('should render product.html when clicking the first link in the products repeater', function ()
    {
      element.all(by.repeater('product in pc.products')).get(0).element(by.className("ng-binding")).click();
      expect(browser.getLocationAbsUrl()).toMatch("/product/1");
    });

  });
});

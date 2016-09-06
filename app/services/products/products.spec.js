describe('Products Factory', function ()
{
    var Products;
    var productsList = [
        {
            name: '2001 T-Shirt',
            price: 19.99
        },
        {
            name: 'Hoody',
            price: 49.99
        },
        {
            name: 'Sonu Hoody',
            price: 69.99
        }
    ];

    beforeEach(angular.mock.module('api.products'));

    // Before each test set our injected Products factory (_Products_) to our local Products variable
    beforeEach(inject(function (_Products_)
    {
        Products = _Products_;
    }));

    it('should factory exist', function ()
    {
        expect(Products).toBeDefined();
    });

    describe('.all()', function ()
    {
        it('should exist', function ()
        {
            expect(Products.all).toBeDefined();
        });

        it('should return products', function ()
        {
            expect(Products.all()).toEqual(productsList);
        });
    });
}); 
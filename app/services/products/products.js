(function ()
{
    'use strict';

    angular.module('api.products', [])
        .factory('Products', function ()
        {
            var Products = {};
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
            Products.all = function ()
            {
                return productsList;
            };
        
            return Products;
        });
})();
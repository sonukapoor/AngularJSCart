(function ()
{
    'use strict';

    var app = angular.module('components.products', []);
    app.controller('ProductsController', function (Products)
    {
        var vm = this;
        Products.all().then(function (data)
        {
            vm.products = data;
        });
    });
})();


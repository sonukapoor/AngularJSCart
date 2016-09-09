(function ()
{
    'use strict';

    var app = angular.module('components.product', []);
    app.controller('ProductController', function ($scope, resolvedProduct)
    {
        $scope.product = resolvedProduct;
    });
} ());
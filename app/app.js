(function ()
{
  'use strict';
  var app = angular.module('cartApp', [
    'ui.router',
    'api.products',
    'components.products'
  ]);
  app.config(function ($stateProvider)
  {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'components/products/products.html',
        controller: 'ProductsController as pc'
      });
  });
} ());
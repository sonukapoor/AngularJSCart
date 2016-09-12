(function ()
{
  'use strict';
  var app = angular.module('cartApp', [
    'ui.router',
    'api.categories',
    'api.products',
    'components.categories',
    'components.products',
    'components.product',
    'components.directives'
  ]);
  app.config(function ($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider.when('', '/');
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'components/products/products.html',
        controller: 'ProductsController as pc'
      })
      .state('product', {
        url: '/products/:id',
        templateUrl: 'components/products/product.html',
        controller: 'ProductController as pc',
        resolve:
        {
          resolvedProduct: function (Products, $stateParams)
          {
            return Products.findById($stateParams.id);
          }
        }
      })
      .state('home', {
        url: "/",
        templateUrl: 'components/home/index.html'
      })
      .state('category', {
        url: "/category/:id",
        templateUrl: 'components/products/products.html', 
        controller: 'ProductsController as pc',
        resolve:
        {
          resolvedProduct: function (Products, $stateParams)
          {
            return Products.findById($stateParams.id);
          }
        }
      })
      .state("otherwise", {
        url: "*path",
        templateUrl: "components/errors/404.html"
      });
  });
} ());
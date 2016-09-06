(function ()
{
  'use strict';
  var app = angular.module('cartApp', [
    'ui.router',
    'api.products'
  ]);
  app.config(function ($stateProvider)
  {
    $stateProvider
      .state('profile', {
        url: '/user/:id',
        templateUrl: 'components/profile/profile.html'
      })
      .state('api.products', {
        url: '/api/products',
        controller: function ()
        {
          
        }  
      });
  });
}());
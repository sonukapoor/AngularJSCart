(function ()
{
  'use strict';
  var app = angular.module('cartApp', [
    'ui.router',
    'components.products', 
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
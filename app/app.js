(function ()
{
  'use strict';
  var app = angular.module('cartApp', ['ui.router']);
  app.config(function ($stateProvider)
  {
    $stateProvider
        .state('profile', {
          url: '/user/:id',
          templateUrl: 'components/profile/profile.html'
        });
  });
}());
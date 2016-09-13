(function ()
{
    'use strict';
    var app = angular.module('components.categories', []);
    app.controller('CategoriesController', function ($scope, Categories)
    {
        Categories.all().then(function (data)
        {
            $scope.categories = data;
        });
    });
})();
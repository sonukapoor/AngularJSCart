(function ()
{
    'use strict';
    var app = angular.module('components.categories', []);
    app.controller('CategoriesController', function (Categories)
    {
        var vm = this;
        Categories.all().then(function (data)
        {
            vm.categories = data;
        });
    });
})();
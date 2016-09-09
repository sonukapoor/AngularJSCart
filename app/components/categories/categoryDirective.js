(function ()
{
    var app = angular.module("components.directives", []);
    app.directive('categoryList', function ()
    {
        return {
            restrict: 'E',
            templateUrl: 'components/categories/categories.html',
            controller: 'CategoriesController',
            controllerAs: 'categories',
            scope: {}
        }
    }); 
} ());
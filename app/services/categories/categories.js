(function ()
{
    'use strict';
    var app = angular.module('api.categories', []);
    app.factory('Categories', function ($http)
    {
        var categories = {};
        var API = "http://localhost:8080/api/categories";

        categories.all = function ()
        {
            return $http.get(API)
                .then(function (res)
                {
                    return res.data;
                })
                .catch(function (res)
                {
                    return res.data;
                });
        };

        return categories;
    })
})();
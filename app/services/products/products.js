(function ()
{
    'use strict';

    var app = angular.module('api.products', []);
    app.factory('Products', function ($q, $http)
    {
        var Products = {};
        var API = "http://localhost:8080/api/products";

        Products.all = function ()
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

        Products.findByName = function (name)
        {
            var SEARCHAPI = API + "/search?name=" + name;
            return $http.get(SEARCHAPI)
                .then(function (res)
                {
                    return res.data;
                })
                .catch(function (res)
                {
                    return res.data;
                });
        }    

        return Products;
    });
})();
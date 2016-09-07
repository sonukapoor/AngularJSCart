'use strict';

var app = angular.module('components.products', []);
app.controller('ProductsController', function (Products)
{
    var vm = this;
    vm.products = Products.all();
});
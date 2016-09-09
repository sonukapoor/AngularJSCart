'use strict';

describe('Category Directive', function ()
{
    var element, scope;
    beforeEach(module('components.directives'));

    beforeEach(inject(function (_$rootScope_, _$compile_)
    {
        scope = _$rootScope_.$new();
        element = angular.element(
            '<div class="list-group" > ' +
            '<a class="list-group-item" ng-repeat="category in categories.categories">' +
            '{{ category.name }}' +
            '</a>' +
            '</div>');
        
        scope.categories = {
            categories:
            [
                {
                    name: 'T-Shirt',
                    id: 1
                },
                {
                    name: 'Pants',
                    id: 2
                },
                {
                    name: 'Leggings',
                    id: 3
                }
            ]
        };

        element = _$compile_(element)(scope);
        scope.$digest();
    }));

    it("should have the correct amount of categories in the list", function ()
    {
        var list = element.find('a');
        expect(list.length).toBe(3);
    });
});
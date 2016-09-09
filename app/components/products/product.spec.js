describe('components.product', function ()
{
    var $controller;
    var $rootScope;

    beforeEach(angular.mock.module('components.product'));
    beforeEach(angular.mock.module('api.products'));

    beforeEach(inject(function (_$controller_, _$rootScope_)
    {
        $controller = _$controller_;
        $rootScope = _$rootScope_.$new();
    }));

    describe('ProductController', function ()
    {
        var ProductController;
        var singleProduct;
        
        beforeEach(function ()
        {
            singleProduct = {
                name: '2001 T-Shirt',
                price: 19.99,
                id: 1
            };

            ProductController = $controller('ProductController',
                { $scope: $rootScope, resolvedProduct: singleProduct });
        });

        it('should be defined', function ()
        {
            expect(ProductController).toBeDefined();
        });
    });

    describe('ProductController with a resolved product', function ()
    {
        var ProductController;
        var singleProduct;

        beforeEach(function ()
        {
            singleProduct = {
                name: '2001 T-Shirt',
                price: 19.99,
                id: 1
            };

            ProductController = $controller('ProductController',
                { $scope: $rootScope, resolvedProduct: singleProduct });
        });

        it('should set the view model product object to the resolvedProduct', function ()
        {
            expect($rootScope.product).toEqual(singleProduct);
        })
    });
});
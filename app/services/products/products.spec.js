describe('Products Factory', function ()
{
    var Products;
    var productsList = [
        {
            name: '2001 T-Shirt2',
            price: 19.99
        },
        {
            name: 'Hoody',
            price: 49.99
        },
        {
            name: 'Sonu Hoody',
            price: 69.99
        }
    ];
    beforeEach(angular.mock.module('api.products'));

    // Before each test set our injected Products factory (_Products_) to our local Products variable
    beforeEach(inject(function (_Products_, _$q_, _$httpBackend_)
    {
        Products = _Products_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should factory exist', function ()
    {
        expect(Products).toBeDefined();
    });

    describe('.all()', function ()
    {
        var API = "http://localhost:8080/api/products";
        var result;
        beforeEach(function ()
        {
            // Initialize our local result object to an empty object before each test
            result = {};

            // Spy on our service call but allow it to continue to its implementation
            spyOn(Products, "all").and.callThrough();
        });

        it('should exist', function ()
        {
            expect(Products.all).toBeDefined();
        });

        it('should return all products', function ()
        {
            //expect(Products.all()).toEqual(productsList);
            $httpBackend.whenGET(API).respond(200, $q.when(productsList));

            expect(Products.all).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Products.all()
                .then(function (res)
                {
                    result = res;
                });

            $httpBackend.flush();
            expect(Products.all).toHaveBeenCalled();
            expect(result.length).toEqual(3);
        });
    });

    describe('.findByName', function ()
    {
        var API = "http://localhost:8080/api/products/search";
        var result;
        beforeEach(function ()
        {
            result = {};
            spyOn(Products, "findByName").and.callThrough();
        });

        it('should return an product when filtered with a valid name', function ()
        {
            var search = "Hoody";
            API = API + "?name=" + search;
            $httpBackend.whenGET(API).respond(200, $q.when(productsList[1]));

            expect(Products.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Products.findByName(search)
                .then(function (res)
                {
                    result = res;
                });

            // Flush pending HTTP requests
            $httpBackend.flush();
            expect(Products.findByName).toHaveBeenCalledWith(search);
            expect(result.name).toEqual(search);
            expect(result.price).toEqual(49.99);
        });
    });
}); 
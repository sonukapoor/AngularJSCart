describe('Products Factory', function ()
{
    var Products;
    var productsList = [
        {
            name: '2001 T-Shirt',
            price: 19.99,
            id: 1
        },
        {
            name: 'Hoody',
            price: 49.99,
            id: 2
        },
        {
            name: 'Sonu Hoody',
            price: 69.99,
            id: 3
        }
    ];
    beforeEach(angular.mock.module('api.products'));
    beforeEach(inject(function (_Products_, _$q_, _$httpBackend_)
    {
        Products = _Products_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should be defined', function ()
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

        it('should be defined', function ()
        {
            expect(Products.all).toBeDefined();
        });

        it('should return all products', function ()
        {
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

    describe('.findByName()', function ()
    {
        var API = "http://localhost:8080/api/products/search";
        var result;
        beforeEach(function ()
        {
            result = {};
            spyOn(Products, "findByName").and.callThrough();
        });

        it('should be defined', function ()
        {
            expect(Products.findByName).toBeDefined();
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

    describe('.findById()', function ()
    {
        var API = "http://localhost:8080/api/products/";
        var result;
        beforeEach(function ()
        {
            result = {};
            spyOn(Products, "findById").and.callThrough();        
        });
        
        it('should be defined', function ()
        {
            expect(Products.findById).toBeDefined();
        });

        it('should return a product when called by Id', function ()
        {
            API = API + "1";
            $httpBackend.whenGET(API).respond(200, $q.when(productsList[0]));
            expect(Products.findById).not.toHaveBeenCalled();

            Products.findById(1)
                .then(function (res)
                {
                    result = res;
                });
            
            $httpBackend.flush();
            expect(Products.findById).toHaveBeenCalled();
            expect(result.id).toEqual(1);
            expect(result.name).toEqual("2001 T-Shirt");
            expect(result.price).toEqual(19.99);
        });
    })
}); 
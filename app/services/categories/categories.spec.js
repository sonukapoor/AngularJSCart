describe('Categories Factory', function ()
{
    var $q, $httpBackend;
    var Categories;
    var categoriesList = [
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
    ];

    var API = "http://localhost:8080/api/categories";

    beforeEach(angular.mock.module('api.categories'));
    beforeEach(inject(function (_Categories_, _$q_, _$httpBackend_)
    {
        Categories = _Categories_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should be defined', function ()
    {
        expect(Categories).toBeDefined();
    });

    describe('.all()', function ()
    {
        var result = {};
        beforeEach(function ()
        {
            // Spy on our service call but allow it to continue to its implementation
            spyOn(Categories, "all").and.callThrough();
        }); 

        it('should be defined', function ()
        {
            expect(Categories.all).toBeDefined();
        }); 

        it('should return all categories', function ()
        {
            $httpBackend.whenGET(API).respond(200, $q.when(categoriesList));
            expect(result).toEqual({});

            Categories.all()
                .then(function (res)
                {
                    result = res;
                });

            $httpBackend.flush();
            expect(Categories.all).toHaveBeenCalled();
            expect(result.length).toEqual(3);
        }); 
    }); 
}); 
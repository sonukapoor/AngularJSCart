describe('Categories Controller', function ()
{
    var $controller, CategoriesController, CategoriesFactory;
    var $q, $rootScope;

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

    beforeEach(angular.mock.module('components.categories'));
    beforeEach(angular.mock.module('api.categories'));
    beforeEach(inject(function (_$controller_, _Categories_, _$q_, _$rootScope_)
    {
        $controller = _$controller_;
        CategoriesFactory = _Categories_;
        $q = _$q_;
        $rootScope = _$rootScope_.$new();

        spyOn(CategoriesFactory, 'all').and.callFake(function ()
        {
            var deferred = $q.defer();
            deferred.resolve(categoriesList);
            return deferred.promise;
        })

        CategoriesController = $controller('CategoriesController', { Categories: CategoriesFactory });
    }));

    it('should be defined', function ()
    {
        expect(CategoriesController).toBeDefined();
    });

    it('should initialize with a call to Categories.all()', function ()
    {
        expect(CategoriesFactory.all).toHaveBeenCalled();
        $rootScope.$apply();
        expect(CategoriesController.categories).toEqual(categoriesList);
    });
}); 
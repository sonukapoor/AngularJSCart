describe('ProductsController', function ()
{
  var $controller, $q, $rootScope, ProductsController, ProductsFactory;

  var productsList = [
    {
      name: '2001 T-Shirt',
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

  beforeEach(angular.mock.module('components.products'));
  beforeEach(angular.mock.module('api.products'));

  beforeEach(inject(function (_$controller_, _$q_, _$rootScope_, _Products_)
  {
    $controller = _$controller_;
    ProductsFactory = _Products_;
    $q = _$q_;
    $rootScope = _$rootScope_.$new();

    spyOn(ProductsFactory, 'all').and.callFake(function ()
    {
      var deferred = $q.defer();
      deferred.resolve(productsList);
      return deferred.promise;
    });

    ProductsController = $controller('ProductsController', { Products: ProductsFactory });
  }));

  it('should be defined', function ()
  {
    expect(ProductsController).toBeDefined();
  });

  it('should initialize with a call to Products.all()', function ()
  {
    expect(ProductsFactory.all).toHaveBeenCalled();
    $rootScope.$apply();
    expect(ProductsController.products).toEqual(productsList);
  });
});
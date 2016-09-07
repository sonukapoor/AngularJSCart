describe('ProductsController', function ()
{
  var $controller, ProductsController, ProductsFactory;

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

  beforeEach(inject(function (_$controller_, _Products_)
  {
    $controller = _$controller_;
    ProductsFactory = _Products_;

    spyOn(ProductsFactory, 'all').and.callFake(function ()
    {
      return productsList;
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
    expect(ProductsController.products).toEqual(productsList);
  }); 
});
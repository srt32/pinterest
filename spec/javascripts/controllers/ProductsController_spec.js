describe("ProductsController", function() {
  beforeEach(module("pinterest"));

  var $controller, $httpBackend, products, $resource, $scope;

  products = [
    { id: 1, blurb: "blurb 1", details_url: "", title: "Prod 1", thumbnail_url: "" },
    { id: 2, blurb: "blurb 2", details_url: "", title: "Prod 2", thumbnail_url: "" },
    { id: 3, blurb: "blurb 3", details_url: "", title: "Prod 3", thumbnail_url: "" },
  ];

  beforeEach(inject(function(_$controller_, _$httpBackend_, _$resource_, $rootScope) {
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $resource = _$resource_;
    $scope = $rootScope.$new();
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe("scope.products", function() {
    it("fetches the products from the server", function() {
      $httpBackend.expectGET("/v1/products").respond(products);
      $controller("ProductsController", { $scope: $scope, $resource: $resource });
      $httpBackend.flush();

      expect($scope.products.length).toEqual(3);
    });
  });
});

controllers = angular.module("controllers");

controllers.controller("ProductsController", [
  "$resource",
  "$scope",
  function($resource, $scope) {
    Product = $resource("/v1/products"); // TODO: extract

    Product.query({}, function(products) {
      $scope.products = products;
    });

    $scope.page = 1;

    $scope.loadNewProducts = function() {
      Product = $resource("/v1/products"); // TODO: extract

      Product.query({page: $scope.page}, function(products) {
        $scope.products = $scope.products.concat(products);
        $scope.page += 1;
      });
    };
  }
]);

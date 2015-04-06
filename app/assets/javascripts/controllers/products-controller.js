controllers = angular.module("controllers");

controllers.controller("ProductsController", [
  "Product",
  "$scope",
  function(Product, $scope) {
    Product.query({}, function(products) {
      $scope.products = products;
    });

    $scope.page = 1;

    $scope.loadNewProducts = function() {
      Product.query({page: $scope.page}, function(products) {
        $scope.products = $scope.products.concat(products);
        $scope.page += 1;
      });
    };
  }
]);

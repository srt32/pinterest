directives = angular.module("factories");

directives.factory("Product", ["$resource", function($resource) {
  return $resource("/v1/products");
}]);

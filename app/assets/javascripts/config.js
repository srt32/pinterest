config = angular.module("config");

config.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "index.html",
    controller: "ProductsController"
  });
}]);

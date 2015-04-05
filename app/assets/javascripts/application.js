// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require angular-route/angular-route
//= require angular-resource/angular-resource
//= require angular-rails-templates
//= require_tree .

pinterest = angular.module("pinterest", [
  "templates",
  "ngResource",
  "ngRoute",
  "controllers"
]);

// TODO: extract
pinterest.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "index.html",
    controller: "ProductsController"
  });
}]);

controllers = angular.module("controllers", []);

// TODO: extract
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

angular.module("pinterest").directive("infiniteScroll", [
  "$document",
  "$window",
  function($document, $window) {
    return {
      restrict: "A",
      link: link
    };

    function link($scope, element, attr) {
      $document.bind("scroll", function() {
        var win = $(window);
        var doc = $(document);
        var currentDocHeight = win.scrollTop() + win.height();

        if (currentDocHeight >= doc.height()) {
          $scope.$apply(attr.infiniteScroll);
        }
      });
    }
}]);

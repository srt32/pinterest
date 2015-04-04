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
//= require angular-rails-templates
//= require_tree .


pinterest = angular.module("pinterest", [
  "templates",
  "ngRoute",
  "controllers"
]);

// TODO: move me to router
pinterest.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "index.html",
    controller: "ProductsController"
  });
}]);

controllers = angular.module("controllers", []);

// TODO: move me to another file
controllers.controller("ProductsController", ["$scope", function($scope) {
  $scope.products = products;
}]);

// TODO: move to server
products = [
  { id: 1, blurb: "blurb 1", details_url: "", title: "Prod 1", thumbnail_url: "" },
  { id: 2, blurb: "blurb 2", details_url: "", title: "Prod 2", thumbnail_url: "" },
  { id: 3, blurb: "blurb 3", details_url: "", title: "Prod 3", thumbnail_url: "" },
];

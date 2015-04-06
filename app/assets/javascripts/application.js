//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require angular-route/angular-route
//= require angular-resource/angular-resource
//= require angular-truncate
//= require angular-rails-templates
//= require modules
//= require config
//= require_tree ./templates
//= require_tree ./factories
//= require_tree ./controllers
//= require_tree ./directives

pinterest = angular.module("pinterest", [
  "templates",
  "ngResource",
  "ngRoute",
  "config",
  "controllers",
  "directives",
  "factories",
  "truncate"
]);


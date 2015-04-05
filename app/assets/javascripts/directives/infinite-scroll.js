directives = angular.module("directives");

directives.directive("infiniteScroll", [
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
  }
]);

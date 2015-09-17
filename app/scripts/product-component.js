'use strict';

function productComponent() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/product-component.html',
    controller: 'ProductController',
    controllerAs: 'ctrl',
    bindToController: true
  };
}

function ProductController($scope, ngCart, $http) {
  var ctrl = this;

  ctrl.products = [];
  ctrl.loadingProducts =  $http.get('/api/products').then(
    function (response) {
      ctrl.products = response.data;
    },
    function () {
      ctrl.products = [];
    }
  );

  ctrl.displayProductAddedAlert = false;
  $scope.$on('ngCart:itemAdded', function () {
    ctrl.displayProductAddedAlert = true;
    ctrl.checkoutSucceeded = false;
  });

  ctrl.checkoutSucceeded = false;
  $scope.$on('ngCart:itemRemoved', function () {
    ctrl.displayProductAddedAlert = false;
    ctrl.checkoutSucceeded = true;
  });
}

angular.module('testworksconfWorkshop')
  .directive('productComponent', productComponent)
  .controller('ProductController', ProductController);

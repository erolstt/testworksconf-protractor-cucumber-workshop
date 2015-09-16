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
    ctrl.displayCheckoutSuccessfulAlert = false;
  });

  ctrl.displayCheckoutSuccessfulAlert = false;
  $scope.$on('ngCart:itemRemoved', function () {
    ctrl.displayProductAddedAlert = false;
    ctrl.displayCheckoutSuccessfulAlert = true;
  });

  ctrl.removeProduct = function (id) {
    ngCart.removeItemById(id);
  };
}

angular.module('testworksconfWorkshop')
  .directive('productComponent', productComponent)
  .controller('ProductController', ProductController);

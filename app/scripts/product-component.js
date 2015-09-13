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

function ProductController($rootScope, $timeout, ngCart) {
  var ctrl = this;

  ctrl.products = [
    new Product(1, 'Product 1', 'A very cool product', 'product-1.jpg', 9.95),
    new Product(2, 'Product 2', 'A mediocre product', 'product-2.jpg', 6.95),
    new Product(3, 'Product 3', 'Cheap but efficient', 'product-3.jpg', 4.95),
    new Product(4, 'Product 4', 'Cheap but efficient', 'product-4.jpg', 4.95),
    new Product(5, 'Product 5', 'Cheap but efficient', 'product-5.jpg', 4.95),
    new Product(6, 'Product 6', 'Cheap but efficient', 'product-6.jpg', 4.95),
    new Product(7, 'Product 7', 'Cheap but efficient', 'product-7.jpg', 4.95),
    new Product(8, 'Product 8', 'Cheap but efficient', 'product-8.jpg', 4.95)
  ];

  ctrl.displayProductAddedAlert = false;
  $rootScope.$on('ngCart:itemAdded', function () {
    ctrl.displayProductAddedAlert = true;
    ctrl.displayProductRemovedAlert = false;

    $timeout(function () {
      ctrl.displayProductAddedAlert = false;
    }, 3000);
  });

  ctrl.displayProductRemovedAlert = false;
  $rootScope.$on('ngCart:itemRemoved', function () {
    ctrl.displayProductAddedAlert = false;
    ctrl.displayProductRemovedAlert = true;

    $timeout(function () {
      ctrl.displayProductRemovedAlert = false;
    }, 3000);
  });

  ctrl.removeProduct = function (id) {
    ngCart.removeItemById(id);
  };
}

angular.module('testworksconfWorkshop')
  .directive('productComponent', productComponent)
  .controller('ProductController', ProductController);

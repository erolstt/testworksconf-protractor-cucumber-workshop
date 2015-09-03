'use strict';

angular.module('testworksconfWorkshop')
  .directive('productComponent', productComponent)
  .controller('ProductController', ProductController);

function productComponent() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/product-component.html',
    controller: 'ProductController',
    controllerAs: 'ctrl',
    bindToController: true
  }
}

function ProductController($rootScope) {
  this.displayProductAddedAlert = false;

  $rootScope.$on('ngCart:itemAdded', function () {
    this.displayProductAddedAlert = true;
  });

  this.products = [
    new Product(1, 'Product 1', 'A very cool product', 'product-1.jpg', 9.95),
    new Product(2, 'Product 2', 'A mediocre product', 'product-2.jpg', 6.95),
    new Product(3, 'Product 3', 'Cheap but efficient', 'product-3.jpg', 4.95),
    new Product(4, 'Product 4', 'Cheap but efficient', 'product-4.jpg', 4.95),
    new Product(5, 'Product 5', 'Cheap but efficient', 'product-5.jpg', 4.95),
    new Product(6, 'Product 6', 'Cheap but efficient', 'product-6.jpg', 4.95),
    new Product(7, 'Product 7', 'Cheap but efficient', 'product-7.jpg', 4.95),
    new Product(8, 'Product 8', 'Cheap but efficient', 'product-8.jpg', 4.95)
  ]
}

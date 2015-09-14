'use strict';

function ShoppingCartController($scope, ngCart) {
  var ctrl = this;

  ctrl.displayCheckoutSuccessfulAlert = false;
  $scope.$on('ngCart:checkout_succeeded', function () {
    ngCart.empty();

    ctrl.displayCheckoutSuccessfulAlert = true;
  });
}

angular.module('testworksconfWorkshop')
  .controller('ShoppingCartController', ShoppingCartController);

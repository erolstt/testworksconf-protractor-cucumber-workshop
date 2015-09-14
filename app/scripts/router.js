'use strict';

angular.module('testworksconfWorkshop')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'scripts/home.html'
      })
      .state('cart', {
        url: '/cart',
        controller: 'ShoppingCartController',
        controllerAs: 'ctrl',
        templateUrl: 'scripts/shopping-cart.html'
      });
  });

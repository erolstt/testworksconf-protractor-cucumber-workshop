'use strict';

angular.module('testworksconfWorkshop')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'scripts/main.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'scripts/cart.html'
      });
  });

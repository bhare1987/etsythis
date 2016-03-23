angular
  .module('EtsyThis', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'etsyController'
      })
      .when('/product/:id', {
        templateUrl: 'templates/product.html',
        controller: 'productController'
      })
      .when('/cart', {
        templateUrl: 'templates/cart.html',
        controller: 'cartController'
      })
  })

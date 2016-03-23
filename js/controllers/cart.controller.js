angular
  .module('EtsyThis')
  .controller('cartController', function($scope, EtsyService, CartService, $location, $routeParams){

    CartService.getCart().then(function(cart){
      console.log(cart);
      $scope.cart = cart.data;
    })

    $scope.removeItem = function(item){
      CartService.removeFromCart(item._id);
      var itemIdx = $scope.cart.findIndex(function(el){
        return el._id = item._id;
      });
      $scope.cart.splice(itemIdx, 1);
    }


  })

angular
  .module('EtsyThis')
  .controller('cartController', function($scope, EtsyService, CartService, $location, $routeParams){

    $scope.total = 0;
    $scope.totalItems = 0;

    CartService.getCart().then(function(cart){
      if(cart.data.length !== 0){
        $scope.cart = cart.data;
        var totalArr = [];
        var itemsArr = [];
        cart.data.forEach(function(el){
          return totalArr.push(parseFloat(el.price));
        });
        $scope.total = totalArr.reduce(function(memo, num){
          return memo + num;
        });
        cart.data.forEach(function(el){
          return itemsArr.push(parseInt(el.qty));
        });
        $scope.totalItems = itemsArr.reduce(function(memo, num){
          return memo + num;
        });
      }
    })

    $scope.removeItem = function(item){
      var itemIdx = $scope.cart.findIndex(function(el){
        return el._id === item._id;
      });
      $scope.cart.splice(itemIdx, 1);
      $scope.total = $scope.total - parseFloat(item.price);
      $scope.totalItems = $scope.totalItems - parseInt(item.qty);
      CartService.removeFromCart(item._id);
    }


  })

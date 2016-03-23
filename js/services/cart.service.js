angular
  .module('EtsyThis')
  .service('CartService', function($http, $location){
    var cartService = {
      cartUrl: 'http://tiny-tiny.herokuapp.com/collections/EtsyThis',
      getCart: function(){
        return $http.get(cartService.cartUrl);
      },
      addToCart: function(item){
        return $http.post(cartService.cartUrl, item);
      },
      removeFromCart: function(id){
        return $http.delete(cartService.cartUrl + '/' + id);
      },
    }

    return {
      getCart: cartService.getCart,
      addToCart: cartService.addToCart,
      removeFromCart: cartService.removeFromCart
    }

  })

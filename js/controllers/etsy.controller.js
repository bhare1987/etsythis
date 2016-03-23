angular
  .module('EtsyThis')
  .controller('etsyController', function($scope, EtsyService, CartService, $location, $routeParams){
    function htmlDecode(input){
      //https://css-tricks.com/snippets/javascript/unescape-html-in-js/
      var e = document.createElement('div');
      e.innerHTML = input;
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    EtsyService.getListings().then(function(items){
      var map = items.data.results.map(function(el){
        return {
          id: el.listing_id,
          qty: 1,
          price: el.price,
          title: htmlDecode(el.title),
          url: el.url,
          img: el.MainImage.url_170x135,
          thumb: el.MainImage.url_75x75
        };
      });
      $scope.items = map;
    });

    $scope.addItem = function(item){
      addObj = {
        prod_id: item.id,
        qty: item.qty,
        price: item.price * item.qty,
        title: item.title,
        img: item.thumb
      }
      CartService.addToCart(addObj).then(function(){
        $location.path('/cart');
      })
    }
  })

angular
  .module('EtsyThis')
  .controller('productController', function($scope, EtsyService, CartService, $location, $routeParams){

    EtsyService.getListing($routeParams.id).then(function(item){
      var map = item.data.results.map(function(el){
        return {
          id: el.listing_id,
          price: el.price,
          title: el.title,
          url: el.url,
          img: el.MainImage.url_fullxfull,
          description: el.description,
          materials: el.materials
        }
      });
      console.log(map[0]);
      $scope.item = map[0];
    });

    $scope.addItem = function(item){
      addObj = {
        prod_id: item.id,
        qty: item.qty,
        price: item.price,
        title: item.title,
      }
      CartService.addToCart(addObj).then(function(){
        $location.path('/cart');
      })
    }
  })

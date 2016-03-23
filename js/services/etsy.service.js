angular
  .module('EtsyThis')
  .service('EtsyService', function($http, $location){
    var etsyService = {
      apiKey: '4nwx9hflrp7f9kip8yhqnixl',
      cors: 'https://free-cors-server.herokuapp.com/any-request/',
      getListings: function(){
        return $http.get(etsyService.cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + etsyService.apiKey + '&keywords=video+game&includes=MainImage'));
      },
      getListing: function(id){
        return $http.get(etsyService.cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + etsyService.apiKey));
      },
      getListingImage: function(id){
        return $http.get(etsyService.cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '/images?api_key=' + etsyService.apiKey));
      },

    }

    return {
      getListings: etsyService.getListings,
      getListing: etsyService.getListing,
      getListingImage: etsyService.getListingImage

    }

  })

angular
  .module('EtsyThis')
  .controller('etsyController', function($scope, EtsyService, $location, $routeParams){
    function htmlDecode(input){
      //https://css-tricks.com/snippets/javascript/unescape-html-in-js/
      var e = document.createElement('div');
      e.innerHTML = input;
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    EtsyService.getListings().then(function(items){
      var map = items.data.results.map(function(el){
        return {
          title: htmlDecode(el.title),
          url: el.url,
          img: el.MainImage.url_170x135,
        };
      });
      $scope.items = map;
    });
  })

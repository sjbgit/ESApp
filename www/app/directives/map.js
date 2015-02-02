angular.module('eliteApp.directives', [])

.directive('map', function(mapService) {
  return {
    restrict: 'E',
    //scope: false,
    
    scope: {
      onCreate: '&'
    },
    
    link: function ($scope, $element, $attr) {

      console.log(mapService);

      function initialize() {
        //console.log($scope.info); 

        var mapOptions = mapService.mapOptions;

        //var mapOptions = $scope.vm.mapOptions;

       
        /*
        var mapOptions = {
          center: new google.maps.LatLng(45, -73), //center: new google.maps.LatLng(20.8861, 156.6747), //43.07493, -89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        */
        
        var map = new google.maps.Map($element[0], mapOptions); 
  
        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false; 
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});

(function() {

	'use strict';

	angular.module('eliteApp').controller('TestLocationCtrl', ['eliteApi', '$ionicLoading', 'mapService', TestLocationCtrl]);

	function TestLocationCtrl(eliteApi, $ionicLoading, mapService) {
		var vm = this;

    //mapService



    var mapOptions = {
          center: new google.maps.LatLng(43.005416, -88.221413), //(41.881832, -87.623177), //center: new google.maps.LatLng(20.8861, 156.6747), //43.07493, -89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };


    vm.mapOptions = mapOptions;

    mapService.mapOptions = mapOptions;


		vm.info = 'test';

		//vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

		

		vm.mapCreated = function(map) {
    		vm.map = map;
  		};

  		vm.centerOnMe = function () {
    		console.log("Centering"); 
    		if (!vm.map) {
      			return;
    		}

    		/*
    		vm.loading = $ionicLoading.show({
      			content: 'Getting current location...',
      			showBackdrop: false
    		});
			*/

    		navigator.geolocation.getCurrentPosition(function (pos) {
      			console.log('Got pos', pos);
      			vm.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      			vm.loading.hide();
    		}, function (error) {
      			alert('Unable to get location: ' + error.message);
    		});
  		};


		
  
	};

})();
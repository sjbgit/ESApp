(function() {

	'use strict';

	angular.module('eliteApp').controller('LocationMapCtrl', ['$stateParams', 'eliteApi', 'mapService', LocationMapCtrl]);


	function LocationMapCtrl($stateParams, eliteApi, mapService) {
		var vm = this;

		vm.locationId = Number($stateParams.id); 

		vm.updateMap = function() {
			console.log('updated map');
		};


		vm.map = {
            center: {
                latitude: 38.897677,
                longitude: -77.036530,
            },
            zoom: 12
        };
        vm.marker = { }

        eliteApi.getLeagueData().then(function(data){

            vm.location = _.find(data.locations, { id: vm.locationId });
            vm.marker = {
                latitude: vm.location.latitude,
                longitude: vm.location.longitude,
                title: vm.location.name + "<br/>(Tap for directions)",
                showWindow: true
            };

            vm.map.center.latitude = vm.location.latitude;
            vm.map.center.longitude = vm.location.longitude; 

          vm.mapOptions   = {
          center: new google.maps.LatLng(vm.map.center.latitude, vm.map.center.longitude), //(41.881832, -87.623177), //center: new google.maps.LatLng(20.8861, 156.6747), //43.07493, -89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        	};

        	//data gets there too late
        	mapService.mapOptions = vm.mapOptions;
        });

/*
        var mapOptions = {
          center: new google.maps.LatLng(43.005416, -88.221413), //(41.881832, -87.623177), //center: new google.maps.LatLng(20.8861, 156.6747), //43.07493, -89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
*/

    //vm.mapOptions = mapOptions;

    //mapService.mapOptions = mapOptions;



		

        //vm.mapOptions = mapOptions;

		/*
		vm.map = {
            center: {
                latitude: 38.897677,
                longitude: -77.036530,
            },
            zoom: 12
        };
		*/
	};

})();  
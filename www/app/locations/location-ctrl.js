(function() {

	'use strict';

	angular.module('eliteApp').controller('LocationsCtrl', ['eliteApi', LocationsCtrl]);

	function LocationsCtrl(eliteApi) {
		var vm = this;

		var data = eliteApi.getLeagueData().then(function(data) {
			vm.locations = data.locations;
		});
		
  
	};

})();
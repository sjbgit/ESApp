(function() {

	'use strict';

	angular.module('eliteApp').controller('DataAccessCtrl', ['dataService', DataAccessCtrl]);

	function DataAccessCtrl(dataService) {
		var vm = this;

		vm.log = [];

		vm.x = dataService.dataFactory.resource;
/*
		vm.x = dataService.dataFactory.resource.get({ id: $scope.id }, function() {
  			console.log('in get');
  			// $scope.entry is fetched from server and is an instance of Entry
  			//$scope.entry.data = 'something else';
  			//$scope.entry.$update(function() {
    //updated in the backend
  		});

*/
		var result = dataService.dataFactory.getRunning()
			.success(function(data, status, headers, config) {
      			console.log('success: ' + data);
    		}).
    		error(function(data, status, headers, config) {
      			// log error
      			console.log('error: ' + data);
    		});


    	var result1 = dataService.dataFactory.log()
			.success(function(data, status, headers, config) {
      			console.log('success: ' + data);

      			vm.log = data;

      			console.log("log: " + vm.log);
    		}).
    		error(function(data, status, headers, config) {
      			// log error
      			console.log('error: ' + data);
    		});


		console.log(result);

/*
		var res = dataService.resource.get({}, function() {

			console.log('in get');

		});

*/

/*
		var result = dataService.get({}, function() {
			console.log(data);
		});
*/
  
	}; 

})(); 



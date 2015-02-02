(function() {
	'use strict';

	angular.module('eliteApp').factory('dataService', ['$resource', '$http', dataService]);

	function dataService($resource, $http) {
		var vm = this;

		var urlBase = 'http://localhost:8080/api'; ///running/api/customers';

		var dataFactory = {};

		dataFactory.getRunning = function () {
        	return $http.get(urlBase + '/running');
    	};

    	dataFactory.log = function () {
        	return $http.get(urlBase + '/log');
    	};

    	dataFactory.resource = function() {
    		return $resource(urlBase);

    	};

    	/*
    	dataFactory .resource = $resource(urlBase + '/:id', {
            id: '@_id'
        }, { //parameters default
            update: {
                method: 'PUT'
            }
        });

		*/
		return {
			dataFactory: dataFactory			
			//resource: $resource('http://localhost:8080/api/running')
		};

/*

		return {
            resource: $resource            
        };
*/
	};


})(); 




/*
app.factory('dataFactory', ['$http', function($http) {

    var urlBase = '/api/customers';
    var dataFactory = {};

    dataFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    dataFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust);
    };

    dataFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    dataFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return dataFactory;
});
*/
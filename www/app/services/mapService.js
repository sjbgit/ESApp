(function() {
	'use strict';

	angular.module('eliteApp').factory('mapService', [mapService]);

	function mapService() {
		var vm = this;

		var options = {};

        var notify = function(info)  {
            console.log(info);
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
			mapOptions: options,
            notify: notify			
			//resource: $resource('http://localhost:8080/api/running')
		};

/*

		return {
            resource: $resource            
        };
*/
	};


})(); 
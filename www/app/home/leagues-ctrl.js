(function() {
	'use strict';

	angular.module('eliteApp').controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);

	function LeaguesCtrl($state, eliteApi) {
		var vm = this;
		
		eliteApi.getLeagues().then(function(data) {
			vm.leagues = data;
		});

		//var leagues = eliteApi.getLeagues();
		//var leagueData = eliteApi.getLeagueData();

		//vm.leagues = leagues;

		//console.log(leagues, leagueData);

		vm.selectLeague = function(leagueId) {


			eliteApi.setLeagueId(leagueId);
			//todo: select correct league
			$state.go("app.teams");
		};

	};

})();  
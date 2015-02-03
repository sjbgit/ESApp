/**
 * Created by sbunke on 2/2/2015.
 */
(function () {
    'use strict';

    angular.module('eliteApp').controller('RulesCtrl', ['eliteApi', '$scope', RulesCtrl]);

    function RulesCtrl(eliteApi, $scope) {
        var vm = this;

        vm.info = "test";

        eliteApi.getLeagueData().then(function(data){

            console.log(data.league.rulesScreen.substring(0, 10));

            //console.log("***rulesctrl", data);
            vm.mainContent = data.league.rulesScreen;


            var x = 1;

            //console.log("***rulesctrl", data, vm.mainContent);
        });

        //eliteApi.getLeagueData().then(function(data){
            //console.log("***rulesctrl", data);
            //vm.mainContent = data.league.rulesScreen;




            /*
            $scope.$apply(function() {
                vm.mainContent = data.league.rulesScreen;
            });
            */
            //$scope.$apply();
            //vm.$apply();
            //console.log("***rulesctrl", data, vm.mainContent);
        //});

    };
})();
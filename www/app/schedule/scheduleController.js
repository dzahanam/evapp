(function(){
    angular.module('evapp.controllers').controller('ScheduleController', ScheduleController);
    
    ScheduleController.$inject = ['$scope', '$log', 'scheduleRest'];
    
    function ScheduleController ($scope, $log, scheduleRest) {
        var vm = this;
        vm.days = ["2015-07-02","2015-07-03","2015-07-04"];
    }
})();


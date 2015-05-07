(function(){
    angular.module('evapp.controllers').controller('ScheduleController', ScheduleController);
    
    ScheduleController.$inject = ['$scope', '$log', 'Lectures'];
    
    function ScheduleController ($scope, $log, Lectures) {
        var vm = this;
        vm.lectures = Lectures.all();
    }
    
})();


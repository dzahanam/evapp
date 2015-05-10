(function () {
    angular.module('evapp.directives').directive('evappSchedule', evappSchedule);

    function evappSchedule() {

        return {
            restrict: 'E',
            scope: {
                date:'='
            },
            templateUrl: 'app/schedule/scheduleDirective.html',
            replace: true,
            controller: scheduleDirectiveController,
            controllerAs: 'vm'
        };

        scheduleDirectiveController.$inject = ['$scope', '$log', 'scheduleRest'];

        function scheduleDirectiveController($scope, $log, scheduleRest) {
            var vm = this;
            vm.date =  new Date($scope.date);
            vm.lectures = scheduleRest.getByDate($scope.date);
        }
    }
})();
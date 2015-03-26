angular.module('evapp.controllers')
    .controller('ScheduleDetailCtrl', function ($scope, $stateParams, Lectures) {
        $scope.lecture = Lectures.get($stateParams.scheduleId);
    });
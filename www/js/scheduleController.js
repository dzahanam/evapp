angular.module('evapp.controllers')
    .controller('ScheduleCtrl', function ($scope, Lectures) {
        $scope.lectures = Lectures.all();
    });
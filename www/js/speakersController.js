angular.module('evapp.controllers')
.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.all();

})
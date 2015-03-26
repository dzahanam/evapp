angular.module('evapp.controllers')
.controller('SpeakerDetailCtrl', function($scope, $stateParams, Speakers) {
  $scope.speaker = Speakers.get($stateParams.speakerId);
});
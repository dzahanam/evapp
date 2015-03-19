angular.module('evapp.controllers', [])

.controller('ScheduleCtrl', function($scope) {})

.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.all();

})

.controller('SpeakerDetailCtrl', function($scope, $stateParams, Speakers) {
  $scope.speaker = Speakers.get($stateParams.speakerId);
});


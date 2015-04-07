angular.module('evapp.controllers')

.controller('ScheduleDetailCtrl', function ($scope, $ionicPopup, $timeout, $stateParams, Lectures) {
    $scope.lecture = Lectures.get($stateParams.scheduleId);
    $scope.rate = 3;
    $scope.max = 5;
    
    $scope.showRatePopup = function() {
  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<rating ng-model="rate" max="max"></rating>',
    title: 'Rate lecture:',
    subTitle: $scope.lecture.name,
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Rate</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (false) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 10 seconds for some reason
  }, 10000);
 };
});
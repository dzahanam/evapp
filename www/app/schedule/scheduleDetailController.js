(function(){
    
    angular.module('evapp.controllers').controller('ScheduleDetailController', ScheduleDetailController);
    
    ScheduleDetailController.$inject = ['$scope', '$ionicPopup', '$timeout', '$stateParams', '$filter', 'scheduleRest'];
    
    function ScheduleDetailController($scope, $ionicPopup, $timeout, $stateParams, $filter, scheduleRest) {
        var vm = this;
        
        vm.lecture = scheduleRest.get($stateParams.scheduleId);
        vm.getBaseInfo = function(lecture){
            return $filter('date')(lecture.date, 'fullDate') + " " + lecture.timestart + " - " + lecture.timeend + " " + lecture.hall;   
        };
        
        vm.rate = 3;
        vm.max = 5;

        vm.showRatePopup = function() {
            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<rating ng-model="vm.rate" max="vm.max"></rating>',
                title: 'Rate lecture:',
                subTitle: vm.lecture.name,
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
    }
})();




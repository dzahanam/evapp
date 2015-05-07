(function(){
    
    angular.module('evapp.controllers').controller('SpeakerDetailController', SpeakerDetailController);
    
    SpeakerDetailController.$inject =['$scope', '$stateParams', 'speakersRest'];
    
    function SpeakerDetailController($scope, $stateParams, speakersRest) {
        var vm = this;
        vm.speaker = speakersRest.get($stateParams.speakerId);
    }
    
})();
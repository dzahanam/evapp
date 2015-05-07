(function(){
    angular.module('evapp.controllers').controller('SpeakersController', SpeakersController);
  
    SpeakersController.$inject = ['$log', 'speakersRest'];
    
    function SpeakersController($log, speakersRest){
        var vm = this;
        vm.test = "test";
        vm.speakers = speakersRest.all();
        $log.log(vm.speakers);
    }
})();


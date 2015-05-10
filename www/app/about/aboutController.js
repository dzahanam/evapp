(function(){
    angular.module('evapp.controllers').controller('AboutController', AboutController);
    
    AboutController.$inject = ['$scope', '$log'];
    
    function AboutController ($scope, $log) {
        var vm = this;
        vm.appVersion = '0.1';
    }
})();


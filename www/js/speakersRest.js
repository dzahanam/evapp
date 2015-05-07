(function () {
    'use strict';

    angular.module('evapp.services').factory('speakersRest', speakersRest);

    speakersRest.$inject = ['$log', '$firebaseArray', '$firebaseObject'];

    function speakersRest($log, $firebaseArray, $firebaseObject) {
        var url = 'https://evapps.firebaseio.com/events/polyconf2015';

        var service = {
            all: all,
            get: get,
        };

        return service;

        function all() {
            var fireRef = new Firebase(url + "/speakers");
            return  $firebaseArray(fireRef);
        }
        
        function get(id){
            var ref = new Firebase(url + "/speakers/" + id);

            return $firebaseObject(ref);
        }
    }
})();
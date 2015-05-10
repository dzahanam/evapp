(function () {
    'use strict';

    angular.module('evapp.services').factory('scheduleRest', scheduleRest);

    scheduleRest.$inject = ['$log', '$firebaseArray', '$firebaseObject'];

    function scheduleRest($log, $firebaseArray, $firebaseObject) {
        var url = 'https://evapps.firebaseio.com/events/polyconf2015';

        var service = {
            all: all,
            get: get,
            getByDate: getByDate
        };

        return service;

        function all() {
            var fireRef = new Firebase(url + "/lectures");
            return  $firebaseArray(fireRef);
        }

        function get(id){
            var ref = new Firebase(url + "/lectures/" + id);

            return $firebaseObject(ref);
        }
        
        function getByDate(date){
            var fireRef = new Firebase(url + "/lectures");
            var query = fireRef.orderByChild("date").equalTo(date);
            return  $firebaseArray(query);
        }
    }
})();
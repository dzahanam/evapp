angular.module('evapp', ['ionic', 'firebase', 'evapp.controllers', 'evapp.services', 'ionic.rating'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "app/templates/menu.html"
    })

    // Each tab has its own nav history stack:

    .state('app.schedule', {
            url: '/schedule',
            views: {
                'menuContent': {
                    templateUrl: 'app/schedule/schedule.html',
                    controller: 'ScheduleController as vm'
                }
            }
        })
    .state('app.schedule-detail', {
            url: '/schedule/:scheduleId',
            views: {
                'menuContent': {
                    templateUrl: 'app/schedule/schedule-detail.html',
                    controller: 'ScheduleDetailController as vm'
                }
            }
        })
        .state('app.speakers', {
            url: '/speakers',
            views: {
                'menuContent': {
                    templateUrl: 'app/speakers/speakers.html',
                    controller: 'SpeakersController as vm',
                }
            }
        })
        .state('app.speaker-detail', {
            url: '/speakers/:speakerId',
            views: {
                'menuContent': {
                    templateUrl: 'app/speakers/speaker-detail.html',
                    controller: 'SpeakerDetailController as vm'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'menuContent': {
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController as vm'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/schedule');

});
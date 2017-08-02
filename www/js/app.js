// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });



})
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/login_before_screen', {
            url: '/login_before_screen',
            templateUrl: 'partial/login_before_screen.html',
            //controller: 'homeController'
        })
        .state('#/doctorLogin', {
            url: '/doctorLogin',
            templateUrl: 'partial/doctorLogin.html',
            //controller: 'doctorLoginController'
        })
        .state('/doctorSignup', {
            url: '/doctorSignup',
            templateUrl: 'partial/doctorSignup.html',
            controller: 'doctorSignupctrl'

        })

    $urlRouterProvider.otherwise('/login_before_screen')
})

app.controller('doctorSignupctrl', function($scope, $http) {

    console.log("in controller");
    $scope.signupdatasave = function() {
        var dfirstname = $scope.doctor.firstname;
        var dlastname = $scope.doctor.lastname;
        var demail = $scope.doctor.email;
        var dnumber = $scope.doctor.phnumber;
        var dpassword = $scope.doctor.password;
        var dconfirmpassword = $scope.doctor.confirm.password;
        if (dpassword == dconfirmpassword) {
            var password = dpassword;

        }

        $http.post('http://localhost:81/savedata', )
    }
    $scope.clearform = function() {
        $scope.doctor.firstname = null;
        $scope.doctor.lastname = null;
        $scope.doctor.email = null;
        $scope.doctor.phnumber = null;
        $scope.doctor.password = null;
        $scope.doctor.confirm.password = null;

    }

});
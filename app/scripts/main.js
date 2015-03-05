'use strict';

angular.module('ngEmoticonsApp',['lumx','ngRoute'])

.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  }])

.controller('ngEmoticonsController',['$scope',function($scope){

  }])

.controller('MainCtrl',['$scope',function($scope){

}]);



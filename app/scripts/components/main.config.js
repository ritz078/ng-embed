'use strict';

var resolve = {
  delay: function ($q, $timeout) {
    var delay = $q.defer();
    $timeout(delay.resolve, 50, false);
    return delay.promise;
  }
};

angular.module('ngEmoticonsApp')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller : 'MainCtrl',
        resolve    : resolve
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller : 'LoginCtrl',
        resolve    : resolve
      })
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller : 'DocumentationCtrl',
        resolve    : resolve
      })
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller : 'ExampleCtrl',
        resolve    : resolve
      })
      .when('/getting-started', {
        templateUrl: 'views/gettingstarted.html',
        controller : 'GettingStartedCtrl',
        resolve    : resolve
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

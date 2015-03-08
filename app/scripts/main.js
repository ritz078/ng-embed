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
      .when('/documentation',{
        templateUrl:'views/documentation.html',
        controller:'DocumentationCtrl'
      })
      .when('/examples',{
        templateUrl:'views/examples.html',
        controller:'ExampleCtrl'
      })
      .when('/getting-started',{
        templateUrl:'views/gettingstarted.html',
        controller:'GettingStartedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  }])

  .service('githubData',['$q','$http',function($q,$http){
    var deferred=$q.defer();
    this.getRepoData=function(){
      $http.get('https://api.github.com/repos/ritz078/ngEmoticons/tags')
        .success(function(d){
          deferred.resolve(d);
          console.log(d);
        });
      return deferred.promise;
    };
  }])

.controller('ngEmoticonsController',['$scope','githubData',function($scope,githubData){
    var promise=githubData.getRepoData();
    promise.then(function(d){
      $scope.github=d[0];
    });
  }])

.controller('MainCtrl',['$scope',function($scope){

}])

.controller('ExampleCtrl',['$scope',function($scope){

  }])
  .controller('DocumentationCtrl',['$scope',function($scope){

  }])
.controller('GettingStartedCtrl',['$scope',function($scope){

}]);



'use strict';

angular.module('ngEmoticonsApp')

  .service('emojiList', ['$http', '$q', function ($http, $q) {
    var deferred = $q.defer();
    this.getData = function () {
      $http.get('../data/data.json').success(function (d) {
        deferred.resolve(d);
      });
      return deferred.promise;
    }
  }])
  .controller('ngEmoticonsController', ['$scope', 'githubData', function ($scope, githubData) {
    var promise = githubData.getRepoData();
    promise.then(function (d) {
      $scope.github = d[0];
    });
  }])

  .controller('MainCtrl', ['$scope', function ($scope) {

  }])

  .controller('ExampleCtrl', ['$scope', function ($scope) {

  }])
  .controller('DocumentationCtrl', ['$scope', '$http', function ($scope, $http) {


  }])
  .controller('GettingStartedCtrl', ['$scope', function ($scope) {
    $scope.x = '```npm install --save emoticons-js```';
  }]);

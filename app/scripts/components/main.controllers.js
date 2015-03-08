'use strict';

angular.module('ngEmoticonsApp').controller('ngEmoticonsController', ['$scope', 'githubData', function ($scope, githubData) {
  var promise = githubData.getRepoData();
  promise.then(function (d) {
    $scope.github = d[0];
  });
}])

  .controller('MainCtrl', ['$scope', function ($scope) {

  }])

  .controller('ExampleCtrl', ['$scope', function ($scope) {

  }])
  .controller('DocumentationCtrl', ['$scope', function ($scope) {

  }])
  .controller('GettingStartedCtrl', ['$scope', function ($scope) {
$scope.x='```npm install --save emoticons-js```';
  }]);

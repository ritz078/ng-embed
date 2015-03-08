'use strict';

angular.module('ngEmoticonsApp')
  .service('githubData', ['$q', '$http', function ($q, $http) {
    var deferred = $q.defer();
    this.getRepoData = function () {
      $http.get('https://api.github.com/repos/ritz078/ngEmoticons/tags')
        .success(function (d) {
          deferred.resolve(d);
          console.log(d);
        });
      return deferred.promise;
    };
  }]);

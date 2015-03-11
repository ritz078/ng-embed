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
  }]);

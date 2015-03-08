'use strict';

angular.module('ngEmoticonsApp')
  .directive('highlightJs', ['$timeout',function ($timeout) {
    return {
      restrict: 'AE',
      link    : function () {
        $timeout(function(){
          hljs.initHighlightingOnLoad();
        },0);
      }
    };
  }]);

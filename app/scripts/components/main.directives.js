'use strict';

angular.module('ngEmoticonsApp')
  .directive('highlightJs', ['$timeout','$compile',function ($timeout,$compile) {
    return {
      restrict: 'AE',
      link    : function (scope,elem,attrs) {
        $timeout(function(){
          var x=elem[0].innerHTML;
          elem[0].innerHTML='<pre><code>'+x+'</code></pre>';
          hljs.highlightBlock(elem[0]);
        },0);
      }
    };
  }]);

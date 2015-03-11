'use strict';

angular.module('ngEmoticonsApp')
  .directive('highlightJs', ['$timeout',function ($timeout) {
    return {
      restrict: 'AE',
      link    : function (scope,elem,$scope) {
        $timeout(function(){
          var x=elem[0].innerHTML;
          elem[0].innerHTML='<pre><code ng-non-bindable>'+x+'</code></pre>';
          hljs.highlightBlock(elem[0]);
        },0);
      }
    };
  }])

// Version 0.0.5
// AngularJS simple hash-tag scroll alternative
// this directive uses click event to scroll to the target element
//
// <div ng-app="app">
//   <div ng-controller="myCtrl">
//     <a scroll-to="section1">Section 1</a>
//   </div>
//   ...
//   <div id="section1">
//      <h2>Section1</h2>
//      <a scroll-to="">Back to Top</a>
//   </div>
//  ...
//   <div id="section1">
//      <h2>Section1</h2>
//      <a scroll-to="section1" offset="60">Section 1 with 60px offset</a>
//   </div>
// </div>


  .directive('scrollTo', ['ScrollTo', function(ScrollTo){
    return {
      restrict : "AC",
      compile : function(){

        return function(scope, element, attr) {
          element.bind("click", function(event){
            ScrollTo.idOrName(attr.scrollTo, attr.offset);
          });
        };
      }
    };
  }])
  .service('ScrollTo', ['$window', 'ngScrollToOptions', function($window, ngScrollToOptions) {

    this.idOrName = function (idOrName, offset, focus) {//find element with the given id or name and scroll to the first element it finds
      var document = $window.document;

      if(!idOrName) {//move to top if idOrName is not provided
        $window.scrollTo(0, 0);
      }

      if(focus === undefined) { //set default action to focus element
        focus = true;
      }

      //check if an element can be found with id attribute
      var el = document.getElementById(idOrName);
      if(!el) {//check if an element can be found with name attribute if there is no such id
        el = document.getElementsByName(idOrName);

        if(el && el.length)
          el = el[0];
        else
          el = null;
      }

      if(el) { //if an element is found, scroll to the element
        if (focus) {
          el.focus();
        }

        ngScrollToOptions.handler(el, offset);
      }

      //otherwise, ignore
    }

  }])
  .provider("ngScrollToOptions", function() {
    this.options = {
      handler : function(el, offset) {
        if (offset) {
          var top = $(el).offset().top - offset;
          window.scrollTo(0, top);
        }
        else {
          el.scrollIntoView();
        }
      }
    };
    this.$get = function() {
      return this.options;
    };
    this.extend = function(options) {
      this.options = angular.extend(this.options, options);
    };
  });


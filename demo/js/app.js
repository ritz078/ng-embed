/**
* ngEmoticonApp Module
*
* Description
*/
angular.module('ngEmoticonApp', ['ngSanitize','ngEmoticons'])
.controller('ngEmoticonCtrl', ['$scope', function($scope){
$scope.text="http://www.google.com  ^_^ :s </3 :D (^) :) :( ;) :P (y) :D :/ <3 3:) 8| :o -_- :*";
}]);

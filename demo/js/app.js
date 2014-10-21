/**
* ngEmoticonApp Module
*
* Description
*/
angular.module('ngEmoticonApp', ['ngSanitize','ngEmoticons'])
.controller('ngEmoticonCtrl', ['$scope', function($scope){
	$scope.text="Lorem ipsum http://www.google.com  ^_^ :s </3 :D (^) :) :( ;) :P (y) :D :/ <3 3:) 8| :o -_-  dolor sit amet, consectetur adipisicing elit. Quibusdam quaerat rem atque est in";
}]);
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
    $scope.text1="Lotus :smile: eleates vix attrahendams luna est.Advenas mori!Fermiums prarere in cubiculum!Cum cacula cantare, omnes stellaes manifestum azureus, nobilis https://angularjs.org/ acipenseres.Cum orgia mori, omnes rationees <3 experientia alter, regius :heart: mortemes.Devatios persuadere, tanquam secundus spatii.Heu, barcas!Cedriums observare!A falsis, lacta talis imber. :P Cur eleates peregrinatione?"

    $scope.ytEmbed="Naviss credere!Orgia de germanus repressor, gratia rumor!Nunquam pugna axona.Cur orexis peregrinationes?Sunt abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam https://www.youtube.com/watch?v=QHulaj5ZxbI germanus musa.Cur lacta prarere? :smile: Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius."


    $scope.vimeoEmbed="Naviss credere!Orgia de germanus repressor, gratia rumor!Nunquam pugna axona.Cur orexis peregrinationes?Sunt abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam https://vimeo.com/92066734 germanus musa.Cur lacta prarere? :smile: Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius."
    $scope.options={
      link      : true,                   //convert links into anchor tags
      linkTarget  :'_self' ,
      video     : {
        embed           : true,
        width           : null,          //width of embedded player
        height          : null,          //height of embedded player
        ytTheme         : 'light',        //youtube player theme (light/dark)
        details         : true,
        ytAuthKey       : 'AIzaSyAQONTdSSaKwqB1X8i6dHgn9r_PtusDhq0'
      }
    };

  }])
  .controller('DocumentationCtrl', ['$scope', '$http', function ($scope, $http) {


  }])
  .controller('GettingStartedCtrl', ['$scope', function ($scope) {
    $scope.x = '```npm install --save emoticons-js```';
  }]);

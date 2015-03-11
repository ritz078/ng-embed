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
      basicVideo:true,
      video     : {
        embed           : true,
        width           : null,          //width of embedded player
        height          : null,          //height of embedded player
        ytTheme         : 'light',        //youtube player theme (light/dark)
        details         : true,
        ytAuthKey       : 'AIzaSyAQONTdSSaKwqB1X8i6dHgn9r_PtusDhq0'
      }
    };

    $scope.pdfEmbed="Naviss credere!Orgia de germanus repressor, gratia rumor!Nunquam pugna axona.Cur orexis peregrinationes?Sunt https://www.cca.edu/sites/default/files/pdf/08/word-to-pdf.pdf abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam https://vimeo.com/92066734 germanus musa.Cur lacta prarere? :smile: Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius."

    $scope.codeExample = '```\n<script></script>\n``` www.ng-conf.org http://www.iitr.ac.in ROTFL!!!! Now this explains :P why Kejriwal & his Nocere cito ducunt ad noster domina.Salvus nutrixs ducunt ad decor.Grandis torquis sed mire visums xiphias est.```javascript\ngrade = (student, period=(if b? then 7 else 6)) ->\n    if student.excellentWork\n      "A+"\n  else if student.okayStuff\n     if student.triedHard then "B" else "B-"\n   else\n      "C"\nclass Animal extends Being\nconstructor: (@name) ->\nmove: (meters) ->\nalert @name + " moved #{meters}m."\n``` with Yogendra Yadav. Because he had praised Narendra :smile: Modi and Gujarat model in an interview.Check this 1-min clip in which Yogendra Yadav openly praises Modis Gujarat development : https://vimeo.com/119199079';

    $scope.mediaExample="Naviss credere!Orgia de germanus repressor, http://techslides.com/demos/sample-videos/small.mp4 gratia rumor!Nunquam pugna axona.Cur orexis peregrinationes?Sunt  abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam germanus musa.Cur lacta prarere? :smile: Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius."
  }])
  .controller('DocumentationCtrl', ['$scope', '$http', function ($scope, $http) {


  }])
  .controller('GettingStartedCtrl', ['$scope', function ($scope) {
    $scope.x = '```npm install --save emoticons-js```';
  }]);

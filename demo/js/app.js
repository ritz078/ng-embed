/**
 * ngEmoticonApp Module
 *
 * Description
 */
angular.module('ngEmoticonApp', ['ngEmbed'])

    .controller('ngEmoticonCtrl', ['$scope', function ($scope) {
        $scope.options = {
            'linkTarget': '_blank',
            'basicVideo': false,
            'code'      : {
                'highlight'  : true,
                'lineNumbers': true
            },
            'gdevAuth': 'AIzaSyAQONTdSSaKwqB1X8i6dHgn9r_PtusDhq0',
            'video'     : {
                'embed'    : true,
                'width'    : 800,
                'ytTheme'  : 'light',
                'details'  : true
            },
            'image'     : {
                'embed': true
            },
            tweetOptions: {
                align: 'center'
            }
        };
        $scope.qwe = '';
        $scope.ideone='Est fatalis habitio, cesaris.Sunt :) ususes manifestum audax, domesticus burguses.Ventuss prarere in tubinga!Sunt menses examinare alter, emeritis advenaes. https://ideone.com/n2GYdv Eheu, regius resistentia!Nunquam quaestio lactea.Ecce, placidus usus!';
        $scope.gist='Pol.Idoleums mori!Cum bromium favere, omnes lumenes imperium lotus, castus eraes. https://gist.github.com/ritz078/75c238ffa59244ae8e1a A falsis, valebat magnum cobaltum.Tatas unda, tanquam albus lamia.Pulchritudine volares, tanquam barbatus silva.';
        $scope.plunker='http://plnkr.co/edit/AK732k Cur elevatus trabem?Boreass observare in audax hafnia!Ubi est brevis cursus?Prarere inciviliter ducunt ad regius tumultumque.Lotus xiphiass ducunt ad nuclear vexatum iacere.Sunt deuses pugna rusticus, bassus guttuses.Olla castus musa est.Nunquam amor magister.Secundus, mirabilis agripetas callide promissio de teres, castus medicina.';
        $scope.codepen = 'http://codepen.io/jexordexan/pen/yyYEJa Eheu, fatalis accola!Gallus cantares, tanquam bassus aonides.Albusguttuss ducunt ad abnoba.Vox dexter heuretes est.Magnum advenas ducunt ad classis.Fluctuss trabem, tanquamnobilis elogium.Altus silva una anhelares demolitione est.Lactea de magnum domina, anhelare coordinatae!Spatii,uria, et ventus.Lactas assimilant in piscinam!';
        $scope.jsfiddle = 'Cum zelus resistere, omnes cursuses aperto grandis, fidelis heureteses.Est pius axona, cesaris.Est gratissecula, cesaris. http://jsfiddle.net/zalun/NmudS/ Fiscina clemens guttus est.Nunquam prensionem adiurator.Caduntcito ducunt ad regius nutrix.Vita castus candidatus est.';
        $scope.jsbin = 'Clemens caniss ducunt ad apolloniates.A falsis, victrix altus lactea.Ubi est camerarius ausus?Orgia de albusonus, prensionem racana! http://jsbin.com/iwovaj/73/ Parma potuss, tanquam pius demissio.Detriuss observare incubiculum!Cur adiurator experimentum?';
        $scope.spotify = ' Secundus, salvus diatrias sapienter resuscitabo de raptus, talis advena.Est albus candidatus, cesaris.Vae,mens!A falsis, hydra salvus eleates.Brevis boreas aegre amors axona est.Domesticus, noster rationes nunquamtractare de festus, audax calceus.Alter, bi-color fraticinidas virtualiter dignus de primus, varius gemna.Heu,salvus gemna!http://open.spotify.com/track/4th1RQAelzqgY7wL53UGQt Varius palus sapienter vitares parma est.Domesticus mortemsducunt ad uria.';
        $scope.soundcloud = 'Urbs ires, tanquam alter mons.Nunquam pugna ausus.Sunt finises carpseris clemens, germanus vigiles.https://soundcloud.com/the-bugle/bugle-179-playas-gon-play Eheu.Boreas ortums, tanquam secundus era.Superbussilvas ducunt ad olla.Usus magnum animalis est.Tuss studere!Cursuss messis in hortus!Fiscinas sunt lubas deaudax mons.';
        $scope.dotsub = 'Dexter genetrixs ducunt ad planeta.Cur nixus peregrinatione?Hercle, valebat ferox!.Superbus galataes ducunt adanimalis.Ferox galataes ducunt ad vox.https://dotsub.com/view/85897135-c6ee-4c93-acdd-d7e7f4d08b6e Est emeritis danista, cesaris.Cum xiphias mori,omnes lapsuses experientia peritus, grandis toruses';
        $scope.liveleak = 'Vae.Ecce.Ubi est albus tabes?Crescere satis ducunt ad barbatus verpa.Observare foris ducunt ad barbatus scutum.http://www.liveleak.com/view?i=42a_1426999994 Valebat audax verpa est.Burgus de brevis frondator, imperiumanimalis!Quadras sunt fidess de clemens navis.';
        $scope.dailymotion = 'Eposs resistere, http://www.ted.com/talks/monica_lewinsky_the_price_of_shame tanquam raptus acipenser.Solitudos trabem in ostravia!Pius nutrixs ducunt adadvena.Vae.Galluss congregabo in ostravia! http://www.dailymotion.com/video/x2k8un2_2015-wc-nz-vs-wi-holder-reacts-on-guptills-237_sport Heu,repressor!Vae, calceus!A falsis, lumen neuter triticum.';
        $scope.twitchtv = 'Decors peregrinatione in asopus!Cur deus unda?Nunquam attrahendam cannabis.Rumor de gratis orgia, fallerepoeta!Classiss messis in rugensis civitas! http://www.twitch.tv/tsm_santorin Cum stella mori, omnes zelusesaperto raptus, festus omniaes.Sunt habitioes acquirere magnum, ferox paluses.';
	    $scope.ustream = 'Decors peregrinatione in asopus!Cur deus unda?Nunquam attrahendam cannabis.Rumor de gratis orgia, fallerepoeta!Classiss messis in rugensis civitas! http://www.ustream.tv/embed/1524 Cum stella mori, omnes zelusesaperto raptus, festus omniaes.Sunt habitioes acquirere magnum, ferox paluses.';
        $scope.twitter = 'https://twitter.com/IGN/status/579314375808417792 www.ng-conf.org https://www.iitr.ac.in ROTFL!!!! Now this explains :P why Kejriwal & his fans are upset with Yogendra Yadav. Because he had praised Narendra :smile: Modi and Gujarat model in an interview.Check this 1-min clip in which Yogendra Yadav openly praises Modis Gujarat developmentSunt boreases reperire raptus, velox abaculuses.Cur triticum peregrinatione?Festus, azureus candidatuss rare contactus de salvus, alter fluctui.Diatrias unda in divio! https://twitter.com/jkowall/status/580353470433271808 Cum classis assimilant, omnes compateres acquirere rusticus, fatalis gabaliumes.Lura azureus visus est.Pol, talis glos!Deuss sunt verpas de mirabilis historia.';
        $scope.text1 = '```\n<script></script>\n``` http://www.w3schools.com/html/horse.mp3 www.ng-conf.org http://www.iitr.ac.in ROTFL!!!! https://channeli.in/notices/userfiles/files/Scan10003%20(2).PDF Now this explains :P why Kejriwal & his Nocere cito ducunt ad noster domina.Salvus nutrixs ducunt ad decor.Grandis torquis sed mire visums xiphias est.```javascript\ngrade = (student, period=(if b? then 7 else 6)) ->\n    if student.excellentWork\n      "A+"\n  else if student.okayStuff\n     if student.triedHard then "B" else "B-"\n   else\n      "C"\nclass Animal extends Being\nconstructor: (@name) ->\nmove: (meters) ->\nalert @name + " moved #{meters}m."\n``` with Yogendra Yadav. Because he had praised Narendra :smile: Modi and Gujarat model in an interview.Check this 1-min clip in which Yogendra Yadav openly praises Modis Gujarat development : https://vimeo.com/119199079';
         $scope.text='Cum epos mori, :scream: omnes :) nutrixes aperto emeritis, http://rkritesh.in/ngEmbed castus devatioes.Est fidelis armarium, cesaris.Velox, raptus paluss mechanice vitare de fidelis, varius stella.Eheu, armarium!Habitio de brevis agripeta, aperto ignigena!Nocere rare ducunt ad neuter humani generis.Cotta de velox gabalium, imperium cannabis! https://rkritesh.in/embed-js Pol, albus cobaltum!Est alter calcaria, cesaris. :smile: Eheu, gemna!Audax advena solite gratias tus est. <3';

        $scope.youtube='Naviss credere!Orgia de germanus :) repressor, gratia rumor!Nunquam pugna axona.Cur orexis peregrinationes?Sunt abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam https://www.youtube.com/watch?v=QHulaj5ZxbI germanus musa.Cur lacta prarere? :smile: Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius.';

        $scope.vimeo='Naviss credere!Orgia de germanus repressor, gratia rumor!Nunquam pugna axona.Cur orexis peregrinationes?Sunt abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam https://vimeo.com/92066734 germanus musa.Cur lacta prarere? :smile: Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius.';

        $scope.pdfText='Naviss credere!Orgia de germanus repressor, gratia rumor!Nunquam pugna axona.Cur orexis peregrinationes?Sunt https://www.cca.edu/sites/default/files/pdf/08/word-to-pdf.pdf abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam https://vimeo.com/92066734 germanus musa.Cur lacta prarere? :smile: Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius.';



        $scope.media='Naviss credere!Orgia de :smile: germanus repressor, http://www.w3schools.com/html/mov_bbb.ogg gratia rumor!Nunquam pugna axona. http://media1.santabanta.com/full1/Hinduism/Lord%20Krishna/lor27h.jpg Cur orexis peregrinationes?Sunt abactores pugna gratis, germanus lamiaes.Cur lanista cantare?Est castus bromium, cesaris.Tabess velum, tanquam germanus musa.Cur lacta prarere? Assimilant aegre ducunt ad magnum advena.Emeritis, fidelis menss interdum examinare de varius, lotus detrius.';


        $scope.model = {
        	watchText: 'Hello world :)'
	    };
	    $scope.watchOptions = {};
	    angular.copy($scope.options, $scope.watchOptions);
	    $scope.watchOptions.watchEmbedData = true;
    }]);


(function () {

    'use strict';

    angular.module('ngEmoticons', ['ngSanitize'])
        .filter('emoticons', ['$sce', function ($sce) {
            var icons=[{text:":)","class":"smiley",code:"e60a"},{text:":D","class":"happy",code:"e608"},{text:":d","class":"happy",code:"e608"},{text:":(","class":"sad",code:"e60e"},{text:":/","class":"wondering",code:"e620"},{text:":P","class":"tongue",code:"e60c"},{text:":p","class":"tongue",code:"e60c"},{text:"3:)","class":"evil",code:"e618"},{text:"(^)","class":"thumbsup2",code:"e607"},{text:";)","class":"wink",code:"e610"},{text:":o","class":"shocked",code:"e61a"},{text:"-_-","class":"neutral",code:"e61e"},{text:"(y)","class":"thumbs-up",code:"e606"},{text:":*","class":"heart",code:"e604"},{text:"&lt;3","class":"heart",code:"e604"},{text:"<3","class":"heart",code:"e604"},{text:"&lt;/3","class":"heart-broken",code:"e605"},{text:"</3","class":"heart-broken",code:"e605"},{text:"^_^","class":"grin",code:"e612"},{text:"8-)","class":"cool",code:"e614"},{text:"8|","class":"cool",code:"e614"},{text:":S","class":"confused",code:"e61c"},{text:":s","class":"confused",code:"e61c"}];

            var emojiList=["bowtie","smile","laughing","blush","smiley","relaxed","smirk","heart_eyes","kissing_heart","kissing_closed_eyes","flushed","relieved","satisfied","grin","wink","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","grinning","kissing","winky_face","kissing_smiling_eyes","stuck_out_tongue","sleeping","worried","frowning","anguished","open_mouth","grimacing","confused","hushed","expressionless","unamused","sweat_smile","sweat","wow","disappointed_relieved","weary","pensive","disappointed","confounded","fearful","cold_sweat","persevere","cry","sob","joy","astonished","scream","neckbeard","tired_face","angry","rage","triumph","sleepy","yum","mask","sunglasses","dizzy_face","imp","smiling_imp","neutral_face","no_mouth","innocent","alien","yellow_heart","blue_heart","purple_heart","heart","green_heart","broken_heart","heartbeat","heartpulse","two_hearts","revolving_hearts","cupid","sparkling_heart","sparkles","star","star2","dizzy","boom","collision","anger","exclamation","question","grey_exclamation","grey_question","zzz","dash","sweat_drops","notes","musical_note","fire","hankey","poop","shit","\\+1","thumbsup","-1","thumbsdown","ok_hand","punch","facepunch","fist","v","wave","hand","raised_hand","open_hands","point_up","point_down","point_left","point_right","raised_hands","pray","point_up_2","clap","muscle","metal","fu","walking","runner","running","couple","family","two_men_holding_hands","two_women_holding_hands","dancer","dancers","ok_woman","no_good","information_desk_person","raising_hand","bride_with_veil","person_with_pouting_face","person_frowning","bow","couplekiss","couple_with_heart","massage","haircut","nail_care","boy","girl","woman","man","baby","older_woman","older_man","person_with_blond_hair","man_with_gua_pi_mao","man_with_turban","construction_worker","cop","angel","princess","smiley_cat","smile_cat","heart_eyes_cat","kissing_cat","smirk_cat","scream_cat","crying_cat_face","joy_cat","pouting_cat","japanese_ogre","japanese_goblin","see_no_evil","hear_no_evil","speak_no_evil","guardsman","skull","feet","lips","kiss","droplet","ear","eyes","nose","tongue","love_letter","bust_in_silhouette","busts_in_silhouette","speech_balloon","thought_balloon","feelsgood","finnadie","goberserk","godmode","hurtrealbad","rage1","rage2","rage3","rage4","suspect","trollface","sunny","umbrella","cloud","snowflake","snowman","zap","cyclone","foggy","ocean","cat","dog","mouse","hamster","rabbit","wolf","frog","tiger","koala","bear","pig","pig_nose","cow","boar","monkey_face","monkey","horse","racehorse","camel","sheep","elephant","panda_face","snake","bird","baby_chick","hatched_chick","hatching_chick","chicken","penguin","turtle","bug","honeybee","ant","beetle","snail","octopus","tropical_fish","fish","whale","whale2","dolphin","cow2","ram","rat","water_buffalo","tiger2","rabbit2","dragon","goat","rooster","dog2","pig2","mouse2","ox","dragon_face","blowfish","crocodile","dromedary_camel","leopard","cat2","poodle","paw_prints","bouquet","cherry_blossom","tulip","four_leaf_clover","rose","sunflower","hibiscus","maple_leaf","leaves","fallen_leaf","herb","mushroom","cactus","palm_tree","evergreen_tree","deciduous_tree","chestnut","seedling","blossom","ear_of_rice","shell","globe_with_meridians","sun_with_face","full_moon_with_face","new_moon_with_face","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","last_quarter_moon_with_face","first_quarter_moon_with_face","moon","earth_africa","earth_americas","earth_asia","volcano","milky_way","partly_sunny","octocat","squirrel","bamboo","gift_heart","dolls","school_satchel","mortar_board","flags","fireworks","sparkler","wind_chime","rice_scene","jack_o_lantern","ghost","santa","christmas_tree","gift","bell","no_bell","tanabata_tree","tada","confetti_ball","balloon","crystal_ball","cd","dvd","floppy_disk","camera","video_camera","movie_camera","computer","tv","iphone","phone","telephone","telephone_receiver","pager","fax","minidisc","vhs","sound","speaker","mute","loudspeaker","mega","hourglass","hourglass_flowing_sand","alarm_clock","watch","radio","satellite","loop","mag","mag_right","unlock","lock","lock_with_ink_pen","closed_lock_with_key","key","bulb","flashlight","high_brightness","low_brightness","electric_plug","battery","calling","email","mailbox","postbox","bath","bathtub","shower","toilet","wrench","nut_and_bolt","hammer","seat","moneybag","yen","dollar","pound","euro","credit_card","money_with_wings","e-mail","inbox_tray","outbox_tray","envelope","incoming_envelope","postal_horn","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","door","smoking","bomb","gun","hocho","pill","syringe","page_facing_up","page_with_curl","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","scroll","clipboard","calendar","date","card_index","file_folder","open_file_folder","scissors","pushpin","paperclip","black_nib","pencil2","straight_ruler","triangular_ruler","closed_book","green_book","blue_book","orange_book","notebook","notebook_with_decorative_cover","ledger","books","bookmark","name_badge","microscope","telescope","newspaper","football","basketball","soccer","baseball","tennis","8ball","rugby_football","bowling","golf","mountain_bicyclist","bicyclist","horse_racing","snowboarder","swimmer","surfer","ski","spades","hearts","clubs","diamonds","gem","ring","trophy","musical_score","musical_keyboard","violin","space_invader","video_game","black_joker","flower_playing_cards","game_die","dart","mahjong","clapper","memo","pencil","book","art","microphone","headphones","trumpet","saxophone","guitar","shoe","sandal","high_heel","lipstick","boot","shirt","tshirt","necktie","womans_clothes","dress","running_shirt_with_sash","jeans","kimono","bikini","ribbon","tophat","crown","womans_hat","mans_shoe","closed_umbrella","briefcase","handbag","pouch","purse","eyeglasses","fishing_pole_and_fish","coffee","tea","sake","baby_bottle","beer","beers","cocktail","tropical_drink","wine_glass","fork_and_knife","pizza","hamburger","fries","poultry_leg","meat_on_bone","spaghetti","curry","fried_shrimp","bento","sushi","fish_cake","rice_ball","rice_cracker","rice","ramen","stew","oden","dango","egg","bread","doughnut","custard","icecream","ice_cream","shaved_ice","birthday","cake","cookie","chocolate_bar","candy","lollipop","honey_pot","apple","green_apple","tangerine","lemon","cherries","grapes","watermelon","strawberry","peach","melon","banana","pear","pineapple","sweet_potato","eggplant","tomato","corn","house","house_with_garden","school","office","post_office","hospital","bank","convenience_store","love_hotel","hotel","wedding","church","department_store","european_post_office","city_sunrise","city_sunset","japanese_castle","european_castle","tent","factory","tokyo_tower","japan","mount_fuji","sunrise_over_mountains","sunrise","stars","themoreyouknow","tmyk","statue_of_liberty","bridge_at_night","carousel_horse","rainbow","ferris_wheel","fountain","roller_coaster","ship","speedboat","boat","sailboat","rowboat","anchor","rocket","airplane","helicopter","steam_locomotive","tram","mountain_railway","bike","aerial_tramway","suspension_railway","mountain_cableway","tractor","blue_car","oncoming_automobile","car","red_car","taxi","oncoming_taxi","articulated_lorry","bus","oncoming_bus","rotating_light","police_car","oncoming_police_car","fire_engine","ambulance","minibus","truck","train","station","train2","bullettrain_front","bullettrain_side","light_rail","monorail","railway_car","trolleybus","ticket","fuelpump","vertical_traffic_light","traffic_light","warning","construction","beginner","atm","slot_machine","busstop","barber","hotsprings","checkered_flag","crossed_flags","izakaya_lantern","moyai","circus_tent","performing_arts","round_pushpin","triangular_flag_on_post","jp","kr","cn","us","fr","es","it","ru","gb","uk","de","one","two","three","four","five","six","seven","eight","nine","keycap_ten","1234","zero","hash","symbols","arrow_backward","arrow_down","arrow_forward","arrow_left","capital_abcd","abcd","abc","arrow_lower_left","arrow_lower_right","arrow_right","arrow_up","arrow_upper_left","arrow_upper_right","arrow_double_down","arrow_double_up","arrow_down_small","arrow_heading_down","arrow_heading_up","leftwards_arrow_with_hook","arrow_right_hook","left_right_arrow","arrow_up_down","arrow_up_small","arrows_clockwise","arrows_counterclockwise","rewind","fast_forward","information_source","ok","twisted_rightwards_arrows","repeat","repeat_one","new","top","up","cool","free","ng","cinema","koko","signal_strength","u5272","u5408","u55b6","u6307","u6708","u6709","u6e80","u7121","u7533","u7a7a","u7981","sa","restroom","mens","womens","baby_symbol","no_smoking","parking","wheelchair","metro","baggage_claim","accept","wc","potable_water","put_litter_in_its_place","secret","congratulations","m","passport_control","left_luggage","customs","ideograph_advantage","cl","sos","id","no_entry_sign","underage","no_mobile_phones","do_not_litter","non-potable_water","no_bicycles","no_pedestrians","children_crossing","no_entry","eight_spoked_asterisk","eight_pointed_black_star","heart_decoration","vs","vibration_mode","mobile_phone_off","chart","currency_exchange","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","six_pointed_star","negative_squared_cross_mark","a","b","ab","o2","diamond_shape_with_a_dot_inside","recycle","end","on","soon","clock1","clock130","clock10","clock1030","clock11","clock1130","clock12","clock1230","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","heavy_dollar_sign","copyright","registered","tm","x","heavy_exclamation_mark","bangbang","interrobang","o","heavy_multiplication_x","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","white_flower","100","heavy_check_mark","ballot_box_with_check","radio_button","link","curly_loop","wavy_dash","part_alternation_mark","trident","black_square","white_square","white_check_mark","black_square_button","white_square_button","black_circle","white_circle","red_circle","large_blue_circle","large_blue_diamond","large_orange_diamond","small_blue_diamond","small_orange_diamond","small_red_triangle","small_red_triangle_down","shipit"];

            return function (input, userOptions) {

                /**
                 * defaultOptions
                 *
                 * @description
                 * Holds the default configuration of the module.
                 *
                 * @type {Object}
                 */
                var options = {
                    link      : true,
                    linkTarget: '_self'
                };

                /**
                 * Function extendDeep
                 *
                 * @description
                 * Extends an object to another object using deep analyzing
                 *
                 * @param dst
                 * @returns extended object
                 */

                function extendDeep(dst) {
                    angular.forEach(arguments, function (obj) {
                        if (obj !== dst) {
                            angular.forEach(obj, function (value, key) {
                                if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                    extendDeep(dst[key], value);
                                }
                                else {
                                    dst[key] = value;
                                }
                            });
                        }
                    });
                    return dst;
                }

                extendDeep(options, userOptions);

                if (input === undefined || input === null) {
                    return;
                }
                if (typeof input === "object") {
                    return input;
                }

                /**
                 * FUNCTION insertfontSmiley
                 * @description
                 * Coverts the text into font emoticons
                 *
                 * @param  {string} str
                 *
                 * @return {string}
                 */

                function insertfontSmiley(str) {

                    var a = str.split(' ');
                    angular.forEach(icons, function (icon) {
                        for (var i = 0; i < a.length; i++) {
                            if (a[i] === icon.text) {
                                a[i] = '<i class="icon-emoticon" title="' + icon.text + '">' + '&#x' + icon.code + '</i>';
                            }
                        }
                    });
                    return a.join(' ');
                }

                /**
                 * FUNCTION UrlEmbed
                 * @description
                 * Converts normal links written in the text into html anchor tags.
                 *
                 * @param  {string} text
                 *
                 * @return {string}
                 */

                function urlEmbed(str) {

                    var urlRegex = /((href|src)=["']|)(\b(https?|ftp|file):\/\/[-A-Z0-9+()&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

                    var strReplaced = str.replace(urlRegex, function (match) {
                            return '<a href="' + match + '" target="' + options.linkTarget + '">' + match + '</a>';
                        }
                    );
                    return strReplaced;
                }

                /**
                 * FUNCTION insertEmoji
                 *
                 * @description
                 * Converts text into emojis
                 *
                 * @param  {string} str
                 *
                 * @return {string}
                 */

                function insertEmoji(str) {

                    var emojiRegex = new RegExp(":(" + emojiList.join("|") + "):", "g");

                    return str.replace(emojiRegex, function (match, text) {
                        return "<i class='emoticon emoticon-" + text + "' title=':" + text + ":'></i>";

                    });
                }

                /**
                 * All the functions are being called here.
                 */


                input = insertfontSmiley(input);

                input = insertEmoji(input);

                if (options.link) {
                    input = urlEmbed(input);
                }

                return $sce.trustAsHtml(input);

            };
        }])

        .directive('ngEmoticons', ['$filter', '$sce', '$http', '$timeout', '$templateCache', function ($filter, $sce, $http, $timeout, $templateCache) {

            var TEMPLATE_URL = '';

            var template = '<div ng-bind-html="neText" ne-hljs></div>' +
                '<div class="ne-video" ng-if="video.host" class="fade">' +
                '    <div class="ne-video-preview" ng-hide="nePlayVideo || !(options.video.details)">' +
                '        <div class="ne-video-thumb" ng-click="nePlayVideo=!nePlayVideo">' +
                '            <img ng-src="{{video.thumbnail}}" alt=""/>' +
                '            <i class="fa fa-play-circle-o"></i>' +
                '        </div>' +
                '        <div class="ne-video-detail">' +
                '            <div class="ne-video-title">' +
                '                <a ng-href="{{video.url}}">{{video.title}}</a>' +
                '            </div>' +
                '            <div class="ne-video-desc">' +
                '                {{video.description}}' +
                '            </div>' +
                '            <div class="ne-video-stats">' +
                '                <span><i class="fa fa-eye"></i> {{video.views}}</span>' +
                '                <span><i class="fa fa-heart"></i> {{video.likes}}</span>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '    <div class="ne-video-player" ng-if="nePlayVideo || !(options.video.details)">' +
                '        <iframe ng-src="{{video.embedSrc}}" frameBorder="0" width="{{video.width}}" height="{{video.height}}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
                '    </div>' +
                '' +
                '' +
                '</div>' +
                '<div class="ne-video" ng-if="video.basic">' +
                '    <div class="ne-video-player">' +
                '        <div class="player">' +
                '            <video ng-src="{{video.basic}}" controls></video>' +
                '        </div>' +
                '    </div>' +
                '</div>' +
                '<div ng-init="neImageLong=false" ng-class="{false:\'ne-image\', true:\'ne-image ne-image-long\'}[neImageLong]"' +
                '     ng-if="image.url">' +
                '    <div class="ne-image-wrapper">' +
                '        <img ng-src="{{image.url}}" ng-click="neImageLong=!neImageLong" alt=""/>' +
                '    </div>' +
                '</div>' +
                '<div class="ne-pdf" ng-if="pdf.url">' +
                '    <div class="ne-pdf-preview" ng-hide="neShowPdf">' +
                '        <div class="ne-pdf-icon">' +
                '            <i class="fa fa-file-pdf-o"></i>' +
                '        </div>' +
                '        <div class="ne-pdf-detail" >' +
                '            <div class="ne-pdf-title">' +
                '                <a href="">{{pdf.url}}</a>' +
                '            </div>' +
                '            <div class="ne-pdf-view">' +
                '' +
                '                <button><i class="fa fa-download"></i> <a ng-href="{{pdf.url}}" target="_blank">Download</a></button>' +
                '                <button ng-click="neShowPdf=!neShowPdf"><i class="fa fa-eye"></i> View PDF</button>' +
                '' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '    <div class="ne-pdf-viewer" ng-if="neShowPdf" ng-show="neShowPdf">' +
                '        <iframe ng-src="{{pdf.url}}" frameBorder="0"></iframe>' +
                '    </div>' +
                '' +
                '</div>' +
                '<div class="ne-audio" ng-if="audio.url">' +
                '    <audio ng-src="{{audio.url}}" controls></audio>' +
                '</div>';

            $templateCache.put(TEMPLATE_URL, template);

            return {
                restrict   : 'AE',
                scope:true,
                templateUrl: function (element, attributes) {
                    return (attributes.emoticonsTemplateUrl || TEMPLATE_URL);
                },
                link       : function (scope, elements, attributes) {

                    var data = scope.$eval(attributes.emoticonsData);
                    var userOptions = scope.$eval(attributes.emoticonsOptions);
                    scope.video = {};
                    scope.image = {};
                    scope.pdf = {};
                    scope.audio = {};

                    var options = {
                        link      : true,
                        linkTarget: '_self',
                        pdf       : {
                            embed: true
                        },
                        image     : {
                            embed: false
                        },
                        audio     : {
                            embed: true
                        },
                        code      : {
                            highlight  : true,
                            lineNumbers: false
                        },
                        basicVideo: false,
                        video     : {
                            embed           : false,
                            width           : null,
                            height          : null,
                            ytTheme         : 'dark',
                            details         : false,
                            thumbnailQuality: 'medium',
                            ytAuthKey       : null
                        }
                    };

                    function extendDeep(dst) {
                        angular.forEach(arguments, function (obj) {
                            if (obj !== dst) {
                                angular.forEach(obj, function (value, key) {
                                    if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                        extendDeep(dst[key], value);
                                    }
                                    else {
                                        dst[key] = value;
                                    }
                                });
                            }
                        });
                        return dst;
                    }

                    extendDeep(options, userOptions);

                    String.prototype.trunc =
                        function (n, useWordBoundary) {
                            var toLong = this.length > n,
                                s_ = toLong ? this.substr(0, n - 1) : this;
                            s_ = useWordBoundary && toLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
                            return toLong ? s_ + '...' : s_;
                        };

                    var videoProcess = {
                        calcDimensions: function (options) {
                            var dimensions = {
                                'width' : null,
                                'height': null
                            };
                            dimensions.width = options.video.width;
                            dimensions.height = options.video.height;

                            if (options.video.height && options.video.width) {
                                return dimensions;
                            }
                            else if (options.video.height) {
                                dimensions.width = ((options.video.height) / 390) * 640;
                                return dimensions;
                            }
                            else if (options.video.width) {
                                dimensions.height = ((dimensions.width) / 640) * 390;
                                return dimensions;
                            }
                            else {
                                dimensions.width = 640;
                                dimensions.height = 390;
                                return dimensions;
                            }
                        },

                        embed: function (data, options) {

                            var p = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/ytscreeningroom\?v=|\/feeds\/api\/videos\/|\/user\S*[^\w\-\s]|\S*[^\w\-\s]))([\w\-]{11})[?=&+%\w-]*/gi;

                            /**
                             * Youtube embedding
                             */

                            if (data.match(p)) {

                                var youtubeDimensions = this.calcDimensions(options);
                                scope.video.id = RegExp.$1;
                                if (options.video.details) {
                                    $http.get('https://www.googleapis.com/youtube/v3/videos?id=' + RegExp.$1 + '&key=' + options.video.ytAuthKey + '&part=snippet,statistics')
                                        .success(function (d) {
                                            var ytData = d.items[0];

                                            scope.video.host = 'youtube';
                                            scope.video.title = ytData.snippet.title;
                                            scope.video.thumbnail = ytData.snippet.thumbnails.medium.url;
                                            scope.video.description = (ytData.snippet.description.trunc(250, true)).replace(/\n/g, ' ').replace(/&#10;/g, ' ');
                                            scope.video.rawDescription = ytData.snippet.description;
                                            scope.video.views = ytData.statistics.viewCount;
                                            scope.video.likes = ytData.statistics.likeCount;
                                            scope.video.uploader = ytData.snippet.channelTitle;
                                            scope.video.uploaderPage = 'https://www.youtube.com/channel/' + ytData.snippet.channelId;
                                            scope.video.uploadDate = ytData.snippet.publishedAt;
                                            scope.video.url = $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=" + ytData.id);
                                            scope.video.embedSrc = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + scope.video.id + '?autoplay=1');
                                            scope.video.width = youtubeDimensions.width;
                                            scope.video.height = youtubeDimensions.height;

                                        });
                                }
                                else{
                                    scope.video.width = youtubeDimensions.width;
                                    scope.video.height = youtubeDimensions.height;
                                    scope.video.host = 'youtube';
                                    scope.video.embedSrc = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + RegExp.$1 + '?autoplay=0');

                                }

                                return data;  // show only youtube video if both vimeo and youtube videos are present.
                            }

                            /**
                             * Vimeo embedding
                             */

                            var e = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)*/gi;

                            if (data.match(e)) {
                                var vimeoDimensions = this.calcDimensions(options);
                                scope.video.id = RegExp.$3;
                                if (options.video.details) {
                                    $http.get('https://vimeo.com/api/v2/video/' + RegExp.$3 + '.json')
                                        .success(function (d) {
                                            scope.video.host = 'vimeo';
                                            scope.video.title = d[0].title;
                                            scope.video.rawDescription = (d[0].description).replace(/\n/g, '<br/>').replace(/&#10;/g, '<br/>');
                                            scope.video.description = (d[0].description).replace(/((<|&lt;)br\s*\/*(>|&gt;)\r\n)/g, ' ').trunc(250, true);
                                            scope.video.thumbnail = d[0].thumbnail_medium;
                                            scope.video.views = d[0].stats_number_of_plays;
                                            scope.video.likes = d[0].stats_number_of_likes;
                                            scope.video.uploader = d[0].user_name;
                                            scope.video.uploaderPage = d[0].user_url;
                                            scope.video.uploadDate = d[0].uploadDate;
                                            scope.video.url = d[0].url;
                                            scope.video.embedSrc = $sce.trustAsResourceUrl('//player.vimeo.com/video/' + d[0].id + '?title=0&byline=0&portrait=0&autoplay=1');
                                            scope.video.width = vimeoDimensions.width;
                                            scope.video.height = vimeoDimensions.height;
                                        });
                                }
                                else{
                                    scope.video.width = vimeoDimensions.width;
                                    scope.video.height = vimeoDimensions.height;
                                    scope.video.host = 'vimeo';
                                    scope.video.embedSrc=$sce.trustAsResourceUrl('//player.vimeo.com/video/' + RegExp.$3 + '?title=0&byline=0&portrait=0&autoplay=0');
                                }
                            }

                            return data;
                        },

                        embedBasic:function(data){
                            var f = /((?:https?):\/\/\S*\.(?:ogv|webm|mp4))/gi;

                            if (data.match(f)) {
                                scope.video.basic = $sce.trustAsResourceUrl(RegExp.$1);
                            }

                            return data;
                        }
                    };

                    var audioProcess = {
                        embed: function (str) {
                            var a = /((?:https?):\/\/\S*\.(?:wav|mp3|ogg))/gi;
                            if (str.match(a)) {
                                scope.audio.url = $sce.trustAsResourceUrl(RegExp.$1);
                            }
                            return str;
                        }
                    };

                    var imageProcess = {
                        embed: function (data) {
                            var i = /((?:https?):\/\/\S*\.(?:gif|jpg|jpeg|tiff|png|svg|webp))/gi;

                            if (data.match(i)) {
                                scope.image.url = RegExp.$1;

                            }

                            return data;
                        }
                    };

                    var codeProcess = {
                        encodeCode: function (c) {
                            c = c.replace(/\&/gm, '&amp;');
                            c = c.replace(/</gm, '&lt;');
                            c = c.replace(/>/gm, '&gt;');
                            return c;
                        },

                        getCode: function (text) {
                            var that = this;
                            text = text.replace(/(`+)(\s|[a-z]+)\s*([\s\S]*?[^`])\s*\1(?!`)/gm,
                                function (wholeMatch, m1, m2, m3) {
                                    var c = m3;
                                    c = c.replace(/^([ \t]*)/g, ""); // leading whitespace
                                    c = c.replace(/[ \t]*$/g, ""); // trailing whitespace
                                    c = that.encodeCode(c);
                                    c = c.replace(/:\/\//g, "~P"); // to prevent auto-linking. Not necessary in code
                                                                   // *blocks*, but in code spans. Will be converted
                                                                   // back after the auto-linker runs.
                                    
                                    return '<pre><code class="ne-code '+m2+'">' + c + '</code></pre>';
                                }
                            );
                            return text;
                        }
                    };

                    var pdfProcess = {
                        embed: function (str) {
                            var p = /((?:https?):\/\/\S*\.(?:pdf|PDF))/gi;
                            if (str.match(p)) {
                                scope.pdf.url = $sce.trustAsResourceUrl(RegExp.$1);

                            }

                            return str;
                        }
                    };

                    if (options.code.highlight) {
                        if (!window.hljs) {
                            throw 'hlsj (Highlight JS is not defined.';
                        }
                        else {
                            data = codeProcess.getCode(data);

                            /**
                             * Adding line numbers to code
                             */
                            $timeout(function () {
                                hljs.initHighlighting();
                                if (options.code.lineNumbers) {
                                    angular.element('.ne-code').each(function () {
                                        var i = 1;
                                        var lines = $(this).text().split('\n').length;
                                        var numbering = $('<ul/>').addClass('pre-numbering');
                                        angular.element(this)
                                            .addClass('has-numbering')
                                            .parent()
                                            .append(numbering);
                                        for (i; i <= lines; i++) {
                                            numbering.append(angular.element('<li/>').text(i));
                                        }
                                    });
                                }

                            }, 0);

                        }
                    }

                    var x = ($filter('emoticons')(data, options)).$$unwrapTrustedValue();

                    if (options.video.embed) {
                        if (!options.video.ytAuthKey) {
                            throw 'Youtube authentication key is required to get data from youtube.';
                        }
                        else {
                            x = videoProcess.embed(x, options);
                        }

                    }

                    if(options.basicVideo){
                        x=videoProcess.embedBasic(x);
                    }

                    if (options.audio.embed) {
                        x = audioProcess.embed(x);
                    }

                    if (options.image.embed) {
                        x = imageProcess.embed(x);
                    }

                    if (options.pdf.embed) {
                        x = pdfProcess.embed(x);
                    }

                    scope.neText = $sce.trustAsHtml(x);
                }
            };
        }])

        .directive('neHljs',['$timeout', function ($timeout) {
            return {
                restrict: 'AE',
                link    : function (scope, elem) {
                    $timeout(function () {
                        elem.find('.ne-code').each(function(){
                            hljs.highlightBlock(this);
                        });
                    }, 0);

                }
            };
        }]);

})();

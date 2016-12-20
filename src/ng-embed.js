(function () {

    'use strict';

    angular.module('ngEmbed', ['ngSanitize'])
		.constant('NG_EMBED_BASIC_EMOTICONS', [
			{text: ":)", 'class': "smiley", code: "e60a"},
			{text: ":D", 'class': "happy", code: "e608"},
			{text: ":d", 'class': "happy", code: "e608"},
			{text: ":(", 'class': "sad", code: "e60e"},
			{text: ":/", 'class': "wondering", code: "e620"},
			{text: ":P", 'class': "tongue", code: "e60c"},
			{text: ":p", 'class': "tongue", code: "e60c"},
			{text: "3:)", 'class': "evil", code: "e618"},
			{text: "(^)", 'class': "thumbsup2", code: "e607"},
			{text: ";)", 'class': "wink", code: "e610"},
			{text: ":o", 'class': "shocked", code: "e61a"},
			{text: "-_-", 'class': "neutral", code: "e61e"},
			{text: "(y)", 'class': "thumbs-up", code: "e606"},
			{text: ":*", 'class': "heart", code: "e604"},
			{text: "&lt;3", 'class': "heart", code: "e604"},
			{text: "<3", 'class': "heart", code: "e604"},
			{text: "&lt;/3", 'class': "heart-broken", code: "e605"},
			{text: "</3", 'class': "heart-broken", code: "e605"},
			{text: "^_^", 'class': "grin", code: "e612"},
			{text: "8-)", 'class': "cool", code: "e614"},
			{text: "8|", 'class': "cool", code: "e614"},
			{text: ":S", 'class': "confused", code: "e61c"},
			{text: ":s", 'class': "confused", code: "e61c"}
		])
		.constant('NG_EMBED_EMOJI_LIST', [
			"bowtie", "smile", "laughing", "blush", "smiley", "relaxed", "smirk", "heart_eyes", "kissing_heart", "kissing_closed_eyes", "flushed", "relieved", "satisfied", "grin", "wink", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "grinning", "kissing", "winky_face", "kissing_smiling_eyes", "stuck_out_tongue", "sleeping", "worried", "frowning", "anguished", "open_mouth", "grimacing", "confused", "hushed", "expressionless", "unamused", "sweat_smile", "sweat", "wow", "disappointed_relieved", "weary", "pensive", "disappointed", "confounded", "fearful", "cold_sweat", "persevere", "cry", "sob", "joy", "astonished", "scream", "neckbeard", "tired_face", "angry", "rage", "triumph", "sleepy", "yum", "mask", "sunglasses", "dizzy_face", "imp", "smiling_imp", "neutral_face", "no_mouth", "innocent", "alien", "yellow_heart", "blue_heart", "purple_heart", "heart", "green_heart", "broken_heart", "heartbeat", "heartpulse", "two_hearts", "revolving_hearts", "cupid", "sparkling_heart", "sparkles", "star", "star2", "dizzy", "boom", "collision", "anger", "exclamation", "question", "grey_exclamation", "grey_question", "zzz", "dash", "sweat_drops", "notes", "musical_note", "fire", "hankey", "poop", "shit", "\\+1", "thumbsup", "-1", "thumbsdown", "ok_hand", "punch", "facepunch", "fist", "v", "wave", "hand", "raised_hand", "open_hands", "point_up", "point_down", "point_left", "point_right", "raised_hands", "pray", "point_up_2", "clap", "muscle", "metal", "fu", "walking", "runner", "running", "couple", "family", "two_men_holding_hands", "two_women_holding_hands", "dancer", "dancers", "ok_woman", "no_good", "information_desk_person", "raising_hand", "bride_with_veil", "person_with_pouting_face", "person_frowning", "bow", "couplekiss", "couple_with_heart", "massage", "haircut", "nail_care", "boy", "girl", "woman", "man", "baby", "older_woman", "older_man", "person_with_blond_hair", "man_with_gua_pi_mao", "man_with_turban", "construction_worker", "cop", "angel", "princess", "smiley_cat", "smile_cat", "heart_eyes_cat", "kissing_cat", "smirk_cat", "scream_cat", "crying_cat_face", "joy_cat", "pouting_cat", "japanese_ogre", "japanese_goblin", "see_no_evil", "hear_no_evil", "speak_no_evil", "guardsman", "skull", "feet", "lips", "kiss", "droplet", "ear", "eyes", "nose", "tongue", "love_letter", "bust_in_silhouette", "busts_in_silhouette", "speech_balloon", "thought_balloon", "feelsgood", "finnadie", "goberserk", "godmode", "hurtrealbad", "rage1", "rage2", "rage3", "rage4", "suspect", "trollface", "sunny", "umbrella", "cloud", "snowflake", "snowman", "zap", "cyclone", "foggy", "ocean", "cat", "dog", "mouse", "hamster", "rabbit", "wolf", "frog", "tiger", "koala", "bear", "pig", "pig_nose", "cow", "boar", "monkey_face", "monkey", "horse", "racehorse", "camel", "sheep", "elephant", "panda_face", "snake", "bird", "baby_chick", "hatched_chick", "hatching_chick", "chicken", "penguin", "turtle", "bug", "honeybee", "ant", "beetle", "snail", "octopus", "tropical_fish", "fish", "whale", "whale2", "dolphin", "cow2", "ram", "rat", "water_buffalo", "tiger2", "rabbit2", "dragon", "goat", "rooster", "dog2", "pig2", "mouse2", "ox", "dragon_face", "blowfish", "crocodile", "dromedary_camel", "leopard", "cat2", "poodle", "paw_prints", "bouquet", "cherry_blossom", "tulip", "four_leaf_clover", "rose", "sunflower", "hibiscus", "maple_leaf", "leaves", "fallen_leaf", "herb", "mushroom", "cactus", "palm_tree", "evergreen_tree", "deciduous_tree", "chestnut", "seedling", "blossom", "ear_of_rice", "shell", "globe_with_meridians", "sun_with_face", "full_moon_with_face", "new_moon_with_face", "new_moon", "waxing_crescent_moon", "first_quarter_moon", "waxing_gibbous_moon", "full_moon", "waning_gibbous_moon", "last_quarter_moon", "waning_crescent_moon", "last_quarter_moon_with_face", "first_quarter_moon_with_face", "moon", "earth_africa", "earth_americas", "earth_asia", "volcano", "milky_way", "partly_sunny", "octocat", "squirrel", "bamboo", "gift_heart", "dolls", "school_satchel", "mortar_board", "flags", "fireworks", "sparkler", "wind_chime", "rice_scene", "jack_o_lantern", "ghost", "santa", "christmas_tree", "gift", "bell", "no_bell", "tanabata_tree", "tada", "confetti_ball", "balloon", "crystal_ball", "cd", "dvd", "floppy_disk", "camera", "video_camera", "movie_camera", "computer", "tv", "iphone", "phone", "telephone", "telephone_receiver", "pager", "fax", "minidisc", "vhs", "sound", "speaker", "mute", "loudspeaker", "mega", "hourglass", "hourglass_flowing_sand", "alarm_clock", "watch", "radio", "satellite", "loop", "mag", "mag_right", "unlock", "lock", "lock_with_ink_pen", "closed_lock_with_key", "key", "bulb", "flashlight", "high_brightness", "low_brightness", "electric_plug", "battery", "calling", "email", "mailbox", "postbox", "bath", "bathtub", "shower", "toilet", "wrench", "nut_and_bolt", "hammer", "seat", "moneybag", "yen", "dollar", "pound", "euro", "credit_card", "money_with_wings", "e-mail", "inbox_tray", "outbox_tray", "envelope", "incoming_envelope", "postal_horn", "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "door", "smoking", "bomb", "gun", "hocho", "pill", "syringe", "page_facing_up", "page_with_curl", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend", "chart_with_downwards_trend", "scroll", "clipboard", "calendar", "date", "card_index", "file_folder", "open_file_folder", "scissors", "pushpin", "paperclip", "black_nib", "pencil2", "straight_ruler", "triangular_ruler", "closed_book", "green_book", "blue_book", "orange_book", "notebook", "notebook_with_decorative_cover", "ledger", "books", "bookmark", "name_badge", "microscope", "telescope", "newspaper", "football", "basketball", "soccer", "baseball", "tennis", "8ball", "rugby_football", "bowling", "golf", "mountain_bicyclist", "bicyclist", "horse_racing", "snowboarder", "swimmer", "surfer", "ski", "spades", "hearts", "clubs", "diamonds", "gem", "ring", "trophy", "musical_score", "musical_keyboard", "violin", "space_invader", "video_game", "black_joker", "flower_playing_cards", "game_die", "dart", "mahjong", "clapper", "memo", "pencil", "book", "art", "microphone", "headphones", "trumpet", "saxophone", "guitar", "shoe", "sandal", "high_heel", "lipstick", "boot", "shirt", "tshirt", "necktie", "womans_clothes", "dress", "running_shirt_with_sash", "jeans", "kimono", "bikini", "ribbon", "tophat", "crown", "womans_hat", "mans_shoe", "closed_umbrella", "briefcase", "handbag", "pouch", "purse", "eyeglasses", "fishing_pole_and_fish", "coffee", "tea", "sake", "baby_bottle", "beer", "beers", "cocktail", "tropical_drink", "wine_glass", "fork_and_knife", "pizza", "hamburger", "fries", "poultry_leg", "meat_on_bone", "spaghetti", "curry", "fried_shrimp", "bento", "sushi", "fish_cake", "rice_ball", "rice_cracker", "rice", "ramen", "stew", "oden", "dango", "egg", "bread", "doughnut", "custard", "icecream", "ice_cream", "shaved_ice", "birthday", "cake", "cookie", "chocolate_bar", "candy", "lollipop", "honey_pot", "apple", "green_apple", "tangerine", "lemon", "cherries", "grapes", "watermelon", "strawberry", "peach", "melon", "banana", "pear", "pineapple", "sweet_potato", "eggplant", "tomato", "corn", "house", "house_with_garden", "school", "office", "post_office", "hospital", "bank", "convenience_store", "love_hotel", "hotel", "wedding", "church", "department_store", "european_post_office", "city_sunrise", "city_sunset", "japanese_castle", "european_castle", "tent", "factory", "tokyo_tower", "japan", "mount_fuji", "sunrise_over_mountains", "sunrise", "stars", "themoreyouknow", "tmyk", "statue_of_liberty", "bridge_at_night", "carousel_horse", "rainbow", "ferris_wheel", "fountain", "roller_coaster", "ship", "speedboat", "boat", "sailboat", "rowboat", "anchor", "rocket", "airplane", "helicopter", "steam_locomotive", "tram", "mountain_railway", "bike", "aerial_tramway", "suspension_railway", "mountain_cableway", "tractor", "blue_car", "oncoming_automobile", "car", "red_car", "taxi", "oncoming_taxi", "articulated_lorry", "bus", "oncoming_bus", "rotating_light", "police_car", "oncoming_police_car", "fire_engine", "ambulance", "minibus", "truck", "train", "station", "train2", "bullettrain_front", "bullettrain_side", "light_rail", "monorail", "railway_car", "trolleybus", "ticket", "fuelpump", "vertical_traffic_light", "traffic_light", "warning", "construction", "beginner", "atm", "slot_machine", "busstop", "barber", "hotsprings", "checkered_flag", "crossed_flags", "izakaya_lantern", "moyai", "circus_tent", "performing_arts", "round_pushpin", "triangular_flag_on_post", "jp", "kr", "cn", "us", "fr", "es", "it", "ru", "gb", "uk", "de", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "keycap_ten", "1234", "zero", "hash", "symbols", "arrow_backward", "arrow_down", "arrow_forward", "arrow_left", "capital_abcd", "abcd", "abc", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right", "arrow_double_down", "arrow_double_up", "arrow_down_small", "arrow_heading_down", "arrow_heading_up", "leftwards_arrow_with_hook", "arrow_right_hook", "left_right_arrow", "arrow_up_down", "arrow_up_small", "arrows_clockwise", "arrows_counterclockwise", "rewind", "fast_forward", "information_source", "ok", "twisted_rightwards_arrows", "repeat", "repeat_one", "new", "top", "up", "cool", "free", "ng", "cinema", "koko", "signal_strength", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709", "u6e80", "u7121", "u7533", "u7a7a", "u7981", "sa", "restroom", "mens", "womens", "baby_symbol", "no_smoking", "parking", "wheelchair", "metro", "baggage_claim", "accept", "wc", "potable_water", "put_litter_in_its_place", "secret", "congratulations", "m", "passport_control", "left_luggage", "customs", "ideograph_advantage", "cl", "sos", "id", "no_entry_sign", "underage", "no_mobile_phones", "do_not_litter", "non-potable_water", "no_bicycles", "no_pedestrians", "children_crossing", "no_entry", "eight_spoked_asterisk", "eight_pointed_black_star", "heart_decoration", "vs", "vibration_mode", "mobile_phone_off", "chart", "currency_exchange", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius", "sagittarius", "capricorn", "aquarius", "pisces", "ophiuchus", "six_pointed_star", "negative_squared_cross_mark", "a", "b", "ab", "o2", "diamond_shape_with_a_dot_inside", "recycle", "end", "on", "soon", "clock1", "clock130", "clock10", "clock1030", "clock11", "clock1130", "clock12", "clock1230", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7", "clock730", "clock8", "clock830", "clock9", "clock930", "heavy_dollar_sign", "copyright", "registered", "tm", "x", "heavy_exclamation_mark", "bangbang", "interrobang", "o", "heavy_multiplication_x", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "white_flower", "100", "heavy_check_mark", "ballot_box_with_check", "radio_button", "link", "curly_loop", "wavy_dash", "part_alternation_mark", "trident", "black_square", "white_square", "white_check_mark", "black_square_button", "white_square_button", "black_circle", "white_circle", "red_circle", "large_blue_circle", "large_blue_diamond", "large_orange_diamond", "small_blue_diamond", "small_orange_diamond", "small_red_triangle", "small_red_triangle_down", "shipit"
		])
	    .filter('embed', ['$sce', 'NG_EMBED_BASIC_EMOTICONS', 'NG_EMBED_EMOJI_LIST', function($sce, NG_EMBED_BASIC_EMOTICONS, NG_EMBED_EMOJI_LIST) {
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
					sanitizeHtml: true,
					fontSmiley: true,
					emoji     : true,
                    link      : true,
                    linkTarget: '_self'
                };

                extendDeep(options, userOptions);

                if (input === undefined || input === null) {
                    return;
                }
                if (typeof input === "object") {
                    return input;
                }

                /**
                 * All the functions are being called here.
                 */

                // sanitize - needs to be called before other functions are called. If not it would sanitize
                // the emojis and the links and break the whole ng-embed functionality

				if(!angular.isNumber(input)){
					input = input.toString();
				}

				if (options.sanitizeHtml) {
					input = sanitizeHtml(input);
				}

				if (options.fontSmiley) {
                    input = insertfontSmiley(input, NG_EMBED_BASIC_EMOTICONS);
				}

				if (options.emoji) {
                    input = insertEmoji(input, NG_EMBED_EMOJI_LIST);
				}

                if (options.link) {
                    input = urlEmbed(input, options.linkTarget);
                }

                return $sce.trustAsHtml(input);

            };
        }])

	    .constant('NG_DEFAULT_TEMPLATE_URL', 'ng-embed-default-template.html')
	    .run(['$templateCache', 'NG_DEFAULT_TEMPLATE_URL', function($templateCache, NG_DEFAULT_TEMPLATE_URL) {

		    var template = '<div ng-bind-html="neText"></div> <div class="ne-video" ng-if="video.host" class="fade"> <div class="ne-video-preview" ng-hide="nePlayVideo || !options.video.details"> <div class="ne-video-thumb" ng-click="nePlayVideo=!nePlayVideo"> <img ng-src="{{video.thumbnail}}" alt=""/> <i class="fa fa-play-circle-o"></i> </div> <div class="ne-video-detail"> <div class="ne-video-title"> <a ng-href="{{video.url}}">{{video.title}}</a> </div> <div class="ne-video-desc"> {{video.description}} </div> <div class="ne-video-stats"> <span><i class="fa fa-eye"></i> {{video.views}}</span> <span><i class="fa fa-heart"></i> {{video.likes}}</span> </div> </div> </div> <div class="ne-video-player" ng-if="nePlayVideo || !(options.video.details)"> <iframe ng-src="{{video.embedSrc}}" frameBorder="0" width="{{video.width}}" height="{{video.height}}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> <div class="ne-video" ng-if="video.basic"> <div class="ne-video-player"> <div class="player"> <video ng-src="{{video.basic}}" controls></video> </div> </div> </div> <div ng-init="neImageLong=false" ng-class="{false:\'ne-image\', true:\'ne-image ne-image-long\'}[neImageLong]" ng-if="image.url"> <div class="ne-image-wrapper"> <img ng-src="{{image.url}}" ng-click="neImageLong=!neImageLong" alt=""/> </div> </div> <div class="ne-pdf" ng-if="pdf.url"> <div class="ne-pdf-preview" ng-hide="neShowPdf"> <div class="ne-pdf-icon"> <i class="fa fa-file-pdf-o"></i> </div> <div class="ne-pdf-detail" > <div class="ne-pdf-title"> <a href="">{{pdf.url}}</a> </div> <div class="ne-pdf-view"> <button><i class="fa fa-download"></i> <a ng-href="{{pdf.url}}" target="_blank">Download</a></button> <button ng-click="neShowPdf=!neShowPdf"><i class="fa fa-eye"></i> View PDF</button> </div> </div> </div> <div class="ne-pdf-viewer" ng-if="neShowPdf" ng-show="neShowPdf"> <iframe ng-src="{{pdf.url}}" frameBorder="0"></iframe> </div> </div> <div class="ne-audio" ng-if="audio.url"> <audio ng-src="{{audio.url}}" controls></audio> </div> <div ng-if="tweets" ng-repeat="tweet in tweets"> <div ng-bind-html="tweet"></div> </div> <div ng-if="videoServices" class="ne-video" ng-repeat="v in videoServices"> <div class="ne-video-player"> <div class="player"> <div ng-bind-html="v"></div> </div> </div> </div> <div ng-if="audioServices" class="ne-audio" ng-repeat="a in audioServices"> <div ng-bind-html="a"></div> </div> <div ng-if="codeServices" class="ne-embed" ng-repeat="c in codeServices"> <div ng-bind-html="c"></div> </div> <div ng-if="gist" class="ne-gist" ng-repeat="g in gist"> <ne-gist id="{{g}}"></ne-gist> </div>';

		    $templateCache.put(NG_DEFAULT_TEMPLATE_URL, template);
	    }])

        .directive('ngEmbed', ['$filter', '$sce', '$http', '$timeout', 'NG_DEFAULT_TEMPLATE_URL', function ($filter, $sce, $http, $timeout, NG_DEFAULT_TEMPLATE_URL) {

            return {
                restrict   : 'AE',
                scope      : true,
                templateUrl: function (element, attributes) {
                    return (attributes.embedTemplateUrl || NG_DEFAULT_TEMPLATE_URL);
                },
                link       : function (scope, elements, attributes) {
                	var embedFilter = $filter('embed');

                    var userOptions = scope.$eval(attributes.embedOptions);

                    var options = {
	                    watchEmbedData   : false,
						sanitizeHtml     : true,
						fontSmiley       : true,
						emoji            : true,
                        link             : true,
                        linkTarget       : '_self',
                        pdf              : {
                            embed: true
                        },
                        image            : {
                            embed: false
                        },
                        audio            : {
                            embed: true
                        },
                        code             : {
                            highlight  : true,
                            lineNumbers: false
                        },
                        basicVideo       : false,
                        gdevAuth:null,
                        video            : {
                            embed           : false,
                            width           : null,
                            height          : null,
                            ytTheme         : 'dark',
                            details         : false,
                            thumbnailQuality: 'medium'
                        },
                        tweetEmbed       : true,
                        tweetOptions     : {
                            //The maximum width of a rendered Tweet in whole pixels. Must be between 220 and 550 inclusive.
                            maxWidth  : 550,
                            //When set to true or 1 links in a Tweet are not expanded to photo, video, or link previews.
                            hideMedia : false,
                            //When set to true or 1 a collapsed version of the previous Tweet in a conversation thread
                            //will not be displayed when the requested Tweet is in reply to another Tweet.
                            hideThread: false,
                            //Specifies whether the embedded Tweet should be floated left, right, or center in
                            //the page relative to the parent element.Valid values are left, right, center, and none.
                            //Defaults to none, meaning no alignment styles are specified for the Tweet.
                            align     : 'none',
                            //Request returned HTML and a rendered Tweet in the specified.
                            //Supported Languages listed here (https://dev.twitter.com/web/overview/languages)
                            lang      : 'en'
                        },
                        twitchtvEmbed    : true,
                        dailymotionEmbed : true,
                        tedEmbed         : true,
                        dotsubEmbed      : true,
                        liveleakEmbed    : true,
                        soundCloudEmbed  : true,
                        soundCloudOptions: {
                            height      : 160, themeColor: 'f50000',   //Hex Code of the player theme color
                            autoPlay    : false,
                            hideRelated : false,
                            showComments: true,
                            showUser    : true,
                            showReposts : false,
                            visual      : false,         //Show/hide the big preview image
                            download    : false          //Show/Hide download buttons
                        },
                        spotifyEmbed     : true,
                        codepenEmbed     : true,
                        codepenHeight    : 300,
                        jsfiddleEmbed    : true,
                        jsfiddleHeight   : 300,
                        jsbinEmbed       : true,
                        jsbinHeight      : 300,
                        plunkerEmbed     : true,
                        githubgistEmbed  : true,
                        ideoneEmbed      : true,
                        ideoneHeight:300
                    };

                    extendDeep(options, userOptions);

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
									var requestConfig = { headers: { 'Authorization': undefined }}; // clear existing headers if present for this http request
									$http.get('https://www.googleapis.com/youtube/v3/videos?id=' + RegExp.$1 + '&key=' + options.gdevAuth + '&part=snippet,statistics', requestConfig)
										.then(function (r) {
                                            var autoPlay = ((options.video.autoPlay === undefined) || (options.video.autoPlay === true)) ? '?autoplay=1' : '?autoplay=0';
											var ytData = r.data.items[0];

                                            scope.video.host = 'youtube';
                                            scope.video.title = ytData.snippet.title;
                                            scope.video.thumbnail = ytData.snippet.thumbnails.medium.url;
                                            scope.video.description = trunc(ytData.snippet.description, 250, true).replace(/\n/g, ' ').replace(/&#10;/g, ' ');
                                            scope.video.rawDescription = ytData.snippet.description;
                                            scope.video.views = ytData.statistics.viewCount;
                                            scope.video.likes = ytData.statistics.likeCount;
                                            scope.video.uploader = ytData.snippet.channelTitle;
                                            scope.video.uploaderPage = 'https://www.youtube.com/channel/' + ytData.snippet.channelId;
                                            scope.video.uploadDate = ytData.snippet.publishedAt;
                                            scope.video.url = $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=" + ytData.id);
                                            scope.video.embedSrc = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + scope.video.id + autoPlay);
                                            scope.video.width = youtubeDimensions.width;
                                            scope.video.height = youtubeDimensions.height;

                                        });
                                }
                                else {
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
										.then(function (r) {
											var d = r.data;
                                            var autoPlay = ((options.video.autoPlay === undefined) || (options.video.autoPlay === true)) ? '&autoplay=1' : '&autoplay=0';
                                            scope.video.host = 'vimeo';
                                            scope.video.title = d[0].title;
                                            scope.video.rawDescription = (d[0].description).replace(/\n/g, '<br/>').replace(/&#10;/g, '<br/>');
                                            scope.video.description = trunc((d[0].description).replace(/((<|&lt;)br\s*\/*(>|&gt;)\r\n)/g, ' '), 250, true);
                                            scope.video.thumbnail = d[0].thumbnail_medium;
                                            scope.video.views = d[0].stats_number_of_plays;
                                            scope.video.likes = d[0].stats_number_of_likes;
                                            scope.video.uploader = d[0].user_name;
                                            scope.video.uploaderPage = d[0].user_url;
                                            scope.video.uploadDate = d[0].uploadDate;
                                            scope.video.url = d[0].url;
                                            scope.video.embedSrc = $sce.trustAsResourceUrl('//player.vimeo.com/video/' + d[0].id + '?title=0&byline=0&portrait=0' + autoPlay);
                                            scope.video.width = vimeoDimensions.width;
                                            scope.video.height = vimeoDimensions.height;
                                        });
                                }
                                else {
                                    scope.video.width = vimeoDimensions.width;
                                    scope.video.height = vimeoDimensions.height;
                                    scope.video.host = 'vimeo';
                                    scope.video.embedSrc = $sce.trustAsResourceUrl('//player.vimeo.com/video/' + RegExp.$3 + '?title=0&byline=0&portrait=0&autoplay=0');
                                }
                            }

                            return data;
                        },

                        embedBasic: function (data) {
                            var f = /((?:https?):\/\/\S*\.(?:ogv|webm|mp4))/gi;

                            if (data.match(f)) {
                                scope.video.basic = $sce.trustAsResourceUrl(RegExp.$1);
                            }

                            return data;
                        },

                        twitchtvEmbed: function (str, opts) {
                            var twitchRegex = /www.twitch.tv\/[a-zA_Z0-9_]+/gi;
                            var matches = str.match(twitchRegex);
                            if (matches) {
                            	var uniqueMatches = getUniqueArray(matches);
                            var videoDimensions = videoProcess.calcDimensions(opts);
                                angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe ' +
                                        'src="https://player.twitch.tv/?channel=' + match.split('/')[1] +'&!autoplay" ' +
                                        'height="' + videoDimensions.height + '" ' +
                                        'width="' + videoDimensions.width + '" ' +
                                        'autoplay="false" ' +
                                        'frameborder="0" ' +
                                        'scrolling="no" ' +
                                        'allowfullscreen="true">' +
                                        '</iframe>');
                                    scope.videoServices.push(frame);
                                });
                            }
                            return str;
                        },

                        dailymotionEmbed: function (str, opts) {
                            var dmRegex = /dailymotion.com\/video\/[a-zA-Z0-9-_]+/gi;
                            var matches = str.match(dmRegex);
	                        if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
                            var videoDimensions = videoProcess.calcDimensions(opts);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe src="http://www.dailymotion.com/embed/video/' + match.split('/')[2] + '" height="' + videoDimensions.height + '" width="' + videoDimensions.width + '"></iframe>');
                                    scope.videoServices.push(frame);
                                });
                            }
                            return str;
                        },

                        tedEmbed: function (str, opts) {
                            var tedRegex = /ted.com\/talks\/[a-zA-Z0-9_]+/gi;
                            var matches = str.match(tedRegex);
	                        if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
                            var videoDimensions = videoProcess.calcDimensions(opts);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe src="https://embed.ted.com/talks/' + match.split('/')[2] + '.html" ' +
                                    'height="' + videoDimensions.height + '" width="' + videoDimensions.width + '"></iframe>');
                                    scope.videoServices.push(frame);
                                });
                            }
                            return str;
                        },

                        dotsubEmbed: function (str, opts) {
                            var dotsubRegex = /dotsub.com\/view\/[a-zA-Z0-9-]+/gi;
                            var matches = str.match(dotsubRegex);
	                        if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
                            var videoDimensions = videoProcess.calcDimensions(opts);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe src="https://dotsub.com/media/' + match.split('/')[2] + '/embed/" width="' + videoDimensions.width + '" height="' + videoDimensions.height + '"></iframe>');
                                    scope.videoServices.push(frame);
                                });
                            }
                            return str;
                        },

                        liveleakEmbed: function (str, opts) {
                            var liveleakRegex = /liveleak.com\/view\?i=[a-zA-Z0-9_]+/gi;
                            var matches = str.match(liveleakRegex);
	                        if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
                            var videoDimensions = videoProcess.calcDimensions(opts);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe src="http://www.liveleak.com/e/' + match.split('=')[1] + '" height="' + videoDimensions.height + '" width="' + videoDimensions.width + '"></iframe></div>');
                                    scope.videoServices.push(frame);
                                });
                            }
                            return str;
                        }
                    };

                    var audioProcess = {
                        embed: function (str) {
                            var a = /((?:https?):\/\/\S*\.(?:wav|mp3|ogg))/gi;
                            if (str.match(a)) {
                                scope.audio.url = $sce.trustAsResourceUrl(RegExp.$1);
                            }
                            return str;
                        },

                        soundcloudEmbed: function (str, opts) {
                            var scRegex = /soundcloud.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/gi;
                            var matches = str.match(scRegex);
                            if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe height="160" scrolling="no" ' + 'src="https://w.soundcloud.com/player/?url=https://' + match + '&auto_play=' + opts.soundCloudOptions.autoPlay + '&hide_related=' + opts.soundCloudOptions.hideRelated + '&show_comments=' + opts.soundCloudOptions.showComments + '&show_user=' + opts.soundCloudOptions.showUser + '&show_reposts=' + opts.soundCloudOptions.showReposts + '&visual=' + opts.soundCloudOptions.visual + '&download=' + opts.soundCloudOptions.download + '&color=' + opts.soundCloudOptions.themeColor + '&theme_color=' + opts.soundCloudOptions.themeColor + '"></iframe>');
                                    scope.videoServices.push(frame);
                                });
                            }
                            return str;
                        },

                        spotifyEmbed: function (str) {
                            var spotifyRegex = /spotify.com\/track\/[a-zA-Z0-9_]+/gi;
                            var matches = str.match(spotifyRegex);
                            if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe src="https://embed.spotify.com/?uri=spotify:track:' + match.split('/')[2] + '" height="80"></iframe>');
                                    scope.audioServices.push(frame);
                                });
                            }
                            return str;
                        }
                    };

                    var imageProcess = {
                        embed: function (data) {
							var i = /(((?:https?):\/\/\S*\.(?:gif|jpg|jpeg|tiff|png|svg|webp))(\?([\w=&_%\-]*))?)/gi;

                            if (data.match(i)) {
                                scope.image.url = RegExp.$1;

                            }

                            return data;
                        }
                    };

                    var codeProcess = {

	                    /**
	                     * Encodes the characters like <, > and space and replaces them with
	                     * &lt;, &gt; and &gt; respectively.
	                     * @param  {string} code The string that has to be encoded.
	                     * @return {string}      The encoded string
	                     */
	                    encode: function(code) {
			                code = code.replace(/&amp;/gm, '');
			                code = code.replace(/&lt;/g, '<');
			                code = code.replace(/&gt;/g, '>');
			                return code;
		                },

		                /**
		                 * removes whitespace characters
		                 * @param  {string} code The string from which the whitespace has to be removed
		                 * @return {string}
		                 */
		                trimSpace: function(code) {
			                code = code.replace(/^([ \t]*)/g, ''); // leading whitespace
			                code = code.replace(/[ \t]*$/g, ''); // trailing whitespace
			                return code;
		                },

                        getCode: function (text) {
                            return (text + '').replace(/(`+)(\s|[a-z]+)\s*([\s\S]*?[^`])\s*\1(?!`)/gm,
                                function (wholeMatch, group1, group2, group3) {
                                    var code = group3;
                                    code = codeProcess.trimSpace(code);
	                                code = codeProcess.encode(code);

                                    code = code.replace(/:\/\//g, "~P"); // to prevent auto-linking. Not necessary in code
                                                                   // *blocks*, but in code spans. Will be converted
                                                                   // back after the auto-linker runs.

	                                var language = group2.split('\n')[0];

	                                var highlightedCode;
                                    if ( language ) {
		                                highlightedCode = hljs.highlightAuto(code, [language]);
	                                } else {
		                                highlightedCode = hljs.highlightAuto(code);
		                                language        = highlightedCode.language;
                                    }

                                    return '<pre><code class="ne-code hljs ' + language + '">' + highlightedCode.value + '</code></pre>';
                                    /*
	                                var codeBlock = $sce.trustAsHtml('<pre><code class="ne-code hljs ' + language + '">' + highlightedCode.value + '</code></pre>');
	                                scope.codeServices.push(codeBlock);
                                    return '';
                                    */
                                }
                            );
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

                    var tweetProcess = {
                        embed: function (str, opts) {
                            if (!window.twttr) {
                                console.error(new ReferenceError('twttr is not defined. Load http://platform.twitter.com/widgets.js'));
                            }
                            function renderTweet() {
                                $timeout(function () {
                                    twttr.widgets.load();
                                }, 10);
                            }

	                        scope.tweets = [];

                            var tweetRegex = /https:\/\/twitter\.com\/\w+\/\w+\/\d+/gi;
                            var matches = str.match(tweetRegex);
                            if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
									var url = 'https://api.twitter.com/1/statuses/oembed.json?omit_script=true&&url=' + match + '&maxwidth=' + opts.tweetOptions.maxWidth + '&hide_media=' + opts.tweetOptions.hideMedia + '&hide_thread=' + opts.tweetOptions.hideThread + '&align=' + opts.tweetOptions.align + '&lang=' + opts.tweetOptions.lang;
									var request;
									if(  parseInt(angular.version.major) >= 1 && parseInt(angular.version.minor) >= 6 ) {
										request = $http.jsonp($sce.trustAsResourceUrl(url), { callbackParam: 'JSON_CALLBACK' });
									}
									else {
                                    /**
                                     * callback=JSON_CALLBACK is an angular fix to make sure we get the correct mime type of the
                                     * received data.
                                     */
										request = $http.jsonp(url + '&callback=JSON_CALLBACK');
									}

									request.then(function (r) {
										scope.tweets.push(r.data.html);
                                        if (scope.tweets.length == uniqueMatches.length) {
                                            renderTweet();
                                        }
									}).catch(function(err) {
										console.error(err);
                                    });
                                });
                            }
                            return str;
                        }
                    };

                    var codeEmbedProcess = {
                        codepenEmbed: function (str, opts) {
                            var codepenRegex = /http:\/\/codepen.io\/([A-Za-z0-9_]+)\/pen\/([A-Za-z0-9_]+)/gi;
                            var matches = str.match(codepenRegex);
                            if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe scrolling="no" height="' + opts.codepenHeight + '" src="' + match.replace(/\/pen\//, '/embed/') + '/?height=' + opts.codepenHeight + '" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>');
                                    scope.codeServices.push(frame);
                                });
                            }
                            return str;
                        },

                        jsfiddleEmbed: function (str, opts) {
                            var jsfiddleRegex = /jsfiddle.net\/[a-zA-Z0-9_]+\/[a-zA-Z0-9_]+/gi;
                            var matches = str.match(jsfiddleRegex);
                            if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe height="' + opts.jsfiddleHeight + '" src="http://' + match + '/embedded"></iframe>');
                                    scope.codeServices.push(frame);
                                });
                            }
                            return str;
                        },

                        jsbinEmbed: function (str, opts) {
                            var jsbinRegex = /jsbin.com\/[a-zA-Z0-9_]+\/[0-9_]+/gi;
                            var matches = str.match(jsbinRegex);
                            if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame = $sce.trustAsHtml('<iframe height="' + opts.jsbinHeight + '" class="jsbin-embed foo" src="http://' + match + '/embed?html,js,output">Simple Animation Tests</iframe>');
                                    scope.codeServices.push(frame);
                                });
                            }
                            return str;
                        },

                        plunkerEmbed: function (str, opts) {
                            var plnkrRegex = /plnkr.co\/edit\/[a-zA-Z0-9\?=]+/gi;
                            var matches = str.match(plnkrRegex);
                            if (matches) {
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
		                        	var path = match.split('/')[2];
                                    var idMatch = (match.indexOf('?') === -1) ? path : path.split('?')[0];
                                    var frame = $sce.trustAsHtml('<iframe class="ne-plunker" src="http://embed.plnkr.co/' + idMatch + '" height="' + opts.jsbinHeight + '"></iframe>');
                                    scope.codeServices.push(frame);
                                });
                            }
                            return str;
                        },

                        githubgistEmbed: function (str) {
                            var gistRegex = /gist.github.com\/[a-zA-Z0-9_-]+\/([a-zA-Z0-9]+)/g;
                            var matches = str.match(gistRegex);
                            if (matches) {
		                        var gists = [];
		                        angular.forEach(matches, function(match) {
                                    gists.push(match.split('/')[2]);
                                });
		                        scope.gist = getUniqueArray(gists);
                            }

                            return str;
                        },

                        ideoneEmbed:function(str,opts){
                            var ideoneRegex=/ideone.com\/[a-zA-Z0-9]{6}/gi;
                            var matches=str.match(ideoneRegex);
                            if(matches){
		                        var uniqueMatches = getUniqueArray(matches);
		                        angular.forEach(uniqueMatches, function(match) {
                                    var frame=$sce.trustAsHtml('<iframe src="http://ideone.com/embed/'+match.split('/')[1]+'" height="'+opts.ideoneHeight+'"></iframe>');
                                    scope.codeServices.push(frame);
                                });
                            }
                            return str;
                        },
	                    highlightEmbed: function(data, options) {
                        if (!window.hljs) {
			                    console.error(new ReferenceError('hlsj (Highlight JS is not defined.'));
			                    return data;
                        }
                        else {
                            data = codeProcess.getCode(data);

                            /**
                             * Adding line numbers to code
                             */
                            $timeout(function () {
			                    	// wrapped in timeout to allow code elements to be added to DOM
                                if (options.code.lineNumbers) {
				                    	var codeBlocks = elements.find('.ne-code');
				                    	if( codeBlocks.length > 0 ) {
						                    angular.forEach(codeBlocks, function(block) {
							                    var codeElement = angular.element(block)
								                    .addClass('has-numbering');
							                    var content = codeElement.text();
							                    var lineCount = content.split('\n').length;
							                    var lineNbrList = angular.element('<ul/>').addClass('pre-numbering');
							                    for (var i = 1; i <= lineCount; i++) {
								                    var lineNbr = angular.element('<li/>').text(i);
								                    lineNbrList.append(lineNbr);
							                    }

							                    codeElement
                                            .parent()
								                    .append(lineNbrList);
                                    });
                                }
				                    }

			                    }, 20);
		                    }

		                    return data;
                        }
                    };

                    function processEmbed(input){
                    	// clear scope
	                    scope.video = {};
	                    scope.image = {};
	                    scope.pdf = {};
	                    scope.audio = {};
	                    scope.videoServices = [];
	                    scope.audioServices = [];
	                    scope.codeServices = [];
	                    scope.gist = [];

	                    // make sure that input is string
	                    if( !angular.isString(input) || input.length === 0 ) {
		                    input = ' ';
                    }
                      var x = embedFilter(input, options).$$unwrapTrustedValue();

                      if (options.video.embed) {
                          if (!options.gdevAuth) {
                              console.error('Youtube authentication key is required to get data from youtube.');
                          }
                          else {
                              x = videoProcess.embed(x, options);
                          }

                      }

                      x = options.basicVideo ? videoProcess.embedBasic(x) : x;
                      x = options.audio.embed ? audioProcess.embed(x) : x;
                      x = options.image.embed ? imageProcess.embed(x) : x;
                      x = options.pdf.embed ? pdfProcess.embed(x) : x;
                      x = options.tweetEmbed ? tweetProcess.embed(x, options) : x;
                      x = options.twitchtvEmbed ? videoProcess.twitchtvEmbed(x, options) : x;
                      x = options.dailymotionEmbed ? videoProcess.dailymotionEmbed(x, options) : x;
                      x = options.tedEmbed ? videoProcess.tedEmbed(x, options) : x;
                      x = options.dotsubEmbed ? videoProcess.dotsubEmbed(x, options) : x;
                      x = options.liveleakEmbed ? videoProcess.liveleakEmbed(x, options) : x;
                      x = options.soundCloudEmbed ? audioProcess.soundcloudEmbed(x, options) : x;
                      x = options.spotifyEmbed ? audioProcess.spotifyEmbed(x) : x;
                      x = options.code.highlight ? codeEmbedProcess.highlightEmbed(x, options) : x;
                      x = options.codepenEmbed ? codeEmbedProcess.codepenEmbed(x, options) : x;
                      x = options.jsfiddleEmbed ? codeEmbedProcess.jsfiddleEmbed(x, options) : x;
                      x = options.jsbinEmbed ? codeEmbedProcess.jsbinEmbed(x, options) : x;
                      x = options.plunkerEmbed ? codeEmbedProcess.plunkerEmbed(x, options) : x;
                      x = options.githubgistEmbed ? codeEmbedProcess.githubgistEmbed(x, options) : x;
                      x = options.ideoneEmbed ? codeEmbedProcess.ideoneEmbed(x, options) : x;


                      $timeout(function(html){
	                      scope.neText = $sce.trustAsHtml(html);
                      }, 0, true, x);
                    }

                    if( !options.watchEmbedData ) {
	                    var newData = scope.$eval(attributes.embedData);
	                    processEmbed(newData);
                    }
                    else {
	                    scope.$watch(attributes.embedData, processEmbed);
                    }
                }
            };
        }])

        //This directive is a modification of a module developed by Scott Corgan.
        //present at scottcorgan/angular-gist
        .directive('neGist', function () {
            return {
                restrict: 'EA',
                replace : true,
                template: '<div></div>',
                link    : function (scope, element, attrs) {
                    var gistId = attrs.id;

                    var iframe = document.createElement('iframe');
                    iframe.setAttribute('width', '100%');
                    iframe.setAttribute('frameborder', '0');
                    iframe.id = "gist-" + gistId;
                    element[0].appendChild(iframe);

                    var iframeHtml = '<html><head><base target="_parent"><style>table{font-size:12px;}</style>' +
                        '</head><body onload="parent.document.getElementById(\'' + iframe.id + '\').style.height=' +
                        'document.body.scrollHeight + \'px\'" style="margin:10px 0;"><script type="text/javascript">' +
                        '!function(){"use strict";window.retargetLinks=function(){ var gists=' +
                        'document.getElementsByClassName("gist");for(var i=0,links;i<gists.length;i++){' +
                        'links=gists[i].getElementsByTagName("a");for(var j=0;j<links.length;j++){ ' +
                        'links[j].setAttribute("target","_blank");}}}}();</script><script type="text/javascript" ' +
                        'src="https://gist.github.com/' + gistId + '.js" onload="retargetLinks()"></script></body></html>';

                    var doc = iframe.document;
                    if (iframe.contentDocument) {
                        doc = iframe.contentDocument;
                    }
                    else if (iframe.contentWindow) {
                        doc = iframe.contentWindow.document;
                    }

                    doc.open();
                    doc.writeln(iframeHtml);
                    doc.close();
                }
            };
        });

	function getUniqueArray(list) {
		//*
		// fast way using hashmap
		// inspired by http://jszen.com/best-way-to-get-unique-values-of-an-array-in-javascript.7.html
		var n = {},r=[];
		for(var i = 0; i < list.length; i++)
		{
			if (!n[list[i]])
			{
				n[list[i]] = true;
				r.push(list[i]);
			}
		}
		return r;
		//*/
		/*
		// IE9+, a bit slower
		return list.filter(function (x, i, a) {
			return a.indexOf(x) === i;
		});
		//*/
	}

	function trunc(str, n, useWordBoundary) {
		var toLong = str.length > n,
			s_ = toLong ? str.substr(0, n - 1) : str;
		s_ = useWordBoundary && toLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
		return toLong ? s_ + '...' : s_;
	}

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

	/**
	 * FUNCTION insertfontSmiley
	 * @description
	 * Coverts the text into font emoticons
	 *
	 * @param  {string} str
	 * @param  {Array} icons
	 *
	 * @return {string}
	 */

	function insertfontSmiley(str, icons) {

		var a = str.split(' ');
		angular.forEach(icons, function (icon) {
			for (var i = 0; i < a.length; i++) {
				if (a[i] === icon.text) {
					a[i] = '<i class="ne-emoticon" title="' + icon.text + '">' + '&#x' + icon.code + '</i>';
				}
			}
		});
		return a.join(' ');
	}

	/**
	 * FUNCTION insertEmoji
	 *
	 * @description
	 * Converts text into emojis
	 *
	 * @param  {string} str
	 * @param  {Array} emojiList
	 *
	 * @return {string}
	 */

	function insertEmoji(str, emojiList) {

		var emojiRegex = new RegExp(":(" + emojiList.join("|") + "):", "g");

		return str.replace(emojiRegex, function (match, text) {
			return "<i class='emoticon emoticon-" + text + "' title=':" + text + ":'></i>";

		});
	}

	/**
	 * FUNCTION UrlEmbed
	 * @description
	 * Converts normal links written in the text into html anchor tags.
	 *
	 * @param  {string} str
	 * @param  {string} linkTarget
	 *
	 * @return {string}
	 */

	function urlEmbed(str, linkTarget) {

		var urlRegex = /\b(?:(https?|ftp|file):\/\/|www\.)[-A-Z0-9+()&@$#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]/ig;
		var protocolRegex = /^[a-z]+\:\/\//i;

		return str.replace(urlRegex, function (text) {
				var url = text;
				if (!protocolRegex.test(text))
				{
					url = 'http://' + text;
				}

				if (linkTarget == 'cordova'){
					return '<a href="#" onclick="window.open(\''+ url +'\', \'_system\', \'location=yes\')" >' + text + '</a>';
				}else{
					return '<a href="' + url + '" target="' + linkTarget + '">' + text + '</a>';
				}
			}
		);
	}

	/**
	 * FUNCTION sanitizeHtml
	 *
	 * @description
	 * Converts <, >, & to html entities
	 *
	 * @param  {string} str
	 *
	 * @return {string}
	 */
	function sanitizeHtml(str) {
		var map = {'&': '&amp;', '>': '&gt;', '<': '&lt;'};
		return str.replace(/[&<>]/g, function (m) {
			return map[m];
		});
	}
})();

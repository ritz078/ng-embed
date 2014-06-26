/**
 * simpleEmoticons Module
 *
 * Description
 */
angular.module('ngEmoticons', ['ngSanitize'])
    .filter('emoticons', function() {
        var icons = [{
            "text": ":)",
            "class": "smile"
        }, {
            "text": ":D",
            "class": "bigSmile"
        }, {
            "text": ":(",
            "class": "sad"
        }, {
            "text": ":/",
            "class": "upset"

        }, {
            "text": ":P",
            "class": "amuse"
        },  {
            "text": "3:)",
            "class": "devil"
        }, {
            "text": "(^)",
            "class": "thumbsdown"
        }, {
            "text": ";)",
            "class": "wink"
        }, {
            "text": ":o",
            "class": "surprised"
        }, {
            "text": "-_-",
            "class": "maun"
        }, {
            "text": "(y)",
            "class": "thumsup"
        }, {
            "text": ":*",
            "class": "heart"
        }, {
            "text": "&lt;3",
            "class": "heart"
        }, {
            "text": "&lt;/3",
            "class": "brokenheart"
        },{
            "text": "^_^",
            "class": "priviledged"
        }, {
            "text": "8-)",
            "class": "lab"
        }, {
            "text": "8|",
            "class": "lab"
        }, {
            "text": ":S",
            "class": "confused"
        },{
            "text": ":s",
            "class": "confused"
        }];
        return function(input) {
            var a = input.split(" ");
            var data = a;
            angular.forEach(icons, function(icon) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] == icon.text) {
                        data[i] = '<span class="rk rk-' + icon.class + '"></span>';
                    }
                }
            });
            var c = data.join(" ");
            return c;
        };
    });

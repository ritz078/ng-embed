
angular.module('ngEmoticons', ['ngSanitize'])
    .filter('emoticons', function() {
        var icons = [{
            'text': ':)',
            'class': 'smiley',
            'code':'e60a'
        }, {
            'text': ':D',
            'class': 'happy',
            'code':'e608'
        }, {
            'text': ':(',
            'class': 'sad',
            'code':'e60e'
        }, {
            'text': ':/',
            'class': 'wondering',
            'code':'e620'

        }, {
            'text': ':P',
            'class': 'tongue',
            'code':'e60c'
        },  {
            'text': '3:)',
            'class': 'evil',
            'code':'e618'
        }, {
            'text': '(^)',
            'class': 'thumbsup2',
            'code':'e607'
        }, {
            'text': ';)',
            'class': 'wink',
            'code':'e610'
        }, {
            'text': ':o',
            'class': 'shocked',
            'code':'e61a'
        }, {
            'text': '-_-',
            'class': 'neutral',
            'code':'e61e'
        }, {
            'text': '(y)',
            'class': 'thumbs-up',
            'code':'e606'
        }, {
            'text': ':*',
            'class': 'heart',
            'code':'e604'
        }, {
            'text': '&lt;3',
            'class': 'heart',
            'code':'e604'
        }, {
            'text': '&lt;/3',
            'class': 'heart-broken',
            'code':'e605'
        },{
            'text': '^_^',
            'class': 'grin',
            'code':'e612'
        }, {
            'text': '8-)',
            'class': 'cool',
            'code':'e614'
        }, {
            'text': '8|',
            'class': 'cool',
            'code':'e614'
        }, {
            'text': ':S',
            'class': 'confused',
            'code':'e61c'
        },{
            'text': ':s',
            'class': 'confused',
            'code':'e61c'
        }];
        return function(input) {
            if(input){
               var a = input.split(' ');
            var data = a;
            angular.forEach(icons, function(icon) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] === icon.text) {
                        data[i] = '<span class="icon-smiley">'+'&#x'+icon.code+'</span>';
                    }
                }
            });
            var c = data.join(' ');
            return c;
            }
                    };
    });

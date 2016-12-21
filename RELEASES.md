Version 2.#.#
-------------
2016-12-##

* Feature: Added ustream.tv support
* Feature: Added option to toggle html sanitize, closes #39, #53
* Feature: Support for query parameters in image links, closes #55, #64
* Feature: Embed Twitch HTML5 player instead of Flash, closes #54
* Feature: Added optional $scope.$watch to support re-rendering on changes to embed-data, closes #23

* Improvement: Added query parameter support to video, audio and pdf embed

* Bug-fixed: YouTube auth header, closes #40, #67
* Bug-fixed: Fixed HihlightJS support
* Bug-fixed: Errors thrown when missing twitter or HighlightJS libs are written to console.error instead to allow the rest of the services to work  

* Chore: Compatibility with AngularJS 1.6+
* Chore: Updated devDependencies to latest versions, closes #57, #63
* Chore: Added hound-ci + jshint config
* Chore: Fixed pdf exmaple in demo

* Style: Reorganized code to follow AngularJS guidelines, see https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
* Style: Moved most regular expressions to angular constant
* Style: Moved emoticons to angular constants
* Style: Split up video embed code into separate functions for YouTube and Vimeo

Version 2.1.1
-------------
2016-10-05

* Bug-fixed: Fixed other input than text, for instance number that would not display, closes #51
* Bug-fixed: Url regex failed if a url contains $ within the link, closes #50


Version 2.1.0
-------------
2016-10-05

* Feature: Added options to toggle support for inserting emoijs and smilies, closes #47
* Feature: Added 'cordova' option for linkTarget to make filtered urls work for apps Cordova/Ionic Using Angularjs, closes #41
* Feature: Added autoplay configuration option for youtube and vimeo, closes #36

* Chore: Bump dependencies to support minor releases of angular, closes #49

Version 2.0.4
-------------
2016-04-08

* Bug-fixed: Changed link to to https in TED template, closes #35
* Bug-fixed: Sanitize input in embed filter, closes #13, #15, #17

* Chore: Changed angular version in bower.json to 1.x to support newer versions of Angular, closes #30

* Doc: Fixed link to examples, closes #27

Version 2.0.3
-------------
2015-08-31

* Bug-fixed: Turn URLs starting with 'www.' into links not just 'http://'
* Bug-fixed: Fixed class naming conflicts with fontawesome, closes #2
* Bug-fixed: Default template fixed

* Improvement: Font added in demo

* Chore: Demo cleaned

* Doc: Wrong dependency name fixed, closes #3

Version 2.0.2
-------------
2015-03-25

* Chore: Youtube authkey key name changed

Version 2.0.1
-------------
2015-03-25

* Feature: ideone embed support
* Feature: Github Gist embed support
* Feature: Plunkr embed support
* Feature: CodePen embed support
* Feature: JsBin embed support
* Feature: JsFiddle embed support
* Feature: SoundCloud embed support
* Feature: Spotify embed support
* Feature: LiveLeak embed support
* Feature: Dotsub embed support
* Feature: TwitchTV embed support
* Feature: Dailymotion embed support
* Feature: TED embed support
* Feature: Tweet embed support
* Feature: Name changed from ng-emoticons to ng-embed
* Feature: Basic video player support (mp4,ogg,ogv,webm)
* Feature: Line numbers option in code markdown
* Feature: PDF viewer support
* Feature: Basic audio player support
* Feature: Language support for code syntax highlighting

* Bug-fixed: Youtube and basic video work independently
* Bug-fixed: Emoji css fixed
* Bug-fixed: Added scope, prevents all instances of the directive updating with the latest value
* Bug-fixed: Hide video details when details option is set to false

* Chore: Added Youtube authentication error

Version 2.0.0
-------------
2015-03-12

* Feature: YouTube embedding added
* Feature: Vimeo embedding added
* Feature: Image embedding added
* Feature: Code syntax highlighting added
* Feature: Media embedding added
* Feature: PDF viewing added

Version 1.1.3
-------------
2015-03-01

* Style: Lint-error solved

Version 1.1.2
-------------
2015-03-01

* Style: Releases separated from README.md to RELEASES.md
* Style: Separated code into functions and added comments

Version 1.1.1
-------------
2015-02-27

* Feature: Converts links into anchor tags.

* Improvement: Added heart and heart-broken emojis.

* Chore: Added travis configuration

Version 1.1.0
-------------
2015-02-24

* Feature: Emoji support added.

Version 1.0.1
-------------
2015-02-24

* Chore: Improvements in package.json
* Chore: Improvements in bower.json

Version 1.0.0
-------------
2015-02-24

* Improvement: Added smileys' variation.

* Chore: Better directory structure.
* Chore: Updated dependencies.

Version 0.2.2
-------------
2015-01-31

* Improvement: Only process filter if there is any data

Version 0.2.1
-------------
2014-12-10

* Chore: Renamed ng-emoticon.js to ng-emoticons.js

Version 0.2.0
-------------
2014-12-10

* Improvement: Using font instead of images.

Version 0.1.0
-------------
2014-10-21

* ngEmoticons module created
* Feature: Emoticons filter replacing text emoticons with images
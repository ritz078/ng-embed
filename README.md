[![GitHub version](https://badge.fury.io/gh/ritz078%2Fng-embed.svg)](https://badge.fury.io/gh/ritz078%2Fng-embed)
[![NPM version](https://badge.fury.io/js/ng-embed.svg)](https://npmjs.org/package/ng-embed)
[![Bower version](https://badge.fury.io/bo/ng-embed.svg)](http://bower.io/search/?q=ng-embed)
[![Dependency Status](https://david-dm.org/ritz078/ng-embed/status.svg?theme=shields.io)](https://david-dm.org/ritz078/ng-embed)
[![devDependency Status](https://david-dm.org/ritz078/ng-embed/dev-status.svg?theme=shields.io)](https://david-dm.org/ritz078/ng-embed#info=devDependencies)

[![Chat](http://img.shields.io/badge/gitter.im-ritz078/ngEmbed-blue.svg)](https://gitter.im/ritz078/ng-embed)
[![Issues](http://img.shields.io/github/issues/ritz078/ng-embed.svg)](https://github.com/ritz078/ng-embed/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


# ngEmbed

An AngularJS filter/directive for  converting text into emoticons, embedding videos (youtube/vimeo/mp4,ogg), audio, pdf, highlighting code syntax and embedding almost every service in an ordinary text string .

The demo examples are given [here](http://riteshkr.com/ng-embed)

**PS : The jquery version of this module is [embed-js](http://github.com/ritz078/embed-js).**


## Contents

* [Features](#features)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [CDN](#cdn)
* [Getting Started](#getting-started)
* [Filter Usage](#filter-usage)
* [Directive Usage](#directive-usage)
	- [Options](#options)
* [Default Template](#default-template)
* [Template Variables](#template-variables)
* [Releases](#releases)
* [Contributing](#contributing)

## Features

* Converts emoticon text codes into emoticons :smile: , :heart:
* Finds links in text input and turns them into html links.
* Youtube and Vimeo video embedding with video details fetched from the api.
* HTML5 player supported media embedding (mp3,mp4,ogg)
* PDF viewing with preview and then the actual pdf in a frame.
* Inline Code Syntax highlighting (uses highlight.js)
* Twitter tweet embedding supported
* CodePen, jsBin, jsFiddle, Ideone, plunker and Github gist embed supported
* Soundcloud and Spotify support
* Twitch TV, dotSub, Dailymotion, TED, LiveLeak and UStream support.


## Dependencies

+ [AngularJs](https://angularjs.org/) 1.2 or above
+ [angular-sanitize](https://angularjs.org/) 1.2 or above
+ [highlight.js](https://highlightjs.org/) (Optional if code highlighting required)
+ [Twitter widget js](https://platform.twitter.com/widgets.js) (if twitter embedding required)

## Installation

Install through [bower](http://bower.io/search/?q=ng-embed)
```html
bower install --save ng-embed
```
Install through [npm](https://www.npmjs.org/package/ng-embed)
```html
npm install --save ng-embed
```

## CDN

* [cdnjs](https://cdnjs.com/libraries/ng-embed)

## Getting Started

Load [ng-embed.min.css] stylesheet file
```html
 <link rel="stylesheet" href="path/to/ng-embed.min.css"/>
```

Then load [angular.min.js] and [angular-sanitize.min.js] dependencies before loading [ng-embed.min.js]
```html
<script src="path/to/angular.min.js"></script>
<script src="path/to/angular-sanitize.min.js"></script>

<!--==== Optional =====-->
<script src="path/to/highlight.min.js"></script>
<script src="https://platform.twitter.com/widgets.js"></script>
<!--===================-->

<script src="path/to/ng-embed.min.js"></script>
```

Load 'ngEmbed' as a dependency
```javascript
angular.module('yourAppname', ['ngEmbed'])
```

## Filter Use

You can use the filter for basic use. Its features are limited to converting text into [emojis](http://www.emoji-cheat-sheet.com/), font smileys and HTML Links.

```html
<div ng-bind-html="variable | embed"></div>
```

or with custom options

```html
<div ng-bind-html="variable | embed:customOptions"></div>

<div ng-bind-html="variable | embed:{sanitizeHtml:false,linkTarget:'_blank'}"></div>
```

**Options**

Defaults:

```javascript
var embed = {
	fontSmiley  :true,    // toggle converting ascii smileys into font smileys
	sanitizeHtml: true,   // toggle converting html code into text
	emoji       :true,    // toggle converting emojis short names into images
	link        :true,    // toggle converting urls into anchor tags
    linkTarget  :'_self'  //_blank|_self|_parent|_top|framename|cordova
 }
```

## Directive Usage

The directive supports many features in additions to the features supported by the filter and is fully customizable.

**Directive**
```html
<ng-embed 
 embed-data="text"
 embed-template-url="template.html"
 embed-options="options"
 ></ng-embed>
```

Attribute|Description
---------|-----------
**embed-data**|The scope variable that contains the text string to be processed
**embed-options**|The scope variable that contains the options object (mandatory)
**embed-template-url**|User defined template for the processed text

### Options

```javascript
angular.module('yourAppName',['ngEmbed'])

.controller('yourControllerName',['$scope',function($scope){

// Default options
	$scope.options = {
	  watchEmbedData   : false,     // watch embed data and render on change 
	  
	  sanitizeHtml     : true,      // convert html to text
	  
	  fontSmiley       : true,      // convert ascii smileys into font smileys
	  emoji            : true,      // convert emojis short names into images
	  
	  link             : true,      // convert links into anchor tags
	  linkTarget       : '_self',   //_blank|_self|_parent|_top|framename
	  
	  pdf              : {
		embed: true                 // show pdf viewer.
	  },
	  
	  image            : {
		embed: false                // toggle embedding image after link, supports gif|jpg|jpeg|tiff|png|svg|webp.
	  },
	  
	  audio            : {
		embed: true                 // toggle embedding audio player, supports wav|mp3|ogg
	  },
	  
	  basicVideo       : false,     // embed video player, supports ogv|webm|mp4
	  gdevAuth         :'xxxxxxxx', // Google developer auth key for YouTube data api
	  video            : {
		  embed           : false,    // embed YouTube/Vimeo videos
		  width           : null,     // width of embedded player
		  height          : null,     // height of embedded player
		  ytTheme         : 'dark',   // YouTube player theme (light/dark)
		  details         : false,    // display video details (like title, description etc.)
		  thumbnailQuality: 'medium', // quality of the thumbnail low|medium|high
		  autoPlay        : true     // autoplay embedded videos
	  },
	  twitchtvEmbed    : true,
	  dailymotionEmbed : true,
	  tedEmbed         : true,
	  dotsubEmbed      : true,
	  liveleakEmbed    : true,
	  ustreamEmbed    : true,
	  
	  soundCloudEmbed  : true,
	  soundCloudOptions: {
		  height      : 160,
		  themeColor: 'f50000',
		  autoPlay    : false,
		  hideRelated : false,
		  showComments: true,
		  showUser    : true,
		  showReposts : false,
		  visual      : false,         // Show/hide the big preview image
		  download    : false          // Show/Hide download buttons
	  },
	  spotifyEmbed     : true,
	  
	  tweetEmbed       : true,        // toggle embedding tweets
	  tweetOptions     : {
			// The maximum width of a rendered Tweet in whole pixels. Must be between 220 and 550 inclusive.
			maxWidth  : 550,
			// Toggle expanding links in Tweets to photo, video, or link previews.
			hideMedia : false,
			// When set to true or 1 a collapsed version of the previous Tweet in a conversation thread
			// will not be displayed when the requested Tweet is in reply to another Tweet.
			hideThread: false,
			// Specifies whether the embedded Tweet should be floated left, right, or center in
			// the page relative to the parent element.Valid values are left, right, center, and none.
			// Defaults to none, meaning no alignment styles are specified for the Tweet.
			align     : 'none',
			// Request returned HTML and a rendered Tweet in the specified.
			// Supported Languages listed here (https://dev.twitter.com/web/overview/languages)
			lang      : 'en'
		},
	  
	  code             : {
		highlight  : true,        // highlight code written in 100+ languages supported by highlight
								  // requires highlight.js (https://highlightjs.org/) as dependency.
		lineNumbers: false        // display line numbers
	  },
	  codepenEmbed     : true,
	  codepenHeight    : 300,
	  jsfiddleEmbed    : true,
	  jsfiddleHeight   : 300,
	  jsbinEmbed       : true,
	  jsbinHeight      : 300,
	  plunkerEmbed     : true,
	  githubgistEmbed  : true,
	  ideoneEmbed      : true,
	  ideoneHeight     : 300
	};
	
  }]);
```

## Default Template
```html
<!--====== Main text with emoticons and link ============-->

<div ng-bind-html="neText"></div>

<!--==========Video Embedding code (Youtube and vimeo)============-->

<div class="ne-video" ng-if="video.host" class="fade">
<div class="ne-video-preview" ng-hide="nePlayVideo">
  <div class="ne-video-thumb" ng-click="nePlayVideo=!nePlayVideo">
    <img ng-src="{{video.thumbnail}}" alt=""/>
    <i class="fa fa-play-circle-o"></i>
  </div>
<div class="ne-video-detail">
<div class="ne-video-title">
  <a ng-href="{{video.url}}">{{video.title}}</a>
</div>
<div class="ne-video-desc">
  {{video.description}}
</div>
<div class="ne-video-stats">
  <span><i class="fa fa-eye"></i> {{video.views}}</span>
  <span><i class="fa fa-heart"></i> {{video.likes}}</span>
</div>
</div>
</div>
<div class="ne-video-player" ng-if="nePlayVideo">
  <iframe ng-src="{{video.embedSrc}}" frameBorder="0" width="{{video.width}}" height="{{video.height}}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>

<!--=====video player for mp4 and other html5 player supported videos==-->

<div class="ne-video" ng-if="video.basic">
<div class="ne-video-player">
  <div class="player">
    <video ng-src="{{video.basic}}" controls></video>
  </div>
</div>
</div>

<!--====== image preview code (gif|jpg|jpeg|tiff|png|svg|webp) =======-->

<div ng-init="neImageLong=false" ng-class="{false:'ne-image', true:'ne-image ne-image-long'}[neImageLong]"
ng-if="image.url">
<div class="ne-image-wrapper">
  <img ng-src="{{image.url}}" ng-click="neImageLong=!neImageLong" alt=""/>
</div>
</div>
<div class="ne-pdf" ng-if="pdf.url">
<div class="ne-pdf-preview" ng-hide="neShowPdf">
  <div class="ne-pdf-icon">
    <i class="fa fa-file-pdf-o"></i>
  </div>
  <div class="ne-pdf-detail" >
  <div class="ne-pdf-title">
    <a href="">{{pdf.url}}</a>
  </div>
  <div class="ne-pdf-view">
    <button><i class="fa fa-download"></i> <a ng-href="{{pdf.url}}" target="_blank">Download</a></button>
    <button ng-click="neShowPdf=!neShowPdf"><i class="fa fa-eye"></i> View PDF</button>
  </div>
</div>
</div>

<!--====== pdf viewer =========-->

<div class="ne-pdf-viewer" ng-if="neShowPdf" ng-show="neShowPdf">
  <iframe ng-src="{{pdf.url}}" frameBorder="0"></iframe>
</div>
</div>

<!--===== audio player ===========-->

<div class="ne-audio" ng-if="audio.url">
<audio ng-src="{{audio.url}}" controls></audio>
</div>

<div ng-if="tweets" ng-repeat="tweet in tweets">
<div ng-bind-html="tweet"></div>
</div>
<div ng-if="videoServices" class="ne-video" ng-repeat="v in videoServices">
<div class="ne-video-player">
  <div class="player">
    <div ng-bind-html="v"></div>
  </div>
</div>
</div>
<div ng-if="audioServices" class="ne-audio" ng-repeat="a in audioServices">
<div ng-bind-html="a"></div>
</div>
<div ng-if="codeServices" class="ne-embed" ng-repeat="c in codeServices">
<div ng-bind-html="c"></div>
</div>
<div ng-if="gist" class="ne-gist" ng-repeat="g in gist">
<ne-gist id="{{g}}"></ne-gist>
</div>
```

  Change the styling of the default template by styling the classes or provide a custom template. The default template is provided as an example.

  There are certain variables that are available for the template. Its structure is given below.

### Template Variables

These variable can be used while you are creating your custom template.

  ```javascript
var video={
	  host            :String,   // youtube/vimeo
	  title           :String,   // Title of the video
	  thumbnail       :String,   // Url of the video thumbnail
	  description     :String,   // Description of the video truncating after 250 characters replacing linebreak (especially for vimeo)
	  rawDescription  :String,   // Description of the video as sent by the server
	  views           :Number,   // Number of video views
	  likes           :Number,   // No. of likes
	  uploader        :String    // username of video uploader
	  uploaderPage    :String    // url of uploader's page
	  uploadDate      :Date,     // Date of video upload
	  url             :String,   // video url
	  embedSrc        :String,   // video embed url
	  width           :Number,
	  height          :Number    // dimensions of the embedded video
}

var image 	={url:String}

var audio 	={url:String}

var pdf		={url:String}

var codeServices    :Array        // array of embed code of links of jsbin, jsfiddle, ideone and codepen

var audioServices   :Array        //array of embed code of spotify and soundcloud

var videoServices   :Array        // Array of embed code of dailymotion, ted, liveleak, dotsub and twitch tv

var gist            :Array        // Array of all gist ids.
```

## Examples

The examples are given [here](http://riteshkr.com/ng-embed)

## Releases

Older releases are listed in [RELEASES.md](RELEASES.md)

## Contributing

* If you are interested in contributing to this project, you are most welcome.
* Start by filing an [issue](https://github.com/ritz078/ngEmbed/issues) concerning whatever you’d like to see changed.
* In case of larger changes, get the issue allotted
* In case of bugfixes or very minor additions, feel free to file a pull request on the master # branch.
* Please run the default grunt-task before filing any pull requests.

## License

ngEmbed &copy; 2014-2017+ Ritesh Kumar. <br>
Released under the [MIT] License.<br>
Authored and maintained by [Ritesh Kumar](https://github.com/ritz078) with help from [contributors](https://github.com/ritz078/ng-embed/contributors).
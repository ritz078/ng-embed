![Imgur](http://i.imgur.com/VZTXbW6.jpg)

An AngularJS filter for  converting text into emoticons, embedding videos (youtube/vimeo/mp4,ogg), audio, pdf, and highlighting code syntax in an an ordinary rendered text string. .

Contents
-------
* [Features](#features)
* [Dependencies](#dependencies)
* [Getting Started](#getting-started)
* [Basic Usage](#basic-usage)
* [Advanced Usage](#advanced-usage)

Features
--------

* Converts emoticon text codes into emoticons.
* Finds links in text input and turns them into html links.
* Youtube and Vimeo video embedding
* web supported media embedding (mp3,mp4,ogg)
* PDF viewing
* Code highlighting (uses highlight.js)
* URL Links

Dependencies
-----------
+ AngularJs 1.2 or above
+ angular-sanitize 1.2 or above
+ highlight.js (Optional if code highlighting required)


Getting Started
---------------

Install through bower
```html
bower install --save ng-emoticons
```
Install through npm
```html
npm install --save ng-emoticons
```

load css files
```html
 <link rel="stylesheet" href="path/to/ng-emoticons.min.css"/>
```

 Then load the following files
```html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="path/to/ng-emoticons.js"></script>
```

Load 'Emoticons' as a dependency
```javascript
angular.module('yourAppname', ['ngEmoticons'])
```

Basic Usage
===========

You can use the filter for basic use. Its features are limited to converting text into Emojis, Font Smileys and HTML Links.

HTML:

```html
<div ng-bind-html="text | emoticons"></div>
```

**Options**

```javascript

 emoticons:{
    link        :true,                      //for coverting urls into anchor tags
    linkTarget  :'_self'                    //_blank|_self|_parent|_top|framename
    }

```

**Usage Example**

```html
<div ng-bind-html="variable | emoticons:{linkTarget:'_blank'}"></div>
```

Advanced Usage
==============

There is a directive that supports many features in additions to the features supported by the filter

**Directive**

```html
<ng-emoticons emoticons-data="text" emoticons-template-url="template.html" emoticons-options="options"/>
```

**Details about the Attributes**

|Attribute|Description|
|----------|-------------|
|emoticons-data|The scope variable that contains the text string to be processed|
|emoticons-options|The scope variable that contains the options object (mandatory)|
|emoticons-template|User defined template for the processed text|

**Options**

```javascript

angular.module('yourAppName',['ngEmoticons'])

.controller('yourControllerName',['$scope',function($scope){

    $scope.options = {
        link      : true,                   //convert links into anchor tags
        linkTarget  :'_self'                //_blank|_self|_parent|_top|framename
        pdf       : {
          embed: true                       //to show pdf viewer.
        },
        image     : {
          embed: false                      //to allow showing image after the text gif|jpg|jpeg|tiff|png|svg|webp.
        },
        audio     : {
          embed: true                       //to allow embedding audio player if link to
                                            //an mp3/wav link if present.
        },
        code      : {
          highlight  : true,               //to allow code highlighting of code written in markdown
                                            //requires highligh.js (https://highlightjs.org/) as dependency.
          lineNumbers: false               //to show line numbers
        },
        basicVideo: false,                 //to allow embedding of mp4/ogg format videos
        video     : {
          embed           : false,         //to allow youtube/vimeo video embedding
          width           : null,          //width of embedded player
          height          : null,          //height of embedded player
          ytTheme         : 'dark',        //youtube player theme (light/dark)
          details         : false,         //to show video details (like title, description etc.)
          ytAuthKey       : null           //youtube auth key required in case details is set to true.
      }
    };
  }]);

```

**Default Template**

```html
<!--====== Main text with emoticons and link ============-->

<div ng-bind-html="neText" ne-hljs></div>

<!-- Video Embedding code (Youtube and vimeo)-->

<div class="ne-video" ng-if="video.host" class="fade">
  <div class="ne-video-preview" ng-hide="nePlayVideo">
    <div class="ne-video-thumb" ng-click="nePlayVideo=!nePlayVideo">
      <img ng-src="" alt=""/>
      <i class="fa fa-play-circle-o"></i>
    </div>
    <div class="ne-video-detail">
      <div class="ne-video-title">
        <a ng-href=""></a>
      </div>
      <div class="ne-video-desc">
        
      </div>
      <div class="ne-video-stats">
        <span><i class="fa fa-eye"></i> </span>
        <span><i class="fa fa-heart"></i> </span>
      </div>
    </div>
  </div>
  <div class="ne-video-player" ng-if="nePlayVideo">
    <iframe ng-src="" frameBorder="0" width="" height="" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
</div>

<!---video player for mp4 and other html5 player supported videos-->

<div class="ne-video" ng-if="video.basic">
  <div class="ne-video-player">
    <div class="player">
      <video ng-src="" controls></video>
    </div>
  </div>
</div>

<!-- image preview code (gif|jpg|jpeg|tiff|png|svg|webp) -->

<div ng-init="neImageLong=false" ng-class="{false:'ne-image', true:'ne-image ne-image-long'}[neImageLong]"
     ng-if="image.url">
  <div class="ne-image-wrapper">
    <img ng-src="" ng-click="neImageLong=!neImageLong" alt=""/>
  </div>
</div>
<div class="ne-pdf" ng-if="pdf.url">
  <div class="ne-pdf-preview" ng-hide="neShowPdf">
    <div class="ne-pdf-icon">
      <i class="fa fa-file-pdf-o"></i>
    </div>
    <div class="ne-pdf-detail" >
      <div class="ne-pdf-title">
        <a href=""></a>
      </div>
      <div class="ne-pdf-view">
        <button><i class="fa fa-download"></i> <a ng-href="" target="_blank">Download</a></button>
        <button ng-click="neShowPdf=!neShowPdf"><i class="fa fa-eye"></i> View PDF</button>
      </div>
    </div>
  </div>

<!--====== pdf viewer =========-->

  <div class="ne-pdf-viewer" ng-if="neShowPdf" ng-show="neShowPdf">
    <iframe ng-src="" frameBorder="0"></iframe>
  </div>
</div>

<!--===== audio player ===========-->

<div class="ne-audio" ng-if="audio.url">
  <audio ng-src="" controls></audio>
</div>
```

You can make your custom template and use it and even change the styling of the default template by changing the classes. I am giving you the default template so that you are not confused while making your own template and properly know the class names if you want to change the styling.
There are certain video details variable that are available for the template. Its structure is given below.

**Variables accessible in the template**

```javascript
var video={
      host:String,                      // youtube/vimeo
      title:String,                     // Title of the video
      thumbnail:String,                 // Url of the video thumbnail
      description:String,               // Description of the video truncating after 250 characters replacing linebreak (especially for vimeo)
      rawDescription:String,            // Description of the video as sent by the server
      views:Number,                     // Number of video views
      likes:Number,                     // No. of likes
      uploader:String                   // username of video uploader
      uploaderPage:String               // url of uploader's page
      uploadDate:Date,                  // Date of video upload
      url:String,                       // video url
      embedSrc:String,                  // video embed url
      width:Number,
      height:Number                     // dimensions of the embedded video
    }

    var image={url:String}

    var audio={url:String}

    var pdf={url=String}

```


Version 2.0.0
-------------

* Video embedding added
* code syntax highlighting added
* media embedding added
* pdf viewing added


Version 1.1.0
-------------

* Emoji support added.
* Converts links into anchor tags.

Older releases are listed [here](RELEASES.md)

Contributing
------------

* If you are Interested in contributing to this project, you are most welcome.
* If it is a bug-fix/improvement, first report it at [issues](https://github.com/ritz078/ngEmoticons/issues)
* Discuss with us in detail about your issue/improvement
* Get the issue allotted.
* If you are contributing a bug-fix or a very minor addition, feel free to do a pull request on the master # branch.
* If you are unsure about the bug/improvement, create an issue to discuss.
* Report bugs @ [issues](https://github.com/ritz078/ngEmoticons/issues)


License
-------

The MIT License (MIT)

Copyright (c) 2014 Ritesh Kumar

Permission is hereby granted, free of charge, to any person obtaining a
copy
of this software and associated documentation files (the "Software"), to
deal
in the Software without restriction, including without limitation the
rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE
SOFTWARE.



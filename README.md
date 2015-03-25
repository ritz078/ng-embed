ngEmbed
=======

An AngularJS filter/directive for  converting text into emoticons, embedding videos (youtube/vimeo/mp4,ogg), audio, pdf, and highlighting code syntax in an ordinary text string. .

[![Join the chat at https://gitter.im/ritz078/ngEmbed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ritz078/ngEmbed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Documentation and examples
--------------------------

* [Full Documentation](http://ritz078.github.io/ngEmbed/#/documentation)
* [Examples](http://ritz078.github.io/ngEmbed/#/examples)

Features
--------

* Converts emoticon text codes into emoticons :smile: , :heart:
* Finds links in text input and turns them into html links.
* Youtube and Vimeo video embedding with video details fetched from the api.
* HTML5 player supported media embedding (mp3,mp4,ogg)
* PDF viewing with preview and then the actual pdf in a frame.
* Inline Code Syntax highlighting (uses highlight.js)
* Twitter tweet embedding supported
* Codepen, jsbin, jsfiddle, ideone, plunker and github gist embed supported
* soundcloud and spotify support
* Twitch tv, dotSub, dailymotion, TED and liveLeak support.


![screen](demo/ngEmbed.jpg)

Dependencies
------------
+ AngularJs 1.2 or above
+ angular-sanitize 1.2 or above
+ [highlight.js](https://highlightjs.org/) (Optional if code highlighting required)
+ [Twiiter widget js](http://platform.twitter.com/widgets.js) (if twitter embedding required)


Getting Started
---------------

Install through bower
```html
bower install --save ng-embed
```
Install through npm
```html
npm install --save ng-embed
```

load css files
```html
 <link rel="stylesheet" href="path/to/ng-embed.min.css"/>
```

 Then load the following files
```html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<!--==== Optional =====-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js"></script>
<script src="http://platform.twitter.com/widgets.js"></script>
<!--===================-->
<script src="path/to/ng-embed.js"></script>
```

Load 'Emoticons' as a dependency
```javascript
angular.module('yourAppname', ['ngEmbed'])
```


Older releases are listed [here](RELEASES.md)

Contributing
------------

* If you are Interested in contributing to this project, you are most welcome.
* If it is a bug-fix/improvement, first report it at [issues](https://github.com/ritz078/ngEmbed/issues)
* Discuss with us in detail about your issue/improvement
* Get the issue allotted.
* If you are contributing a bug-fix or a very minor addition, feel free to do a pull request on the master # branch.
* If you are unsure about the bug/improvement, create an issue to discuss.
* Report bugs @ [issues](https://github.com/ritz078/ngEmbed/issues)


License
-------

The MIT License (MIT)

Copyright (c) 2014 Ritesh Kumar




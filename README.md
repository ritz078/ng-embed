![Imgur](http://i.imgur.com/T8i1GM0.jpg?1)

Description
------------

This is an AngularJS filter for converting text into emoticons. Currently this filter supports two types of smileys :

1.  Font Smileys : These smileys are fonts .

      *   Fully Customizable (colour and other styles)
      *   Since these are fonts ,work flawlessly in any resolution.
      *   Chat codes like :) :P :( 3:) :D :/ ;)  (y) (^) <3 </3 etc. are supported.

2.  Emojis : If you are going to use it you already know about it.

      * Around 850 emojis
      * Retina Display Support
      * Default emoji syntax i.e text surrounded by ':' . Example - :smile:


Screenshot
----------
![screenshot](https://raw.github.com/ritz078/ngEmoticons/emoji/demo/screen.png)

Dependencies
-----------
+ AngularJs 1.2 or above
+ ng-sanitize 1.2 or above


Getting Started
---------------

Install through bower
```html
bower install ng-emoticons --save
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
angular.module('ngEmoticonApp', ['ngSanitize','ngEmoticons'])
```

HTML:
```html
<div ng-bind-html="text | linky:'_blank' | emoticons"></div>
```

Version 1.1.0
-------------

* Emoji support added

Version 1.0.0
-------------

* Better directory structure.
* Updated dependencies.
* Added smileys' variation.

Version 0.2.0
-------------

Using font instead of images.

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



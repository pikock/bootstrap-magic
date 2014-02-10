# grunt-html-validation [![Build Status](https://travis-ci.org/praveenvijayan/grunt-html-validation.png?branch=master)](https://travis-ci.org/praveenvijayan/grunt-html-validation)

[![NPM](https://nodei.co/npm/grunt-html-validation.png?downloads=true)](https://nodei.co/npm/grunt-html-validation/)

> W3C html validaton grunt plugin. Validate all files in a directory automatically. 

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-validation --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-validation');
```

And add to your task list using `validation`:

```js
grunt.registerTask("default", ["validation"]);
```

## The "validation" task

### Overview
In your project's Gruntfile, add a section named `validation` to the data object passed into `grunt.initConfig()`.

```js
validation: {
		options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				remotePath: "http://decodize.com/",
				remoteFiles: ["html/moving-from-wordpress-to-octopress/",
											"css/site-preloading-methods/"], //or
				remoteFiles: "validation-files.json", // JSON file contains array of page paths. 
				relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."] //ignores these errors
		},
		files: {
				src: ['<%= yeoman.app %>/*.html', 
						'!<%= yeoman.app %>/index.html', 
						'!<%= yeoman.app %>/modules.html',
						'!<%= yeoman.app %>/404.html']
		}
}
```

### Options

#### options.reset
Type: `Boolean` <br/>
Default value: `'false'`

Resets all the validated  files status. When want to revalidate all the validated files -
`eg: sudo grunt validate --reset=true`

#### options.proxy
Type: `String` <br/>
Default value: `null`

Setup your proxy when you are behind a corporate proxy and encounters `ETIMEDOUT`.

```js
proxy: 'http://proxy:8080'
```

#### options.path
Type: `String` <br/>
Default value: `'validation-status.json'`

Default file for storing validation information.

#### options.reportpath
Type: `String` <br/>
Default value: `validation-report.json`

Consolidated report in JSON format, if reportpath is ``false`` it will not generated.

#### options.stoponerror
Type: `Boolean` <br/>
Default value: `false`

When hit by a validation error, html-validator continue validating next file by default and this process continues until all files in the list completes validation. If 'stoponerror' set to  `true`, validator will stop validating next file.

#### options.maxTry
Type: `Number` <br/>
Default value: `3`

Number of retries when network error occuers. Default case, after 3 reties validator will move to next file.

#### options.remotePath
Type: `String` <br/>
Default value: ``

Remote base url path. eg: "http://decodize.com/". 


#### options.remoteFiles
Type: `Array` <br/>
Default value: ``

Array of page paths to be validated. When remote files are not present validator will append file names from local folder. 'remotePath' is mandatory when this option is specified. 

eg: remoteFiles: ["html/moving-from-wordpress-to-octopress/",
											"css/site-preloading-methods/"]

you can also provide a file contains array of pages.

remoteFiles: "validation-files.json"

```js
["html/getting-started-with-yeoman-1-dot-0-beta-on-windows",
"html/slidemote-universal-remote-control-for-html5-presentations/",
"html/simple-responsive-image-technique/"]
```

#### options.relaxerror
Type: `Array` <br/>
Default value: ``

Helps to skip certain w3c errors messages from validation. Give exact error message or a regular expression in an array & validator will ignore those relaxed errors from validation. 

```js
relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta.","document type does not allow element \"[A-Z]+\" here"]
```

#### options.doctype
Type: `String` <br/>
Default value: `false`

Set `false` for autodetect or chose one of this options:

- ``HTML5``
- ``XHTML 1.0 Strict``
- ``XHTML 1.0 Transitional``
- ``XHTML 1.0 Frameset``
- ``HTML 4.01 Strict``
- ``HTML 4.01 Transitional``
- ``HTML 4.01 Frameset``
- ``HTML 4.01 + RDFa 1.1``
- ``HTML 3.2``
- ``HTML 2.0``
- ``ISO/IEC 15445:2000 ("ISO HTML")``
- ``XHTML 1.1``
- ``XHTML + RDFa``
- ``XHTML Basic 1.0``
- ``XHTML Basic 1.1``
- ``XHTML Mobile Profile 1.2``
- ``XHTML-Print 1.0``
- ``XHTML 1.1 plus MathML 2.0``
- ``XHTML 1.1 plus MathML 2.0 plus SVG 1.1``
- ``MathML 2.0``
- ``SVG 1.0``
- ``SVG 1.1``
- ``SVG 1.1 Tiny``
- ``SVG 1.1 Basic``
- ``SMIL 1.0``
- ``SMIL 2.0``


#### options.charset
Type: `String` <br/>
Default value: `false`

Set `false` for autodetect or chose one of this options:

- ``utf-8``
- ``utf-16``
- ``iso-8859-1``
- ``iso-8859-2``
- ``iso-8859-3``
- ``iso-8859-4``
- ``iso-8859-5``
- ``iso-8859-6-i``
- ``iso-8859-7``
- ``iso-8859-8``
- ``iso-8859-8-i``
- ``iso-8859-9``
- ``iso-8859-10``
- ``iso-8859-11``
- ``iso-8859-13``
- ``iso-8859-14``
- ``iso-8859-15``
- ``iso-8859-16``
- ``us-ascii``
- ``euc-jp``
- ``shift_jis``
- ``iso-2022-jp``
- ``euc-kr``
- ``gb2312``
- ``gb18030``
- ``big5``
- ``big5-HKSCS``
- ``tis-620``
- ``koi8-r``
- ``koi8-u``
- ``iso-ir-111``
- ``macintosh``
- ``windows-1250``
- ``windows-1251``
- ``windows-1252``
- ``windows-1253``
- ``windows-1254``
- ``windows-1255``
- ``windows-1256``
- ``windows-1257``

#### options.failHard
Type: `boolean` <br/>
Default value: `false`

If true, the task will fail at the end of its run if there were any validation errors that were not ignored via `options.relaxerror`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

Report issues [here](https://github.com/praveenvijayan/grunt-html-validation/issues)

## Release History
 * 2013-12-26   v0.1.13  Fixed running multiple tasks fail due to validation failure.
 * 2013-12-17   v0.1.11  Option to set proxy, w3cjs updated to 0.1.22, added fail hard and some bug fixes
 * 2013-11-22   v0.1.9   Fix some bugs
 * 2013-11-22   v0.1.8   Added options for specify doctype and charset
 * 2013-11-22   v0.1.7   Added support for RegExp in relaxed validation
 * 2013-08-31   v0.1.6   Added relaxed validation, w3cjs updated from 0.1.9 to 0.1.10.  
 * 2013-08-31   v0.1.5   Added remote validation support. Max network error retry count.  
 * 2013-08-19   v0.1.4   Fixed issues. Added 'stoponerror' option, validation report added. 
 * 2013-08-05   v0.1.2   Fixed issues.
 * 2013-04-20   v0.1.0   Initial release.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/praveenvijayan/grunt-html-validation/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


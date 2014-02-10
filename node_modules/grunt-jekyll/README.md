# grunt-jekyll

[![Build Status](https://travis-ci.org/dannygarcia/grunt-jekyll.png?branch=master)](https://travis-ci.org/dannygarcia/grunt-jekyll)

> Compile [Jekyll](http://jekyllrb.com/) sites with [Grunt](http://gruntjs.com/).

## Getting Started

This plugin requires [Grunt](http://gruntjs.com/) `~0.4.0` and [Jekyll](http://jekyllrb.com/) `>= v1.0.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide which explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process you may install this plugin with the command:

```shell
npm install grunt-jekyll --save-dev
```

After the plugin has been installed, load it in your Gruntfile with:

```js
grunt.loadNpmTasks('grunt-jekyll');
```

## Jekyll task

_Run this task with the `grunt jekyll` command._

This task helps you compile your Jekyll static site with Grunt.js.

### Options

You can use all of the configuration options available in the [Jekyll Documentation](http://jekyllrb.com/docs/configuration/), as well as some special options provided by this plugin.

#### src

Type: `string`
Default: `.`

Directory where Jekyll will read files.

#### dest

Type: `string`
Default: `./_site`

Directory where Jekyll will write files.

#### watch

Type: `boolean`
Default: `false`

Regenerate the site when files are modified.
If you are running multiple watch tasks in a project you should use [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) instead.

#### serve
Type: `boolean`
Default: `false`

Build the site and start a Jekyll development server on http://localhost:4000. The server lasts forever: kill it with `ctrl+c`

If serve is false, the site is built with the `build` command.  

For complex projects you may want to use [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) instead.

#### doctor

Type: `boolean`  
Default: `false`

Test your site for common errors and deprecated code. Ignores all other options except `src`, `config`, and `bundleExec`.

#### config

Type: `string`
Default: `_config.yml`

Specify a custom configuration file. Multiple files separated by a comma will cascade right to left.

#### raw

Type: `string`

Create a temporary _config.yml with the contents of `raw`. This config file has greater precedence than the files in `config`.

#### safe

Type: `boolean`
Default: `false`

Disables custom plugins.

#### plugins

Type: `string`
Default: `./_plugins`

Specify a plugins directory.

#### layouts

Type: `string`
Default: `./_layouts`

Specify a layouts directory.

#### drafts

Type: `boolean`
Default: `false`

Process and render draft posts.

#### future

Type: `boolean`
Default: `false`

Publishes posts with a future date.

#### lsi

Type: `boolean`
Default: `false`

Produce an index for related posts.

#### limit_posts

Type: `number`

Limit the number of posts to parse and publish.

#### port

Type: `string or number`

Listen on the given port (requires `server`).

#### host

Type: `string`

Listen at the given hostname (requires `server`).

#### baseurl

Type: `string`

Serve the website from the given base URL (requires `server`).

#### bundleExec

Type: `boolean`
Default: `false`

Run `jekyll` with [bundle exec](http://gembundler.com/v1.3/man/bundle-exec.1.html).

## Usage examples

Follow [this grunt.js example](https://gist.github.com/3753650) to get started with grunt-jekyll right away.

### Example config

```js
grunt.initConfig({
  jekyll: {                   			// Task
  	options: {							// Universal options
        bundleExec: true,
        src : '<%= app %>'
  	},
    dist: { 	                		// Target
      options: {	           			// Target options
    	dest: '<%= dist %>',
		config: '_config.yml,_config.build.yml'
      }
    },
    serve: {                   			// Another target
      options: {
        dest: '.jekyll',
        drafts: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-jekyll');

grunt.registerTask('default', ['jshint', 'jekyll']);
```

### Example usage

#### Use the `raw` option

```js
grunt.initConfig({
  jekyll: {
    dist: {
      options: {
        config: '_config.yml'.
        // Construct a string with JavaScript.
        // Remember, in YAML line breaks and indentation matter.
		raw: 'pygments: false\n' +
			 'exclude: [\'development\']\n' +
			 'author:\n' +
             '  name: ' + fetchAuthor() + '\n' +
             '  email: ' + fetchEmail()
        }
    }
  }
});
```

## Changelog

- v0.4.1: Internal optimizations.
- v0.4.0: Added setup for tests.
- v0.3.9: Consolidating branches and bumping version #.
- v0.3.8: Added robwierzbowski's raw option and other PRs.
- v0.3.6:
    - Reviewed Jekyll [source](https://github.com/mojombo/jekyll/blob/master/bin/jekyll) and updated plugin with new flags.
    - Reviewed and warned about deprecated flags.
    - Updated documentation to match flag updates. (Rewritten as a list)
- v0.3.3: Updated link in documentation. Added to-do list.
- v0.3.2: Added option to select config file. Removed deprecated --pygments option flag. Bugfixes.
- v0.3.0: Update for Jekyll 1.0
- v0.2.1: Fixed destination path option.
- v0.2.0: Updated README with better options. Options are more flexible.
- v0.1.6: Updated README with better example.
- v0.1.0: Initial Release.


## MIT License

grunt-jekyll is freely distributable under the terms of the MIT license.

Copyright (c) 2012, Danny Garcia. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/dannygarcia/grunt-jekyll/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


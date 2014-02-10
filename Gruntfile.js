/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              ' * Bootstrap magic by @pikock and @autreplanete\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              ' *\n' +
              ' * Contributors <%= pkg.contributors %>\n' +
              ' *\n' +
              ' * Designed and built with all the love in the world by @pikock and @autreplanete.\n' +
              ' */\n\n',
    jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Bootstrap magic requires jQuery") }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    jshint: {
      options: {
        jshintrc: 'src/.jshintrc'
      },
      src: [ 'Gruntfile.js']
    },

    concat: {
      options: {
        banner: '<%= banner %><%= jqueryCheck %>',
        stripBanners: false
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'min'
      }
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap.css.map',
          sourceMapFilename: 'app/css/bootstrap.css.map'
        },
        files: {
          'app/css/bootstrap.css': 'less/bootstrap.less'
        }
      },
      compileTheme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'app.css.map',
          sourceMapFilename: 'app/css/app.css.map'
        },
        files: {
          'app/css/app.css': 'app/less/app.less'
        }
      }
    },

    copy: {
      
    },

    // qunit: {
    //   options: {
    //     inject: 'js/tests/unit/phantom.js'
    //   },
    //   files: ['js/tests/*.html']
    // },

    jekyll: {
      docs: {}
    },

    validation: {
      options: {
        reset: true,
        relaxerror: [
            "Bad value X-UA-Compatible for attribute http-equiv on element meta.",
            "Element img is missing required attribute src."
        ]
      },
      files: {
        src: ["_gh_pages/**/*.html"]
      }
    },

    watch: {
      options: {
        livereload: true
      },

      // src: {
      //   files: '<%= jshint.src.src %>',
      //   tasks: ['jshint:src']
      // },
      // test: {
      //   files: '<%= jshint.test.src %>',
      //   tasks: ['jshint:test', 'qunit']
      // },
      less: {
        files: 'app/less/*.less',
        tasks: ['less']
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

  // Docs HTML validation task
  grunt.registerTask('validate-js', ['jshint']);

  // // Test task.
  // var testSubtasks = ['dist-css', 'jshint', 'qunit', 'validate-html'];
  // // Only run BrowserStack tests under Travis
  // if (process.env.TRAVIS) {
  //   // Only run BrowserStack tests if this is a mainline commit in twbs/bootstrap, or you have your own BrowserStack key
  //   if ((process.env.TRAVIS_REPO_SLUG === 'twbs/bootstrap' && process.env.TRAVIS_PULL_REQUEST === 'false') || process.env.TWBS_HAVE_OWN_BROWSERSTACK_KEY) {
  //     testSubtasks.push('browserstack_runner');
  //   }
  // }
  // grunt.registerTask('test', testSubtasks);

  // Test distribution task.
  grunt.registerTask('test', ['validate-html']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less']);

  // Copy distribution task.
  grunt.registerTask('dist-copy', ['copy']);

  // Default task.
  grunt.registerTask('default', ['clean', 'dist-css']);


};

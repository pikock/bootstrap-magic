'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: {
			name: 'grunt-jekyll'
		},

		jekyll: {
			options: {
				src: './test/app'
			},
			actual: {
				options: {
					dest: './test/actual'
				}
			},
			expected : {
				options: {
					dest: './test/expected'
				}
			}
		},

		mochaTest: {
			options: {
				reporter: 'list'
			},
			src: 'test/test.js'
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('test', [
		'jekyll:expected',
		'mochaTest'
	]);

	grunt.registerTask('default', 'test');
};

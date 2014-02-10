var assert = require('assert');
var grunt = require('grunt');

describe('grunt', function(){
	describe('jekyll', function(){
		it('should compile', function(){

			var actual = grunt.file.read('./test/actual/index.html');
			var expected = grunt.file.read('./test/expected/index.html');

			assert.equal(actual, expected);
		});
	});
});

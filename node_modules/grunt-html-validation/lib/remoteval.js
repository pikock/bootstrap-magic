/*
 * grunt-html-validation remote validation helper
 * https://github.com/praveen/grunt-html-validation
 *
 * Copyright (c) 2013 Praveen Vijayan
 * Licensed under the MIT license.
 */
module.exports = function remoteval (file, cb) {
	'use strict';

	var request = require('request');
	var grunt = require('grunt');
	
	request(file, function (error, response, body) {
		if(response.statusCode == 404){
			console.log(fileNotFound);
		}

		if (!error && response.statusCode == 200) {
			grunt.file.write('_tempvlidation.html',body);
			return cb(true)
		}
	})

	
}
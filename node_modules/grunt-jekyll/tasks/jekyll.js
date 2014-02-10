/*global module*/
'use strict';
module.exports = function (grunt) {
	var fs = require('fs');
	var tmp = require('tmp');
	var exec = require('child_process').exec;

	grunt.registerMultiTask('jekyll', 'This triggers the `jekyll` command.', function () {

		var done = this.async();
		var options = this.options();
		var command = 'jekyll';
		var optionList = {
			'src': '--source',
			'dest': '--destination',
			'safe': '--safe',
			'plugins': '--plugins',
			'layouts': '--layouts',
			'watch': '--watch',
			'auto': '--watch',
			'config': '--config',
			'drafts': '--drafts',
			'future': '--future',
			'lsi': '--lsi',
			'limit_posts': '--limit_posts',
			'port': '--port',
			'server_port': '--port',
			'host': '--host',
			'baseurl': '--baseurl',
			'trace': '--trace',

			// Deprecated flags
			'paginate': false,
			'permalink': false,
			'markdown': false,
			'url': false
		};
		var majorVersion;
		var rawConfigFile;

		function testExists (next) {
			var versionCommand = options.bundleExec ? 'bundle exec jekyll -v' : 'jekyll -v';
			exec(versionCommand, function (error, stdout, stderr) {

				if (error) {
					grunt.fail.warn('Please install Jekyll before running this task.');
					done(false);
				}
				if (stdout) {
					// Stdout returns `jekyll 1.x.x`, match returns first semver digit
					majorVersion = stdout.match(/\d+/);
					next();
				}
			});
		}

		// Create temporary config file if needed
		function configContext (next) {
			if (options.raw) {
				// Tmp file is only available within the context of this function
				tmp.file({ prefix: '_config.', postfix: '.yml' }, function (err, path, fd) {

					rawConfigFile = path;

					if (err) {
						grunt.fail.warn(err);
					}

					// Write raw to file
					fs.writeSync(fd, new Buffer(options.raw), 0, options.raw.length);
					next();
				});
			}
			else {
				next();
			}
		}

		// Run configContext with command execution as a callback
		function runJekyll (next) {

			// Build the command string
			if (options.bundleExec) {
				command = 'bundle exec ' + command;
			}

			if (options.serve) {
				command += majorVersion > 0 ? ' serve' : ' server';
			}
			else if (options.doctor) {
				command += ' doctor';
			}
			else {
				command += ' build';
			}

			// Insert temporary config path into the config option
			if (typeof rawConfigFile != 'undefined') {
				options.config = options.config ? options.config + ',' + rawConfigFile : rawConfigFile;
			}

			// Add flags to command if running serve or build
			if (!options.doctor) {
				Object.keys(optionList).forEach(function (option) {
					if (options[option]) {
						command += ' ' + optionList[option];
						if (typeof options[option] !== 'boolean') {
							command += ' ' + options[option];
						}
						if (!options[option]) {
							grunt.warn('`' + option + '` has been deprecated. You may want to try this in the `raw` option in your gruntfile, or in a configuration file.');
						}
					}
				});
			}

			// Execute command
			grunt.log.write('`' + command + '` was initiated.\n');

			if (options.serve) {
				grunt.log.write('Started Jekyll web server on http://localhost:4000. Waiting...\n');
			}

			exec(command, function (err, stdout) {
				grunt.log.write('\n\nJekyll output:\n' + stdout);

				if (err) {
					grunt.fail.warn(err);
					done(false);
				}
				else {
					next();
				}
			});
		}

		// Run the command
		testExists(function() {
			configContext (function() {
				runJekyll(function() {
					done(true);
				});
			});
		});
	});
};

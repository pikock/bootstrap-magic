#! /usr/bin/env node

var fs = require('fs');
var preset = process.argv[3] || 'default';
var browsers = require('../presets/' + preset + '.json');

var config = {
  username: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_KEY',
  test_path: 'path/to/test/runner',
  browsers: browsers
}

var configString = JSON.stringify(config, null, 4);

fs.writeFile('browserstack.json', configString, function (err, written, buffer) {
  console.log('Generated `browserstack.json` using preset "%s" having %d browsers.',
              preset, browsers.length);
});

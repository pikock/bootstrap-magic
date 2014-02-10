#! /usr/bin/env node

var executable = process.argv[2] || 'runner';

try {
  require('./' + executable + '.js');
} catch (e) {
  console.log(e);
  console.log('Invalid command.');
}

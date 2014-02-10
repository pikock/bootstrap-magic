'use strict';

var grunt = require('grunt');

exports.validation = function(test){
    test.expect(1);
    test.ok(true, "initialize testing");
    test.done();
};
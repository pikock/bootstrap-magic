var exec = require('child_process').exec;

module.exports = function(grunt) {
  grunt.registerTask('browserstack_runner','Your task description goes here.', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    var subProcess = exec('bash -c "PATH=$PATH:$(npm bin) browserstack-runner"', function (err, stdout, stderr) {
      done(err ? false : true);
    });

    subProcess.stdout.on('data', function (_data) {
      grunt.log.writeln(_data.trim());
    });
  });
};

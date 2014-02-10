var exec = require('child_process').exec,
    fs = require('fs'),
    http = require('http'),
    tunnelJar = __dirname + '/BrowserStackTunnel.jar',
    utils = require('./utils'),
    config = require('./config');

var Tunnel = function Tunnel (key, port, tunnelIdentifier, callback, err) {
  var that = {};

  function tunnelLauncher () {
    var tunnelCommand = 'java -jar ' + tunnelJar + ' ';
    if (config.debug)
      tunnelCommand += ' -v ';
    tunnelCommand += key + ' ';
    tunnelCommand += 'localhost' + ',';
    tunnelCommand += port.toString() + ',';
    tunnelCommand += '0';
    tunnelCommand += (typeof tunnelIdentifier === 'undefined')? ' -force -onlyAutomate' : ' -tunnelIdentifier ' + tunnelIdentifier;

    if (typeof callback !== 'function') {
      callback = function () {};
    }

    console.log("Launching tunnel..");
    var subProcess = exec(tunnelCommand, function (error, stdout, stderr) {
      console.error(stderr);
      if (stdout.indexOf('Error') >= 0) {
        console.log("..Failed");
        console.log(stdout);
        process.exit(1);
      }
    });

    var data = '';
    var running = false;
    var runMatcher = "You can now access your local server(s)";

    setTimeout(function () {
      if (!running) {
        utils.alertBrowserStack("Tunnel launch timeout",
                                'Stdout:\n' + data);
      }
    }, 30 * 1000);

    subProcess.stdout.on('data', function (_data) {
      if (running) {
        return;
      }

      data += _data;

      if (data.indexOf(runMatcher) >= 0) {
        running = true;
        console.log("..Done");
        callback();
      }
    });

    that.process = subProcess;
  }

  fs.exists(tunnelJar, function (exists) {
    if (exists) {
      fs.unlinkSync(tunnelJar);
    }
    console.log('Downloading tunnel to `%s`', tunnelJar);

    var file = fs.createWriteStream(tunnelJar);
    var request = http.get(
      "http://www.browserstack.com/BrowserStackTunnel.jar",
      function(response) {
        response.pipe(file);

        response.on('end', function () {
          tunnelLauncher();
        });
      }
    );
  });

  return that;
}

exports.Tunnel = Tunnel;

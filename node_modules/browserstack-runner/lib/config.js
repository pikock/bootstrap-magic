var path = require('path'),
    fs = require('fs');
var pwd = process.cwd();

try {
  var config = require(process.cwd() + '/browserstack');
} catch (e) {
  if (e.code == 'MODULE_NOT_FOUND') {
    console.log('Configuration file `browserstack.json` is missing.');
  } else {
    console.log('Invalid configuration in `browserstack.json` file');
    console.log(e.message);
    console.log(e.stack);
  }
  process.exit(1);
}

try {
  var package_json = require(process.cwd() + '/package.json');
} catch (e) {
  var package_json = {};
}

if (process.env.BROWSERSTACK_KEY) {
  config.key = process.env.BROWSERSTACK_KEY;
}

if (process.env.BROWSERSTACK_USERNAME) {
  config.username = process.env.BROWSERSTACK_USERNAME;
}

if (!config.project) {
  var fallback_project;

  if (config.username === 'OpensourceJSLib') {
    fallback_project = 'Anonymous OpenSource Project';
  }

  config.project = process.env.TRAVIS_REPO_SLUG || package_json.name;
}

var commit_id = process.env.TRAVIS_COMMIT;

if (commit_id) {
  config.build = "Commit-" + commit_id.slice(0, commit_id.length/2);
}

['username', 'key', 'test_path', 'browsers'].forEach(function (param) {
  if (typeof config[param] === 'undefined') {
    console.error('Configuration parameter `%s` is required.', param);
    process.exit(1);
  }
});

// Convert absoulte path into relative paths.
if (config.test_path.indexOf(pwd) === 0) {
  config.test_path = config.test_path.slice(pwd.length + 1);
}

if (!fs.existsSync(config.test_path)){
  console.error('Test path is invalid.');
  process.exit(1);
}

config.tunnelIdentifier = process.env.TUNNEL_ID || process.env.TRAVIS_JOB_ID || process.env.TRAVIS_BUILD_ID;

for (key in config) {
  if (config.hasOwnProperty(key)) {
    exports[key] = config[key];
  }
}

A command line interface to run browser tests over BrowserStack.

## Install
Go to the `browserstack-runner` directory.  
Install browserstack-runner

    npm -g install

or


For development,

    npm link

## Configuration
To run browser tests on BrowserStack infrastructure, you need to
create a `browserstack.json` file in project's root directory (the
directory from which tests are run), by running this command:

    browserstack-runner init [preset]

If nothing is provided as `preset` **default** is used.

> Currently only one preset is present: **default**

### Parameters

 - *username*: BrowserStack username
   (Alternatively: use `BROWSERSTACK_USERNAME` environment variable)

 - *key*: BrowserStack key
   (Alternatively: use `BROWSERSTACK_KEY` environment variable)

 - *test_path*: Path to the which will execute the tests when opened
   in a browser.

 - *browsers*: A list of browsers on which tests are to be run.

A sample configuration file:

    {
      "username": "<username>",
      "key": "<key>",
      "test_path": "relative/path/to/test/page",
      "browsers":   [{
        "browser": "firefox",
        "browser_version": "15.0",
        "device": null,
        "os": "OS X",
        "os_version": "Snow Leopard"
      },
      {
        "browser": "firefox",
        "browser_version": "16.0",
        "device": null,
        "os": "Windows",
        "os_version": "7"
      },
      {
        "browser": "firefox",
        "browser_version": "17.0",
        "device": null,
        "os": "Windows",
        "os_version": "8"
      },
      {
        "browser": "ie",
        "browser_version": "8.0",
        "device": null,
        "os": "Windows",
        "os_version": "7"
      },
      {
        "browser": "ie",
        "browser_version": "9.0",
        "device": null,
        "os": "Windows",
        "os_version": "7"
      },
      {
        "browser": "ie",
        "browser_version": "10.0",
        "device": null,
        "os": "Windows",
        "os_version": "8"
      }]
    }


### Secure Information

To prevent checking in the BrowserStack `username` and `key` in your
source control, the corresponding environment variables can be used.

The environment variables then can be safely provided in the build
configuration. For example, with travis-ci you can follow:

http://about.travis-ci.org/docs/user/build-configuration/#Secure-environment-variables

## Running tests
Run `browserstack-runner` to run the tests on all the browsers mentioned
in the configuration.

You can include this in your test script to automatically run cross
browser tests on every build.

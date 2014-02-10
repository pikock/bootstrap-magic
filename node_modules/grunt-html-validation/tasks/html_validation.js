/*
 * grunt-html-validation
 * https://github.com/praveen/grunt-html-validation
 *
 * Copyright (c) 2013 Praveen Vijayan
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {

    var w3cjs = require('w3cjs');
    var colors = require('colors');
    var fs = require('fs');
    var path = require('path');
    var request = require('request');
    var rval = require('../lib/remoteval');

    colors.setTheme({
        silly: 'rainbow',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'grey',
        info: 'green',
        data: 'grey',
        help: 'cyan',
        warn: 'yellow',
        debug: 'blue',
        error: 'red',
        blue: 'blue'
    });

    var htmlContent = "",
        arryFile = [],
        counter = 0,
        msg = {
            error: "Something went wrong",
            ok: "Validation successful..",
            start: "Validation started for.. ".info,
            networkError: 'Network error re-validating..'.error,
            validFile: "Validated skipping..",
            nofile: ":- No file is specified in the path!",
            nextfile: "Skipping to next file..".verbose,
            eof: "End of File..".verbose,
            fileNotFound: "File not found..".error,
            remotePathError: "Remote path ".error + "(options->remotePath) ".grey + "is mandatory when remote files ".error + "(options-> remoteFiles) ".grey + "are specified!".error
        },
        len,
        fileStat = {},
        isModified,
        fileCount = 0,
        validsettings = "",
        reportArry = [],
        retryCount = 0,
        reportFilename = "";

    grunt.registerMultiTask('validation', 'HTML W3C validation.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            path: "validation-status.json",
            reportpath: "validation-report.json",
            reset: false,
            proxy: null,
            stoponerror: false,
            failHard: false,
            remotePath: false,
            maxTry: 3,
            relaxerror: [],
            doctype: false, // Defaults false for autodetect
            charset: false // Defaults false for autodetect
        });

        var done = this.async(),
            files = grunt.file.expand(this.filesSrc),
            flen = files.length,
            readSettings = {},
            remoteArry = [],
            isRelaxError = false;

        isRelaxError = options.relaxerror.length && options.relaxerror.length !== '';

        var makeFileList = function (files) {
            return files.map(function (file) {
                return options.remotePath + file;
            });
        };

        //Reset current validation status and start from scratch.
        if (options.reset) {
            grunt.file.write(options.path, '{}');
        }

        if (!flen) {
            var nomsg = this.data.src;
            console.log(nomsg + msg.nofile.error);
        }

        var addToReport = function (fname, status) {
            var relaxedReport = [];

            for (var i = 0; i < status.length; i++) {
                if (!checkRelaxError(status[i].message)) {
                    relaxedReport.push(status[i]);
                }
            }

            var report = {};
            report.filename = fname;
            report.error = relaxedReport;
            reportArry.push(report);
        };

        var validate = function (files) {

            if (files.length) {

                if (grunt.file.exists(options.path)) {
                    readSettings = grunt.file.readJSON(options.path);
                }
                var currFileStat = readSettings[files[counter]] || false;

                if (currFileStat) {
                    console.log(msg.validFile.green + files[counter]);
                    reportFilename = options.remoteFiles ? dummyFile[counter] : files[counter];
                    addToReport(reportFilename, false);
                    counter++;
                    validate(files);
                    done()
                    return;
                }

                if (files[counter] !== undefined) {

                    var filename = options.remoteFiles ? dummyFile[counter] : files[counter];

                    console.log(msg.start + filename);
                }

                var results = w3cjs.validate({
                    file: files[counter], // file can either be a local file or a remote file
                    // file: 'http://localhost:9001/010_gul006_business_landing_o2_v11.html',
                    output: 'json', // Defaults to 'json', other option includes html
                    doctype: options.doctype, // Defaults false for autodetect
                    charset: options.charset, // Defaults false for autodetect
                    proxy: options.proxy, // Proxy to pass to the w3c library
                    callback: function (res) {

                        flen = files.length;

                        if (!res.messages) {
                            ++retryCount;
                            var netErrorMsg = msg.networkError + " " + retryCount.toString().error + " ";
                            if (retryCount === options.maxTry) {
                                counter++;
                                if (counter !== flen) {
                                    netErrorMsg += msg.nextfile;
                                } else {
                                    netErrorMsg += msg.eof;
                                }
                                retryCount = 0;
                            }

                            console.log(netErrorMsg);
                            validate(files);
                            return;
                        }

                        len = res.messages.length;

                        function setGreen(argument) {
                            readSettings[files[counter]] = true;
                            grunt.log.ok(msg.ok.green);

                            reportFilename = options.remoteFiles ? dummyFile[counter] : files[counter];
                            addToReport(reportFilename, false);
                        }

                        if (len) {
                            var errorCount = 0;

                            for (var prop in res.messages) {
                                var chkRelaxError;
                                if (isRelaxError) {
                                    chkRelaxError = checkRelaxError(res.messages[prop].message);
                                }

                                if (!chkRelaxError) {
                                    errorCount = errorCount + 1;
                                    console.log(errorCount + "=> ".warn + JSON.stringify(res.messages[prop].message).help +
                                        " Line no: " + JSON.stringify(res.messages[prop].lastLine).prompt
                                    );
                                }

                            }

                            if (errorCount !== 0) {
                                console.log("No of errors: ".error + errorCount);
                            }

                            readSettings[files[counter]] = false;
                            reportFilename = options.remoteFiles ? dummyFile[counter] : files[counter];
                            addToReport(reportFilename, res.messages);

                            if (options.stoponerror) {
                                done();
                                return;
                            }

                            if (isRelaxError && errorCount === 0) {
                                setGreen();
                            }

                        } else {

                            setGreen();

                        }

                        grunt.file.write(options.path, JSON.stringify(readSettings));
                        // depending on the output type, res will either be a json object or a html string
                        counter++;

                        if (counter === flen) {
                            if (options.reportpath) {
                                grunt.file.write(options.reportpath, JSON.stringify(reportArry));
                                console.log("Validation report generated: ".green + options.reportpath);
                            }
                            if (options.failHard) {
                                var validationErrCount = reportArry.reduce(function (sum, report) {
                                    return sum + report.error.length;
                                }, 0);
                                if (validationErrCount > 0) {
                                    grunt.fail.warn(validationErrCount + " total unignored HTML validation error" + grunt.util.pluralize(validationErrCount, "/s") + ".");
                                }
                            }
                            done();
                        }

                        if (options.remoteFiles) {
                            if (counter === flen) {
                                return;
                            }

                            rval(dummyFile[counter], function () {
                                validate(files);
                            });

                        } else {
                            validate(files);
                        }
                    }
                });
            }
        };

        function checkRelaxError(error) {
            for (var i = 0, l = options.relaxerror.length; i < l; i++) {
                var re = new RegExp(options.relaxerror[i], 'g');
                if (re.test(error)) {
                    return true;
                }
            }
        }

        /*Remote validation 
         *Note on Remote validation.
         * W3Cjs supports remote file validation but due to some reasons it is not working as expected. Local file validation is working perfectly. To overcome this remote page is fetch using 'request' npm module and write page content in '_tempvlidation.html' file and validates as local file.
         */

        if (!options.remotePath && options.remoteFiles) {
            console.log(msg.remotePathError);
            return;
        }

        if (options.remotePath && options.remotePath !== "") {
            files = makeFileList(files);
        }

        if (options.remoteFiles) {

            if (typeof options.remoteFiles === 'object' && options.remoteFiles.length && options.remoteFiles[0] !== '') {
                files = options.remoteFiles;

            } else {
                files = grunt.file.readJSON(options.remoteFiles);
            }

            files = makeFileList(files);

            var dummyFile = files;

            files = [];

            for (var i = 0; i < dummyFile.length; i++) {
                files.push('_tempvlidation.html');
            }

            rval(dummyFile[counter], function () {
                validate(files);
            });

            return;
        }

        if (!options.remoteFiles) {
            validate(files);
        }

    });

};
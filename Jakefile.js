/* globals desc: false, task: false, complete: false, fail: false, jake: false, directory: false*/

(function () {
    "use strict";

    var karma = require("simplebuild-karma");
    var shell = require("shelljs");

    var DIST_DIR = 'generated/dist';
    var KARMA_CONFIG = "karma.conf.js";

    desc('This starts the Karma server');
    task('karma', function () {
        console.log("Starting karma server") ;
        karma.start({
            configFile: KARMA_CONFIG
        }, complete, fail);
    }, { async: true});

    desc('A basic test for the node server');
    task('default', ['lint', 'test'], function () {
        // jake.exec("npm test src/javascript/_interactjs_test.js", { interactive: true}, complete );
        console.log("\n\n TEST OK");
    }, { async: true });

    desc('Linting code');
    task('lint', function () {
        console.log(" Linting: . ");
        jake.exec("node node_modules/jshint/bin/jshint Jakefile.js src/javascript", { interactive: true}, complete);
    }, { async: true});

    desc('Build distribution directory');
    task('build', [DIST_DIR], function () {
        console.log("Building distribution directory: .");
        
        shell.rm("-rf", DIST_DIR + "/*");
        shell.cp("src/content/*", DIST_DIR);
        
        jake.exec("node node_modules/browserify/bin/cmd.js src/javascript/app.js -o " + DIST_DIR + "/bundle.js", { interactive: true}, complete);
        
    }, { async: true});
    
    directory(DIST_DIR);



    desc('Build spikes');
    task('buildSpikes', function () {
        console.log("Building distribution directory: .");

        var firstExDir = "spikes/interactFirstEx";
        
        jake.exec("node node_modules/browserify/bin/cmd.js " + firstExDir + "/javascript.js -o ./" + firstExDir + "/bundle.js", { interactive: true}, complete);
        
    }, { async: true});

    desc('Run tests');
    task('test', function () {
        karma.run({
            configFile: KARMA_CONFIG,
            expectedBrowsers: [
                "Chrome 51.0.2704 (Windows 8.1 0.0.0)"
            ],
            strict : !process.env.loose
        }, complete, fail);
    }, { async: true});


}());

/*   
    var semver = require("semver");
    var karma = require("simplebuild-karma");
    var shell = require("shelljs");
    
    var KARMA_CONFIG = "karma.conf.js";
    var DIST_DIR = 'generated/dist';

    
    //***** General tasks
    
    desc('This starts the Karma server');
    task('karma', function () {
        console.log("Starting karma server") ;
        karma.start({
            configFile: KARMA_CONFIG
        }, complete, fail);
    }, { async: true});
    
    desc('This is the default task.');
    task('default', [ 'version', 'lint', 'test' ], function () {
        console.log("\n\n BUILD OK");    
    });
    
    desc('Runs a localhost server');
    task('run', ['build'], function () {
        // we select the src folder, which contains what we wish to deploy on the server
        jake.exec("node node_modules/http-server/bin/http-server " + DIST_DIR, { interactive: true}, complete); 
    }, { async: true});
    
    desc('Erase all generated files');
    task('clean', function () {
        shell.rm('-rf', 'generated');
    }, { async: true});
    
    //***** Supporting tasks
    
    desc('Testing for the latest version of node');
    task('version', function () {
        console.log("\n Checking node version: . ");
        
        var jsonPackage = require("./package.json");
        
        var expectedVersion = jsonPackage.engines.node;
        var actualVersion = process.version;
        
        if(semver.neq(expectedVersion, actualVersion)) {
          fail("Incorrect node version; expected " + expectedVersion + ", but was " + actualVersion);  
        }
    });

    desc('Run tests');
    task('test', function () {
        karma.run({
            configFile: KARMA_CONFIG,
            expectedBrowsers: [
                "Chrome 51.0.2704 (Windows 8.1 0.0.0)"
            ],
            strict : !process.env.loose
        }, complete, fail);
    }, { async: true});

*/
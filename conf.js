// conf.js
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
   reportOnlyFailedSpecs: false,
    showQuickLinks: true,
  captureOnlyFailedSpecs: true,
    preserveDirectory: true,
    pathBuilder: function(currentSpec, suites, browserCapabilities) {
    // will return chrome/your-spec-name.png
    return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
  }
});


exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 36000,
         print: function() {}
    },  
  multiCapabilities:  {
    browserName: 'chrome',
  },
    
     // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
    
   onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
      jasmine.getEnv().addReporter(reporter);
      jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
            displayStacktrace: true,
            //takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
      }
    }));
   },
    
    afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
}
}


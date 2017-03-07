// conf.js
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
//var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
//var reporter=new HtmlReporter({
 //   baseDirectory: 'C:/Users/shawo/Desktop/new/protractor-result', // a location to store screen shots.
 //   docTitle: 'Protractor Demo Reporter',
  //  docName:    'protractor-demo-tests-report.html'
    
//});


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
    
   onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
      //jasmine.getEnv().addReporter(reporter);
      jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
            displayStacktrace: true,
            //takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
      }
    }));
   }
};


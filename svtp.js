var svtConfig = require('./svt.json');
var system = require('system');
var args = system.args;

if (args.length < 3) {
  console.log('Try to pass some arguments when invoking this script!');
  phantom.exit();
} else {
  var page = require('webpage').create();
  var url = args[1];
  var distFilePath = args[2];

  page.open(url, function() {
    page.render(distFilePath);
    phantom.exit();
  });
}

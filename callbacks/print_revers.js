var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, printReverse);
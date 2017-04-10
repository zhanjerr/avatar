var https = require("https");

function getHTML (options, callback) {

  /* Add your code here */
    // console.log(options.host+options.path);
  https.get(options, (response) =>{
    var result = "";
    //set encoding
    response.setEncoding('utf8');
    // console.log(response);
    //response on data
    response.on('data', (data) => {
      result += data;
    });
    //response on error
    response.on('error', (error) => {
      console.log("Error: " + error);
    });
    //response on end
    response.on('end', () => {
      return callback(result);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, function printHTML (html) {
  console.log(html);
});
var https = require("https");

function getAndPrintHTML (options) {

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
      console.log(result);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
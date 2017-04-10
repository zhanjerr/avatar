var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, (response) =>{
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

getAndPrintHTML();
var https = require("https");

getAndPrintHTMLChunks();

function getAndPrintHTMLChunks() {

  var requestOptions ={
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  https.get(requestOptions, (response) =>{
    //set encoding
    response.setEncoding('utf8');
    // console.log(response);
    //response on data
    response.on('data', (data) => {
      console.log(data + "\n");
      // console.log("end of a chunk");
    });
    //response on error
    response.on('error', (error) => {
      console.log("Error: " + error);
    });
    //response on end
    response.on('end', () => {
      console.log("I've reached the end!");
    });
  });
}
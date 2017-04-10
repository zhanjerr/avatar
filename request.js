var fs = require('fs');
var request = require('request');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    console.log("got an error!");
    return
  })
  .on('response', function(response){
    console.log('Response Status Code: ', response.statusCode);
    console.log("response content type: " + response.headers['content-type']);
    console.log("response message: " + response.statusMessage)
  })
  .pipe(fs.createWriteStream('./future.jpg'));
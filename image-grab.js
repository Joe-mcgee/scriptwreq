const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('response code: ', response.statusCode);
    console.log('response message: ', response.statusMessage);
    console.log('response content-type: ', response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'));

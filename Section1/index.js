/*
* Primary file for API
*
*/
// Dependancies
const http =  require('http');
const url = require ('url');

// The server should respond to all requests with a string
const server = http.createServer(function(req,res){

  // Get the url and parse it
  let parsedUrl = url.parse(req.url, true);

  // Get the path of the url
  let path = parsedUrl.pathname;
  let trimmedPath =  path.replace(/^\/+|\/+$/g ,'')
  // Send the response
  res.end('Hello World\n')

  // Log the request path
  console.log(`Request is received on this path: ${trimmedPath}`)
});

// Start the server, and have it listen on port 3000
server.listen(3000, function(){
  console.log('Server is listening on port 3000 now')
})
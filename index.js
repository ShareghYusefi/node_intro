// modules are little packages we can use for our project
// http module is a built-in module in Node.js
// we can use it to create a web server - a server that listens for requests and sends responses to the client

// We can use the require() function to include a module in our project
var http = require("http");

http
  .createServer(
    // take a callback function as an argument, this callback function will have acces to the request and response objects
    function (req, res) {
      // write response for the client
      res.writeHead(200, { "Content-Type": "application/json" }); // write the response header
      res.write('{ "message": "Hello World!" }'); // write the response body
    }
  )
  .listen(8080); // listen for requests on port 8080 of the server
// ports are like doors that allow us to communicate with the server

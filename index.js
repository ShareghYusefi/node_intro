// modules are little packages we can use for our project
// http module is a built-in module in Node.js
// we can use it to create a web server - a server that listens for requests and sends responses to the client

// any file in Node.js is considered a module, giving us the ability to export and import code between files/modules
// console.log(module);

// What are some of the built-in modules in Node.js?
// http for creating web servers

// fs for reading and writing files
// we can create, read, update, and delete files using the fs module

// path for working with file paths
const path = require("path");
const x = path.parse(__filename); // __filename is a global object that gives us the path to the current file
console.log(x);
console.log(__filename);

// os for getting information about the operating system
const os = require("node:os");
var type = os.type();
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
console.log(`Operating System: ${type}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);

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

// We can install third-party modules using npm
// Step 1 - npm init
// Step 2 - npm install <package-name>

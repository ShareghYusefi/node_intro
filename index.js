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
// import log function from logger.js
// ./fileName: this means current folder
// ../fileName: this is moving up one folder
// /fileName: this is moving to the root folder
// We import the class definition from logger.js
const logger = require("./logger");
// create an instance of the Logger class
const LoggerInstance = new logger();

LoggerInstance.on("messageLogged", (argument) => {
  console.log("Listener called", argument);
});

http
  .createServer(
    // take a callback function as an argument, this callback function will have acces to the request and response objects
    function (req, res) {
      // log the request
      LoggerInstance.log("Request received");
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

// npm install - will create a node_modules folder and install dependencies in that folder
// npm uninstall - will remove the package from the node_modules & pacakge.json folder
// npm install -g <package-name> - will install the package globally
// npm -g list - will list all the global packages installed
// npm update - will update all the packages to the latest version

// Semantic Versioning
// Major.Minor.Patch
// Caret (^) - allows minor and patch updates
// Tilde (~) - allows only patch updates

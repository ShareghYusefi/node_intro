const EventEmitter = require("events");

// extends allows our Logger class to inherit properties and methods from the EventEmitter class
class Logger extends EventEmitter {
  log(message) {
    // logging request that has come to the server
    console.log(message);
    // raise an event using the emit method
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;

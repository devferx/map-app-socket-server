const Markers = require("./markers");

class Sockets {
  constructor(io) {
    this.io = io;
    this.markers = new Markers();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      // TODO: Send active markers
      // TODO: New marker
      // TODO: Update marker
    });
  }
}

module.exports = Sockets;

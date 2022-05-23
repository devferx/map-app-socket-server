const Markers = require("./markers");

class Sockets {
  constructor(io) {
    this.io = io;
    this.markers = new Markers();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.emit("active-markers", this.markers.activeMarkers);

      socket.on("new-marker", (marker) => {
        this.markers.addMarker(marker);

        socket.broadcast.emit("new-marker", marker);
      });

      socket.on("marker-movement", (marker) => {
        this.markers.updateMarker(marker);

        socket.broadcast.emit("marker-movement", marker);
      });
    });
  }
}

module.exports = Sockets;

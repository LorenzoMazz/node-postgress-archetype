import { Server } from "socket.io";
import { onConnection } from "./events/connection.js";

class SocketController {
  constructor(server, enabledCors) {
    this.socketIO = new Server(server, {
      cors: {
        origin: enabledCors,
      },
    });
    this.socketIO.on("connection", onConnection);
  }
}

export default SocketController;

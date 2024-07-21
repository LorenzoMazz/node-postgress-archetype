import { exit } from "process";
import Express from "./express/express.js";
import SocketController from "./socket-io/socket-controller.js";
import http from "http";

async function app() {
  const expressServer = new Express("*");

  const server = http.createServer(expressServer.getInstance());
  const socketServer = new SocketController(server, "*");

  if (!socketServer) {
    console.error("Error while creating socket server");
    exit(0);
  }

  server.listen(5002, () => {
    console.info(`Server running on port 5002`);
  });
}

app()

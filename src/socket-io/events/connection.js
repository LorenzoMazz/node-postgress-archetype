import eventsRouter from "../router.js";

export const onConnection = (socket) => {
  console.log(`${socket.id} connected`);
  Object.keys(eventsRouter).forEach((eventName) => {
    socket.on(`${eventName}`, eventsRouter[eventName](socket));
  });
};

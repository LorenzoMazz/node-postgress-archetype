export const onDisconnect = (socket) => () => {
  console.log(`${socket.id} disconnected`);
};

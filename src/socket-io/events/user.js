import * as userService from "../../services/user-service.js";

export const getUser = (socket) => (userId) => {
  const user = userService.getUser(userId);
  socket.broadcast.emit("userDetails", user);
};

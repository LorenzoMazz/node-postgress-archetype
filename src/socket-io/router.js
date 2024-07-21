import { onDisconnect } from "./events/disconnection.js";
import { getUser } from "./events/user.js";

export default {
  disconnect: onDisconnect,
  getUser: getUser,
};

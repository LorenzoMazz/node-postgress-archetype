import * as userService from "../services/user-service.js";

export const getUser = (req, res) => {
  const user = userService.getUser(req.params.id);
  res.json(user);
};

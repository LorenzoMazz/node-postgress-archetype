import User from "../models/user-model.js";

export const getUser = (userId) => {
  return new User(userId, "John Doe", "john@example.com");
};

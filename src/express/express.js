import cors from "cors";
import express from "express";
import userRoutes from "../routes/user-routes.js";

class Express {
  constructor(enabledCors) {
    this.express = express();
    this.enableCors(enabledCors);
    this.addRoutes();
  }

  enableCors(enabledCors) {
    this.express.use(
      cors({
        origin: enabledCors,
      })
    );
  }

  getInstance() {
    return this.express;
  }

  addRoutes() {
    this.express.use("/users", userRoutes);
  }
}

export default Express;

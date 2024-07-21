import cors from "cors";
import express from "express";
import configurationRoutes from "../routes/configration-routes.js";
import { sequelize } from "../utils/postgres/sequelize.js";

class Express {
  constructor(enabledCors) {
    this.express = express();
    this.enableCors(enabledCors);
    this.addRoutes();
    this.syncModels();
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
    this.express.use("/configurations", configurationRoutes);
  }

  syncModels() {
    sequelize.sync();
  }
}

export default Express;

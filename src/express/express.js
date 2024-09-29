import cors from "cors";
import express from "express";

import bodyParser from 'body-parser';
import { objectRouter as objectRoutes } from "../routes/object-routes.js";

class Express {
  constructor(enabledCors) {
    this.express = express();
    this.express.use(bodyParser.json());
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
    this.express.use("/", objectRoutes);
  }
}

export default Express;

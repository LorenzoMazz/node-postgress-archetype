import express from "express";
import * as objectController from "../controllers/object-controller.js"
import { MODEL, MODEL_NAME } from "../utils/postgres/constants/mappings.js";

export let objectRouter
export async function initRoutes(mappingEndpointModel) {
  objectRouter = express.Router();
  for (const endpoint in mappingEndpointModel) {
    objectRouter.get(`/${endpoint}`, objectController.getObjects({ Model: mappingEndpointModel[endpoint][MODEL], modelName: mappingEndpointModel[endpoint][MODEL_NAME] }));
    objectRouter.get(`/${endpoint}/:id`, objectController.getObjectById({ Model: mappingEndpointModel[endpoint][MODEL], modelName: mappingEndpointModel[endpoint][MODEL_NAME] }));
    objectRouter.post(`/${endpoint}`, objectController.createObject({ Model: mappingEndpointModel[endpoint][MODEL], modelName: mappingEndpointModel[endpoint][MODEL_NAME] }));
    objectRouter.put(`/${endpoint}/:id`, objectController.updateObject({ Model: mappingEndpointModel[endpoint][MODEL], modelName: mappingEndpointModel[endpoint][MODEL_NAME] }));
    objectRouter.delete(`/${endpoint}/:id`, objectController.deleteObject({ Model: mappingEndpointModel[endpoint][MODEL], modelName: mappingEndpointModel[endpoint][MODEL_NAME] }));
  }
}

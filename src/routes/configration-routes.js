import express from "express";
import * as configrationController from "../controllers/configuration-controller.js"

const router = express.Router();

router.get("/", configrationController.getConfigurations);
router.get("/:id", configrationController.getConfigurationById);
router.post("/:id", configrationController.createConfiguration);
router.put("/:id", configrationController.updateConfiguration);
router.delete("/:id", configrationController.deleteConfiguration);

export default router;

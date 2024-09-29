import * as objectService from "../services/object-service.js";

export const createObject = ({ Model }) => async (req, res) => {
  const { success, output, error } = await objectService.createObject(req.body, { Model })
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const getObjects = ({ Model }) => async (req, res) => {
  const { success, output, error } = await objectService.getObjects({ Model })
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const getObjectById = ({ Model, modelName }) => async (req, res) => {
  const { success, output, error } = await objectService.getObjectById(req.params, { Model, modelName })
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const updateObject = ({ Model, modelName }) => async(req, res) => {
  const { success, output, error } = await objectService.updateObject(req.params, req.body, { Model, modelName })
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const deleteObject = ({ Model, modelName }) => async (req, res) => {
  const { success, output, error } = await objectService.deleteObject(req.params, { Model, modelName })
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

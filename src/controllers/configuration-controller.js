import * as configurationService from "../services/configuration-service.js";

export const createConfiguration = async (req, res) => {
  const { success, output, error } = await configurationService.createConfiguration(req.body)
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const getConfigurations = async (req, res) => {
  const { success, output, error } = await configurationService.getConfigurations()
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const getConfigurationById = async (req, res) => {
  const { success, output, error } = await configurationService.getConfigurationById(req.params)
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const updateConfiguration = async(req, res) => {
  const { success, output, error } = await configurationService.updateConfiguration(req.params, req.body)
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

export const deleteConfiguration = async (req, res) => {
  const { success, output, error } = await configurationService.deleteConfiguration(req.params)
  if (success) {
    res.status(200);
    res.send(output)
  } else {
    res.status(500).json({ error });
  }
};

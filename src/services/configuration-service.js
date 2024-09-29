import { Configuration } from "../models/configuration-model.js";

export const createConfiguration = async ({ name, version }) => {
  try {
    const configuration = await Configuration.create({ name, version });
    return { success: true, output: configuration }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const getConfigurations = async () => {
  try {
    const configurations = await Configuration.findAll();
    return { success: true, output: configurations }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const getConfigurationById = async ({ id }) => {
  try {
    const configuration = await Configuration.findByPk(id);
    return { success: true, output: configuration }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const updateConfiguration = async ({ id }, { name, version }) => {
  try {
    const [updated] = await Configuration.update({ name, version }, {
      where: { id }
    });
    if (updated) {
      const updatedConfiguration = await Configuration.findByPk(id);
      return { success: true, output: updatedConfiguration }
    } else {
      return { success: false, error: `Configuration not found` }
    }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const deleteConfiguration = async ({ id }) => {
  try {
    const deleted = await Configuration.destroy({
      where: { id }
    });
    if (deleted) {
      return { success: true }
    } else {
      return { success: false, error: `Configuration not found` }
    }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

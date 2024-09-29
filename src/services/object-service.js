export const createObject = async (body, { Model }) => {
  try {
    const object = await Model.create(body);
    return { success: true, output: object }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const getObjects = async ({ Model }) => {
  try {
    const objects = await Model.findAll();
    return { success: true, output: objects }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const getObjectById = async ({ id }, { Model, modelName }) => {
  try {
    const object = await Model.findByPk(id);
    return { success: true, output: object }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const updateObject = async ({ id }, body, { Model, modelName }) => {
  try {
    const [updated] = await Model.update(body, {
      where: { id }
    });
    if (updated) {
      const updatedObject = await Model.findByPk(id);
      return { success: true, output: updatedObject }
    } else {
      return { success: false, error: `Object ${modelName} with id ${id} not found` }
    }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

export const deleteObject = async ({ id }, { Model, modelName }) => {
  try {
    const deleted = await Model.destroy({
      where: { id }
    });
    if (deleted) {
      return { success: true }
    } else {
      return { success: false, error: `Object ${modelName} with id ${id} not found` }
    }
  } catch (error) {
    console.error(error.message)
    return { success: false, error: error.message }
  }
};

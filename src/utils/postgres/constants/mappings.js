import { Alarm } from "../../../models/alarm/alarm-model.js";
import { Configuration } from "../../../models/configuration/configuration-model.js";
import { initRoutes } from "../../../routes/object-routes.js";
import { ALARMS_ENDPOINT, CONFIGURATIONS_ENDPOINT, VERSIONS_ENDPOINT } from "./endpoints.js";
import { ALARM, CONFIGURATION, VERSION } from "../models/model-namse.js";
import { ALARMS_TABLE_NAME, CONFIGURATIONS_TABLE_NAME, VERSIONS_TABLE_NAME } from "../models/table-names.js";

export const TABLE_NAME = "tableName"
export const ENDPOINT = "endpoint"
export const MODEL = "model"
export const MODEL_NAME = "modelName"

export const MAPPING_TABLENAMES_MODEL = {
  [CONFIGURATIONS_TABLE_NAME]: CONFIGURATION,
  [ALARMS_TABLE_NAME]: ALARM,
  [VERSIONS_TABLE_NAME]: VERSION
}

export async function initMapping() {
  const mappingEndpointModel = {
    [CONFIGURATIONS_ENDPOINT]: {
      [TABLE_NAME]: [CONFIGURATIONS_TABLE_NAME],
      [MODEL]: Configuration,
      [MODEL_NAME]: [CONFIGURATION]
    },
    [ALARMS_ENDPOINT]: {
      [TABLE_NAME]: [ALARMS_TABLE_NAME],
      [MODEL]: Alarm
    },
  /*  [VERSIONS_ENDPOINT]: {
    [TABLE_NAME]: [VERSIONS],
    [MODEL]: [VERSION]
  }, */
  }
  await initRoutes(mappingEndpointModel)
}

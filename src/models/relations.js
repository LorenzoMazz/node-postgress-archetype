import { CONFIGURATION_ID, VERSION_ID } from "../utils/postgres/models/property-names.js";
import { Alarm } from "./alarm/alarm-model.js";
import { Configuration } from "./configuration/configuration-model.js";
import { Version } from "./version/version-model.js";

export async function createRelations() {
  Alarm.belongsTo(Configuration, { foreignKey: [CONFIGURATION_ID] });
  Configuration.hasMany(Alarm, { foreignKey: [CONFIGURATION_ID] });

  Configuration.belongsTo(Version, { foreignKey: [VERSION_ID] });
  Version.hasOne(Configuration, { foreignKey: [VERSION_ID] });
}

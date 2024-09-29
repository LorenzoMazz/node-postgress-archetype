import { DataTypes, literal } from 'sequelize';
import { sequelize } from '../../utils/postgres/sequelize.js';
import { ALARMS_TABLE_NAME, CONFIGURATIONS_TABLE_NAME } from '../../utils/postgres/models/table-names.js';
import { CONFIGURATION_ID, ID, NAME, PRIORITY, VERSION } from '../../utils/postgres/models/property-names.js';
import { GENERATE_RANDOM_UUID } from '../../utils/postgres/literals.js';
import { ALARM } from '../../utils/postgres/models/model-namse.js';
import { PRIORITY_VALUES } from '../../utils/postgres/models/enum.js';
import { validateName } from '../../utils/postgres/validations/alarm.js';

const TABLE_NAME = ALARMS_TABLE_NAME

export const Alarm = sequelize.define(ALARM, {
  [ID]: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: literal(GENERATE_RANDOM_UUID)
  },
  [NAME]: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      validateName(value) {
        return validateName(value)
      }
    },
  },
  [PRIORITY]: {
    type: DataTypes.ENUM(...PRIORITY_VALUES),
    allowNull: false,
  },
  [VERSION]: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  [CONFIGURATION_ID]: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: CONFIGURATIONS_TABLE_NAME,
      key: ID
    }
  }
}, {
  tableName: TABLE_NAME,
  timestamps: false
});

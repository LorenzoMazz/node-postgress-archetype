import { DataTypes, literal } from 'sequelize';
import { sequelize } from '../../utils/postgres/sequelize.js';
import { VERSIONS_TABLE_NAME } from '../../utils/postgres/models/table-names.js';
import { VERSION } from '../../utils/postgres/models/model-namse.js';
import { ID, MAJOR, MINOR, PATCH, VERSION_LIST } from '../../utils/postgres/models/property-names.js';
import { GENERATE_RANDOM_UUID } from '../../utils/postgres/literals.js';

export const Version = sequelize.define(VERSION, {
  [ID]: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: literal(GENERATE_RANDOM_UUID)
  },
  [MAJOR]: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  [MINOR]: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  [PATCH]: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  [VERSION_LIST]: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: []
  }
}, {
  tableName: VERSIONS_TABLE_NAME,
  timestamps: false
});

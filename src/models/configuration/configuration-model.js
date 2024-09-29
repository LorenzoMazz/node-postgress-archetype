import { DataTypes, literal } from 'sequelize';
import { sequelize } from '../../utils/postgres/sequelize.js';

import { CONFIGURATIONS_TABLE_NAME, VERSIONS_TABLE_NAME } from '../../utils/postgres/models/table-names.js';
import { ID, NAME, VERSION_ID } from '../../utils/postgres/models/property-names.js';
import { CONFIGURATION } from '../../utils/postgres/models/model-namse.js';
import { GENERATE_RANDOM_UUID } from '../../utils/postgres/literals.js';

const TABLE_NAME = CONFIGURATIONS_TABLE_NAME

const myCustomValidation = async ({ value, object }) => {
  const configurations = await Configuration.findAll();
  const id = object.id
  console.log(`I want to consider id ${id} in my validations,  all other object in my db ${configurations}, and the value ${value} of this property`)
}

export const Configuration = sequelize.define(CONFIGURATION, {
  [ID]: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    validate: {
      async myCustomValidation(value) {
        return await myCustomValidation({ value, object: this });
      }
    },
    defaultValue: literal(GENERATE_RANDOM_UUID)
  },
  [NAME]: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  [VERSION_ID]: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: VERSIONS_TABLE_NAME,
      key: ID
    }
  },
}, {
  tableName: TABLE_NAME,
  timestamps: false
});

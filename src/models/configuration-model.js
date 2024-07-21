import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/postgres/sequelize.js';

export const Configuration = sequelize.define('Configuration', {
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  versione: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'configurations',
  timestamps: false
});

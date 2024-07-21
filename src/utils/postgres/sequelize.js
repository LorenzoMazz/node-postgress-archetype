import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

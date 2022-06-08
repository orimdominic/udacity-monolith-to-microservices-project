import { ISequelizeConfig, Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
console.log(
  'username:', config.username,
  'password:',config.password,
  'database:',config.database
);

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: config.dialect,
  storage: ":memory:",
} as ISequelizeConfig);

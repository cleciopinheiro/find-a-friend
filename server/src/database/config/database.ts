import { Options } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const config: Options = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  dialect: "postgres",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

export = config;

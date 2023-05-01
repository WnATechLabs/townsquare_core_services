import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const {
  NODE_ENV,
  APP_PORT,
  DB_USERS_PORT,
  DB_USERS_HOST,
  DB_USERS_USER,
  DB_USERS_PASS,
  DB_USERS_DATABASE,
  DB_AUTH_PORT,
  DB_AUTH_HOST,
  DB_AUTH_USER,
  DB_AUTH_PASS,
  DB_AUTH_DATABASE,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
} = process.env;

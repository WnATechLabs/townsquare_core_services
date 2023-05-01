import { cleanEnv, port, str, host } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ["test", "development", "staging", "production"],
    }),
    APP_PORT: port(),
    DB_USERS_PORT: port(),
    DB_USERS_HOST: host(),
    DB_USERS_USER: str(),
    DB_USERS_PASS: str(),
    DB_USERS_DATABASE: str(),
    DB_AUTH_PORT: port(),
    DB_AUTH_HOST: host(),
    DB_AUTH_USER: str(),
    DB_AUTH_PASS: str(),
    DB_AUTH_DATABASE: str(),
    LOG_FORMAT: str(),
    LOG_DIR: str(),
    ORIGIN: str(),
  });
}

export default validateEnv;

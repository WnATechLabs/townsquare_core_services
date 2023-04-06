import { cleanEnv, port, str, host } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ["test", "development", "staging", "production"],
    }),
    PORT: port(),
    DB_HOST: host(),
    DB_USER: str(),
    DB_PASSWORD: str(),
    DB_DATABASE: str(),
    SECRET_KEY: str(),
    LOG_FORMAT: str(),
    LOG_DIR: str(),
    ORIGIN: str(),
  });
}

export default validateEnv;

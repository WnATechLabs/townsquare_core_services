import App from "./app";
import validateEnv from "./shared/utils/validateEnv";
import { v1_0 } from "./api/components/core";

try {
  validateEnv();
  const app = new App([new v1_0.Router()]);
  app.listen();
} catch (e) {
  console.error("Fatal error, server could not be initialized");
  console.error(e);
}

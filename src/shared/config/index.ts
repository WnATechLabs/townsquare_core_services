import * as e from './../../environment'

export const config = {
  app: {
    env: e["NODE_ENV"],
    logDir: e["LOG_DIR"],
    logFormat: e["LOG_FORMAT"],
    origin: e["ORIGIN"],
    port: e["APP_PORT"],
  }
}

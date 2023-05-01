import * as e from './environment'

export const config = {
  app: {
    env: e["NODE_ENV"],
  },
  auth: {
    db: {
      port: Number(e["DB_AUTH_PORT"]),
      host: e["DB_AUTH_HOST"],
      user: e["DB_AUTH_USER"],
      pass: e["DB_AUTH_PASS"],
      name: e["DB_AUTH_DATABASE"]
    }
  }
}

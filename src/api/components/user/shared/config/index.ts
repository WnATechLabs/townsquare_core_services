import * as e from './../../environment/'

export const config = {
  app: {
    env: e["NODE_ENV"],
  },
  users: {
    db: {
      port: Number(e["DB_USERS_PORT"]),
      host: e["DB_USERS_HOST"],
      user: e["DB_USERS_USER"],
      pass: e["DB_USERS_PASS"],
      name: e["DB_USERS_DATABASE"]
    }
  }
}

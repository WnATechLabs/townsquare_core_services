import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { config } from './../config' 

const dbConfig = config.auth.db;

const dbPool = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.pass,
  database: dbConfig.name,
});


export const db = drizzle(dbPool);

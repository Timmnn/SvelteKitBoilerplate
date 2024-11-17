import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
const { Client } = pg;
import * as schema from "../../drizzle/schema";
import dotenv from "dotenv";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

dotenv.config({
  path: ".env",
});

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

let _db: NodePgDatabase<typeof schema> | null = null;
export default async function useDb(): Promise<{
  db: NodePgDatabase<typeof schema> | null;
  schema: typeof schema;
}> {
  if (_db) {
    return {
      db: _db,
      schema,
    };
  }

  if (
    !POSTGRES_HOST ||
    !POSTGRES_PORT ||
    !POSTGRES_USER ||
    !POSTGRES_PASSWORD ||
    !POSTGRES_DB
  ) {
    return {
      db: null,
      schema,
    };
  }

  try {
    const client = new Client({
      host: POSTGRES_HOST,
      port: parseInt(POSTGRES_PORT),
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
    });

    await client.connect();
    // initialize the database with the schema
    const db = drizzle(client, {
      schema,
    });

    return {
      db,
      schema,
    };
  } catch (e) {
    console.error(e);
    return {
      db: null,
      schema,
    };
  }
}

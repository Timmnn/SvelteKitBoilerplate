import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
   path: "../.env",
});

export default defineConfig({
   dialect: "postgresql",
   schema: "schema.ts",
   out: "./.drizzle_out",
   dbCredentials: {
      host: "localhost",
      port: 5432,
      user: process.env.POSTGRES_USER as string,
      password: process.env.POSTGRES_PASSWORD as string,
      database: process.env.POSTGRES_DB as string,
      ssl: false,
   },
});

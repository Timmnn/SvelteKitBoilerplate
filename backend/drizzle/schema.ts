import { integer, pgEnum, pgTable, serial, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
   id: serial("id").primaryKey(),
   email: varchar("email").unique().notNull(),
   username: varchar("username").unique().notNull(),
});

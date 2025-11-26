import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const UserSchema = pgTable("Users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
});

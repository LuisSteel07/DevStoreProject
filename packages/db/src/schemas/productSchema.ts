import { integer, pgTable, text, serial } from "drizzle-orm/pg-core";

export const ProductSchema = pgTable("Products", {
  id: serial().primaryKey(),
  description: text().notNull(),
  name: text().notNull(),
  photo: text().notNull(),
  amount: integer().notNull(),
  price: integer().notNull(),
});

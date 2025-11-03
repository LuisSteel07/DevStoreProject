import { doublePrecision, integer, pgTable, text } from "drizzle-orm/pg-core";

export const ProductSchema = pgTable("Products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  description: text().notNull(),
  name: text().notNull(),
  photo: text().notNull(),
  amount: integer().notNull(),
  price: doublePrecision().notNull(),
});

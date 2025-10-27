import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./src/schemas/userSchema.ts", "./src/schemas/productSchema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.LOCAL_DATABASE_URL!,
  },
});

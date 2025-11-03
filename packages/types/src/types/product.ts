import { z } from "zod";

export const Product = z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().max(255),
  amount: z.number(),
  price: z.number(),
  photo: z.string(),
});

export type TProduct = z.infer<typeof Product>;

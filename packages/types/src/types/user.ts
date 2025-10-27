import { z } from "zod";

export const User = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type TUser = z.infer<typeof User>;

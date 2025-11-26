import { Router, type Request, type Response } from "express";
import { User } from "@repo/types/dist/types/user";
import { db } from "@repo/db/dist";
import { UserSchema } from "@repo/db/dist/schemas";
import bcrypt from "bcryptjs";

const InsertUserRoute = Router();

InsertUserRoute.post("/insert", async (req: Request, res: Response) => {
  try {
    const result = User.safeParse(req.body);

    if (!result.success) return res.status(400).json({ error: result.error });

    result.data.password = bcrypt.hashSync(result.data.password, 10);

    const returning = await db
      .insert(UserSchema)
      .values({
        ...result.data,
      })
      .returning();

    if (!returning[0])
      return res.status(400).json({ error: "Error al ingresar el usuario" });

    return res.status(200).json({
      message: "Usuario insertado",
      usuario: returning[0].email,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

export default InsertUserRoute;

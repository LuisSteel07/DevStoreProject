import { Router, type Request, type Response } from "express";
import { db } from "@repo/db/dist";
import { UserSchema } from "@repo/db/dist/schemas";

const GetUserRoute = Router();

GetUserRoute.get("/get", async (req: Request, res: Response) => {
  try {
    const returning = await db.select().from(UserSchema);

    if (!returning[0])
      return res.status(400).json({ error: "Listado de usuarios vacio" });

    return res.status(200).json({
      message: "Usuario insertado",
      usuarios: returning,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

export default GetUserRoute;

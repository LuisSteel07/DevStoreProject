import { Router, type Request, type Response } from "express";
import { db, DrizzleORM } from "@repo/db/dist";
import { UserSchema } from "@repo/db/dist/schemas";

const DeleteUserRoute = Router();

DeleteUserRoute.post("/delete", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id)
      return res.status(400).json({ error: "No se pudo eliminar el usuario" });

    const returning = await db
      .delete(UserSchema)
      .where(DrizzleORM.eq(UserSchema.id, id))
      .returning();

    if (!returning[0])
      return res.status(400).json({ error: "Error al eliminar el usuario" });

    return res.status(200).json({
      message: "Usuario eliminado",
      usuario: returning[0].email,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

export default DeleteUserRoute;

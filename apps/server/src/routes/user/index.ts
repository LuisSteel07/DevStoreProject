import { Router } from "express";
import GetUserRoute from "./get-user";
import InsertUserRoute from "./insert-user";
import DeleteUserRoute from "./delete-user";

const UserRoute = Router();

UserRoute.use("/user", GetUserRoute);
UserRoute.use("/user", InsertUserRoute);
UserRoute.use("/user", DeleteUserRoute);

export default UserRoute;

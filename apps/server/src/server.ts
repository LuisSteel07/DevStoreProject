import "dotenv/config";
import express from "express";
import cors from "cors";
import UserRoute from "./routes/user";
import ProductRoute from "./routes/product";

const app = express();
app.use(express.json());
app.use(cors());

app.use(ProductRoute);
app.use(UserRoute);

app.listen(process.env.LOCAL_PORT!, () => {
  console.log(
    `Listening Server in http://localhost:${process.env.LOCAL_PORT!}`
  );
});

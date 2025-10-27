import "dotenv/config";
import express from "express";
import productRoute from "./routes/product";

const app = express();
app.use(express.json())

app.use(productRoute);

app.listen(process.env.LOCAL_PORT!, () => {
  console.log(
    `Listening Server in http://localhost:${process.env.LOCAL_PORT!}`
  );
});

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserRouter } from "./routes/users.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", UserRouter);

mongoose
  .connect(
    "mongodb+srv://kaku26301:123qwe@newcluster.ajv8o10.mongodb.net/newCluster?retryWrites=true&w=majority"
  )

  .then((conn) => console.log(conn, ">>>>>>>>>>"))
  .catch((error) => console.log(error, "jkkkkkkkkk"));

app.listen(3500, () => {
  console.log("server started at 8500");
});

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserRouter } from "./routes/users.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", UserRouter);

mongoose.connect(
  "mongodb+srv://kaku26301:bikusabu007@cluster0.py7aolx.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

app.listen(3500, () => {
  console.log("server started");
});

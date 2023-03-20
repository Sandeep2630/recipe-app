import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    requried: true,
    unique: true,
  },
  password: {
    type: String,
    requried: true,
  },
});
export const UserModel = mongoose.model("users", UserSchema);

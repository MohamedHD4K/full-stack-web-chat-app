import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 10,
    max: 300,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 200,
  },
  phone: {
    type: String,
    required: true,
    min: 11,
    max: 12,
  },
  image: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
    min: 0,
    max: 400,
  },
});

UserSchema.pre("save", async function (next) {
  const salt = bcryptjs.genSaltSync(10);
  const hashed = bcryptjs.hashSync(this.password, salt);
  this.password = hashed;
  next();
});

UserSchema.methods.getAuthToken = function () {
  return jwt.sign(this.toJSON(), process.env.JWT_SECRET);
};

UserSchema.methods.checkPassword = async function (password) {
  return bcryptjs.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

export default User;

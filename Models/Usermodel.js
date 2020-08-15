const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_KEY
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

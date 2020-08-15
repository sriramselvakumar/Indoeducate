const express = require("express");
const router = express.Router();
const User = require("../Models/Usermodel");
const bcrypt = require("bcrypt");

router.post("/user", async (req, res) => {
  const { email, password } = req.body;
  let user = User.findOne({ email });
  console.log(user);
  if (user.email) {
    return res.send("User already exists");
  }
  user = new User({
    email,
    password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = user.generateJWT();
  res.header("x-auth-token", token).send(token);
});

module.exports = router;

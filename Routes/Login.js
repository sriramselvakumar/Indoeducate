const express = require("express");
const router = express.Router();
const User = require("../Models/Usermodel");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user.email) {
    return res.send("error");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.send("error");
  }
  const token = user.generateJWT();
  res.header("x-auth-token", token).send(token);
});

module.exports = router;

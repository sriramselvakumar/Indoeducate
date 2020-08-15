const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
const uri = process.env.MONGODB_URI;
const Registration = require("./Routes/Registration");
const Login = require("./Routes/Login");

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("You are connected to Mongo");
});

app.use("/api/registration", Registration);
app.use("/api/login", Login);

const server = app.listen(port, () => {
  console.log(`Express Server running on port ${port}`);
});

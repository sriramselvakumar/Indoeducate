const express = require("express");
const router = express.Router();
const multer = require("multer");
const Resource = require("../Models/Resourcemodel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.post("/", upload.single("resource"), async (req, res) => {
  const { title, link } = req.body;
  const resource = new Resource({
    title,
    link,
    file: req.file.filename,
  });
  await resource.save();
});
router.post("/wofile", async (req, res) => {
  const { title, link } = req.body;
  const resource = new Resource({ title, link, file: "" });
  await resource.save();
});

router.get("/getAll", async (req, res) => {
  let resources = await Resource.find();
  resources = resources.reverse();
  res.send(resources);
});

module.exports = router;

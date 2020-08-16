const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String },
  file: { type: String },
});

const Resource = mongoose.model("Resource", ResourceSchema);

module.exports = Resource;

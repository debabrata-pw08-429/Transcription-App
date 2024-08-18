const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  uploadDateTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  link: {
    type: String,
    trim: true,
    default: "",
  },
});

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  episodes: {
    type: [episodeSchema],
    default: [],
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;

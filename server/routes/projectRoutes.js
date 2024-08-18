const express = require("express");
const {
  getProjects,
  createProject,
  updateProject,
  getProjectById,
} = require("../controllers/projectController");

const router = express.Router();

router.route("/projects").get(getProjects).post(createProject);
router.route("/projects/:id").put(updateProject);
router.route("/projects/:id").get(getProjectById);

module.exports = router;

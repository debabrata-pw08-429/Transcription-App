const Project = require("../models/projectModel");

// @desc Get a project by ID
// @route GET /api/projects/:id
// @access Public
const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all projects
// @route GET /api/projects
// @access Public
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create a new project
// @route POST /api/projects
// @access Public
const createProject = async (req, res) => {
  const { projectName, episodes } = req.body;

  if (!projectName) {
    return res.status(400).json({ message: "Project Name Can't be empty" });
  }

  try {
    const newProject = new Project({
      projectName,
      episodes,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update a project with a new episode
// @route PUT /api/projects/:id
// @access Public
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { episodes } = req.body;

  try {
    const project = await Project.findById(id);

    if (project) {
      project.episodes = [...project.episodes, ...episodes];
      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  getProjectById,
};

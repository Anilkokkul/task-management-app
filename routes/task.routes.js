const express = require("express");
const { getAllTasks, createTask } = require("../controllers/tasks.controller");

const router = express.Router();

//get all the tasks list route
router.get("/tasks", getAllTasks);

//create task route
router.post("/task", createTask);

module.exports = router;

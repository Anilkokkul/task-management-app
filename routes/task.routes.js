const express = require("express");
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");
const { isAuth } = require("../utils/authorization");

const router = express.Router();

//get all the tasks list route
router.get("/tasks", isAuth, getAllTasks);

//create task route
router.post("/task", isAuth, createTask);

//get a task by ID
router.get("/task/:id", isAuth, getTaskById);

//update task by Id
router.put("/task/:id", isAuth, updateTask);

//delete task by Id
router.delete("/task/:id", isAuth, deleteTask);

module.exports = router;

const Tasks = require("../model/task.model");

//controller for getting all tasks list
exports.getAllTasks = async (req, res) => {
  try {
    await Tasks.find() //query for all tasks
      .then((data) => {
        res.status(200).send({
          message: "Tasks fetched successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).send({
          message: "Error while retrieving tasks",
          error: error.message,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

//controller for creating new task
exports.createTask = (req, res) => {
  try {
    const task = new Tasks(req.body);
    task
      .save()
      .then((data) => {
        res.status(201).send({
          message: "Task created successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).send({
          message: "Error while creating task",
          error: error.message,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

//controller fot getting a task with given id
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findById(id);
    if (!task) {
      res.status(404).send({
        message: "Task not found",
        error: "Task with the given id does not exist",
      });
    }
    res.status(200).send({
      message: "Task retrieved successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

//controller for updating a task details with given Id
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, priority, status } = req.body;
    await Tasks.findByIdAndUpdate(
      id,
      {
        title,
        description,
        dueDate,
        priority,
        status,
      },
      {
        new: true,
      }
    )
      .then((data) => {
        res.status(200).send({
          message: "Task updated successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).send({
          message: "Error while updating task details",
          error: error.message,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

//deleting a task with Id
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Tasks.findByIdAndDelete(id);
    if (deletedTask) {
      res.status(200).send({
        message: "Task deleted successfully",
        data: deletedTask,
      });
    } else {
      res.status(404).send({
        message: "Task not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

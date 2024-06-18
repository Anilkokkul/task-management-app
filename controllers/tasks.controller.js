const Tasks = require("../model/task.model");

exports.getAllTasks = async (req, res) => {
  try {
    await Tasks.find()
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

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"],
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "inProgress", "completed"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tasks", taskSchema);

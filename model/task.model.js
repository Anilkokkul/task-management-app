const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();
const { db } = require("./db/db.connect");
const taskRoutes = require("./routes/task.routes");
const userRoutes = require("./routes/auth.routes");
const port = process.env.PORT || 8000;
db();

app.use(cookieParser());
app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.use("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to Task Management System API</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

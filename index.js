const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to Task Management System API</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

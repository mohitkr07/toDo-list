const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

app.get("/tasks", (req, res) => {
  res.send("MAK");
});

app.post("/addTask", (req, res) => {
  const ADD_QUERY = `insert into todotaskmanager.tasks (task) values ('${req.body.task}')`;
  console.log("Running query: "+ req.body.task);
  db.query(ADD_QUERY, (err) => {
    if (err) console.log(err);
    else res.send("task has been added");
  });
});

app.get("/deleteTask", (req, res) => {
  res.send("delete task");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

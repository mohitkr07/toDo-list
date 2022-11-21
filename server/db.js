const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "todotaskmanager",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database: " + err);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = connection;

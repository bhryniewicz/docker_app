const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "mysql_db",
  user: "MYSQL_USER",
  password: "MYSQL_PASSWORD",
  database: "breakfasts",
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello breakfasts");
});

app.get("/get", (req, res) => {
  const query = "select * from breakfast_list";
  db.query(query, (err, result) => {
    res.send(result);
  });
});

app.post("/insert", (req, res) => {
  const query =
    "insert into breakfast_list (`breakfastName`, `calories`) values (?)";
  const values = [req.body.breakfastName, req.body.calories];
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Breakfast has been added");
  });
});

app.listen("3001", () => {});

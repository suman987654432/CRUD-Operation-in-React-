const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const stuRouter = require("./routes/studentRoute");
mongoose.connect("mongodb://127.0.0.1:27017/suman").then(() => {
  console.log("database connected ");
});

const teacherStu = require("./routes/teacherRoute");
app.set("view engine", "ejs");
app.use("/teacher", teacherStu);
app.use("/students", stuRouter);

app.listen(9000, () => {
  console.log("server start");
});

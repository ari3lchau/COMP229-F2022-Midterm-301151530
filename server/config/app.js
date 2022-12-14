/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: COMP229-F2022-MIDTERM-301151530
WEB APP NAME:https://comp229-f2022-3008185557.herokuapp.com/
Midterm lab Assignment
*/


//setting all modules for the project
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

// import "mongoose" - required for DB Access
let mongoose = require("mongoose");
// URI getting the model
let DB = require("./db");

mongoose.connect(process.env.URI || DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//establishing connectino to mongoose
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Database Connected!...");
});

// define routers
let indexRouter = require("../routes/index"); // top level routes
let employeesRouter = require("../routes/employee"); // routes for employees

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /client
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));


// route redirects
app.use("/", indexRouter);
app.use("/employee-list", employeesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

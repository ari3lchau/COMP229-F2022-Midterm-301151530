let mongoose = require("mongoose");
/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: COMP229-F2022-MIDTERM-301151530
WEB APP NAME:https://comp229-f2022-3008185557.herokuapp.com/
Midterm lab Assignment
*/

// create a model for employee class
let employeeModel = mongoose.Schema(
  {
    employeeid: Number,
    name: String,
    department: String,
    designation: String,
    salary: Number
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", employeeModel);

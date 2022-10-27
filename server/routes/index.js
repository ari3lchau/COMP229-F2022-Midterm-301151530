/*
Full name: Ariel Chau
Student Id: 301151530
Course Name: COMP 229 WEB Development
File name: COMP229-F2022-MIDTERM-301151530
WEB APP NAME:https://comp229-f2022-3008185557.herokuapp.com/
Midterm lab Assignment
*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let employee = require("../models/employee");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    employees: "",
  });
});

module.exports = router;

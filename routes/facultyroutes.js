const facultycontroller = require('../controllers/facultycontrollers')

const express = require("express")
const facultyrouter = express.Router()

facultyrouter.post("/insertfaculty",facultycontroller.insertfaculty)
facultyrouter.post("/checkfacultylogin",facultycontroller.checkfacultylogin)
facultyrouter.get("/getcoursebyid/:facultyid",facultycontroller.getmappedcoursebyfacultyid)

module.exports = facultyrouter
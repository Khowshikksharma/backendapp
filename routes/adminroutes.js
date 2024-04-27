const admincontroller = require("../controllers/admincontrollers")

const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get('/viewstudents',admincontroller.viewstudents)
adminrouter.get('/viewfaculty',admincontroller.viewfaculty)
adminrouter.get('/viewcourses',admincontroller.viewcourses)
adminrouter.delete("/deletestudent/:email",admincontroller.deletestudent)
adminrouter.delete("/deletecourse/:ccode",admincontroller.deletecourse)
adminrouter.delete("/deletefaculty/:email",admincontroller.deletefaculty)
adminrouter.get("/analysis",admincontroller.analysis)
adminrouter.get("/studentprofile/:email",admincontroller.studentprofile)
adminrouter.post("/updatestudent/:email",admincontroller.updatestudent)
adminrouter.get("/coursedata/:ccode",admincontroller.coursedata)
adminrouter.post("/updatecourse/:ccode",admincontroller.updatecourse)
adminrouter.get("/facultyprofile/:email",admincontroller.facultyprofile)
adminrouter.post("/updatefaculty/:email",admincontroller.updatefaculty)
adminrouter.post("/insertfcm",admincontroller.fcmapping)
adminrouter.get("/viewfcmapping",admincontroller.viewfcmapping)
adminrouter.get("/getfaculty/:facultyid",admincontroller.getfacultybasedonid)
adminrouter.get("/getcourse/:ccode",admincontroller.getcoursebasedonid)
adminrouter.delete("/deletemapping/:fmapid",admincontroller.deleteframing)
adminrouter.get("/framedata/:fmapid",admincontroller.framebyid)
adminrouter.post("/updateframe/:fmapid",admincontroller.updateframe)

module.exports = adminrouter
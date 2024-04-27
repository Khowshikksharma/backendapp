const coursecontrollers = require('../controllers/coursecontrollers')

const express = require('express')
const courserouter = express.Router()

courserouter.post("/insertcourse",coursecontrollers.insertcourse)

module.exports = courserouter
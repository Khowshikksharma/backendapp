const Course = require('../models/Course')

const insertcourse = async(request,response) =>{
    try {
      const input = request.body;
      const course = new Course(input)
      await course.save()
      response.send('Registered Successfully')
    } catch (e) {
      response.status(500).send(e.message);
    }
  };

module.exports = {insertcourse}
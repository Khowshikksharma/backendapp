const Admin = require("../models/Admin")
const Student = require("../models/Student")
const Faculty = require("../models/Faculty")
const Course = require("../models/Course")
const FCMapping = require("../models/FacultuyCourseMapping")

const checkadminlogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     console.log(input)
     const admin = await Admin.findOne(input)
     response.json(admin)
   } 
   catch (error) 
   {
     response.status(500).send(error.message); //200 - success || 500 - error || 404 - not found 
   }
 };

 const viewstudents = async(request,response) =>{
  try {
    const students = await Student.find();
    if(students.length==0){
      response.send("DATA NOT FOUND");
    }
    else{
      response.json(students);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
 }

 const viewfaculty = async(request,response) =>{
  try {
    const facultys = await Faculty.find();
    if(facultys.length==0){
      response.send("DATA NOT FOUND");
    }
    else{
      response.json(facultys);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
 }

 const getfacultybasedonid = async(request,response) =>{
  try {
    const facultyid = request.params.facultyid
    const  faculty = await Faculty.findOne({'facultyid':facultyid})
    if(faculty)
      response.json(faculty)
    else
      response.send("Data Not Found")
  } catch (error) {
    response.status(500).send(error.message);
  }
 }

 const viewcourses = async(request,response) =>{
  try {
    const courses = await Course.find();
    if(courses.length==0){
      response.send("DATA NOT FOUND");
    }
    else{
      response.json(courses);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
 }

 const getcoursebasedonid = async(request,response) =>{
  try {
    const ccode = request.params.ccode
    const  course = await Course.findOne({"ccode":ccode})
    if(course)
      response.json(course)
    else
      response.send("Data Not Found")
  } catch (error) {
    response.status(500).send(error.message);
  }
 }

 const deletestudent = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const student = await Student.findOne({"email":email})
      if(student!=null)
      {
        await Student.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deletecourse = async (request, response) => 
 {
    try 
    {
      const ccode = request.params.ccode
      const course = await Course.findOne({"ccode":ccode})
      if(course!=null)
      {
        await Course.deleteOne({"ccode":ccode})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Course Code Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deletefaculty = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const faculty = await Faculty.findOne({"email":email})
      if(faculty!=null)
      {
        await Faculty.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const analysis = async (req, res) => {
    try 
    {
        const studentCount = await Student.countDocuments();
        const facultyCount = await Faculty.countDocuments();
        res.json({studentCount,facultyCount});
    } 
    catch (error) 
    {
        res.status(500).send(error.message);
    }
  };

  const updatestudent = async (request, response) => {
    try {
        const email = request.params.email;
        const updatedData = request.body; // Assuming client sends updated data in the request body

        const student = await Student.findOne({ email });
        if (!student) {
            return response.status(404).send('Student not found with the provided email id');
        }

        // Update student's profile with the new data
        for (const key in updatedData) {
            if (key !== 'email' && updatedData[key]) {
                student[key] = updatedData[key];
            }
        }

        await student.save();
        return response.status(200).send('Student Profile Updated Successfully');
    } catch (error) {
        return response.status(500).send(error.message);
    }
  };

  

  const studentprofile = async (request, response) => 
   {
      try 
      {
        const email = request.params.email
        const student = await Student.findOne({email})
        if(student)
        {
          response.json(student)
        }
        else
        {
          return response.status(200).send('Student not found with the provided email id');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };

    const coursedata = async (request, response) => 
   {
      try 
      {
        const ccode = request.params.ccode
        const course = await Course.findOne({ccode})
        if(course)
        {
          response.json(course)
        }
        else
        {
          return response.status(200).send('Course not found with the provided Course Code');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };

    const updatecourse = async (request, response) => {
      try {
          const ccode = request.params.ccode;
          const updatedData = request.body; // Assuming client sends updated data in the request body
  
          const course = await Course.findOne({ ccode });
          if (!course) {
              return response.status(404).send('Course not found with the provided Course Code');
          }
  
          for (const key in updatedData) {
              if (key !== 'email' && updatedData[key]) {
                  course[key] = updatedData[key];
              }
          }
  
          await course.save();
          return response.status(200).send('Course Data Updated Successfully');
      } catch (error) {
          return response.status(500).send(error.message);
      }
  };

  const updatefaculty = async (request, response) => {
    try {
        const email = request.params.email;
        const updatedData = request.body; // Assuming client sends updated data in the request body

        const faculty = await Faculty.findOne({ email });
        if (!faculty) {
            return response.status(404).send('Faculty not found with the provided email id');
        }

        // Update student's profile with the new data
        for (const key in updatedData) {
            if (key !== 'email' && updatedData[key]) {
                faculty[key] = updatedData[key];
            }
        }

        await faculty.save();
        return response.status(200).send('Faculty Profile Updated Successfully');
    } catch (error) {
        return response.status(500).send(error.message);
    }
  };

  

  const facultyprofile = async (request, response) => 
   {
      try 
      {
        const email = request.params.email
        const faculty = await Faculty.findOne({email})
        if(faculty)
        {
          response.json(faculty)
        }
        else
        {
          return response.status(200).send('Faculty not found with the provided email id');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };

    const fcmapping = async(request,response) =>{
      try {
        const input = request.body;
        const course = new FCMapping(input)
        await course.save()
        response.send('Added Successfully')
      } catch (e) {
        response.status(500).send(e.message);
      }
    }

    const viewfcmapping = async(request,response) =>{
      try {
        const courses = await FCMapping.find();
        if(courses.length==0){
          response.send("DATA NOT FOUND");
        }
        else{
          response.json(courses);
        }
      } catch (error) {
        response.status(500).send(error.message);
      }
    }

    const deleteframing = async(request,response) =>{
      try 
      {
        const fmapid = request.params.fmapid
        const frame = await FCMapping.findOne({"fmapid":fmapid})
        if(frame!=null)
        {
          await FCMapping.deleteOne({"fmapid":fmapid})
          response.send("Deleted Successfully")
        }
        else
        {
          response.send("Mapping Not Found")
        }

      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    }

    const framebyid = async(request,response) =>{
      try {
        const fmapid = request.params.fmapid
        const frame = await FCMapping.findOne({"fmapid":fmapid})
        if(frame)
        {
          response.json(frame)
        }else{
          return response.status(200).send('Frame not found on the given ID');
        }
      } catch (error) {
        response.status(500).send(error.message);
      }
    }
    const updateframe = async (request, response) => {
      try {
          const fmapid = request.params.fmapid
          const updatedData = request.body; // Assuming client sends updated data in the request body
  
          const frame = await FCMapping.findOne({ email });
          if (!frame) {
              return response.status(404).send('Frame not found with the provided id');
          }
  
          // Update student's profile with the new data
          for (const key in updatedData) {
              if (key !== 'fmapid' && updatedData[key]) {
                  faculty[key] = updatedData[key];
              }
          }
  
          await frame.save();
          return response.status(200).send('Framing Updated Successfully');
      } catch (error) {
          return response.status(500).send(error.message);
      }
    };


 module.exports = {
  checkadminlogin,
  viewstudents,
  viewfaculty,
  viewcourses,
  deletestudent,
  deletecourse,
  deletefaculty,
  analysis,
  updatestudent,
  studentprofile,
  coursedata,
  updatecourse,
  updatefaculty,
  facultyprofile,
  fcmapping,
  viewfcmapping,
  getcoursebasedonid,
  getfacultybasedonid,
  deleteframing,
  framebyid,
  updateframe,
};

const Faculty = require('../models/Faculty')
const FCMapping = require('../models/FacultuyCourseMapping')

const insertfaculty = async(request,response) =>{
  try {
    const input = request.body;
    const faculty = new Faculty(input)
    await faculty.save()
    response.send('Registered Successfully')
  } catch (e) {
    response.status(500).send(e.message);
  }
};

const checkfacultylogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     console.log(input)
     const faculty = await Faculty.findOne(input)
     response.json(faculty)
   } 
   catch (error) 
   {
     response.status(500).send(error.message); //200 - success || 500 - error || 404 - not found 
   }
 };

 const getmappedcoursebyfacultyid = async(request,response) =>{
  try {
    const facultyid = request.params.facultyid
    const mappedcourses = await FCMapping.find({"facultyid":facultyid})
    if(mappedcourses){
      response.json(mappedcourses)
    }else{
      return response.status(200).send('No Courses are Mapped to the given Faculty');
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
 }

module.exports={insertfaculty,checkfacultylogin,getmappedcoursebyfacultyid}
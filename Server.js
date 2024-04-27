const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// const dburl = "mongodb://localhost:27017/sdp4"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to DB Successfully")
// }).catch((e) => {
//     console.log(e.message)
// });

const dburl = "mongodb+srv://klu:klu@cluster0.pbhejrv.mongodb.net/sdp4?retryWrites=true&w=majority"
mongoose.connect(dburl).then(() => {
    console.log("Connected to MongoDB Atlas Successfully")
}).catch((e) => {
    console.log(e.message)
});

const app = express()
app.use(express.json())  //to parse JSON data
app.use(cors())
const studentrouter = require('./routes/studentroutes')
const facultyrouter = require('./routes/facultyroutes')
const adminrouter  = require('./routes/adminroutes')
const courserouter = require('./routes/courseroutes')
app.use("",studentrouter)
app.use("",facultyrouter)
app.use("",adminrouter)
app.use("",courserouter)

const port = 2032
app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`)
})

const mongoose = require('mongoose')

const facultyschema = new mongoose.Schema({
    facultyid:{
        type:String,
        required:true,
        unique:true,
        default: ()=> generateRandomId()
    },
    fullname:{
        type:String,
        required:true
    },
    dob:{
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true,
        enum: ['male', 'female', 'others']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phno:{
        type: String,
        required: true,
        unique:true
    },
    degree:{
        type: [String],
        require: true
    },
    branch:{
        type: String,
        require: true
    },
    experience:{
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
})

const faculty = mongoose.model('Faculty',facultyschema)

function generateRandomId() {
    return Math.floor(Math.random() * 90000) + 10000;
}

module.exports = faculty
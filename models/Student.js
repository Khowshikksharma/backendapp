const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    studentid:{
        type: String,
        required: true,
        unique: true,
        default: function() {
            return generateRandomId(this.ay); // Passing 'ay' to the function
        }
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
    fathername: {
        type:String,
        required:true
    },
    fatherphno: {
        type: String,
        required: true,
    },
    mothername: {
        type: String,
        required: true
    },
    motherphno: {
        type: String,
        required: true,
    },
    aadharnumber:{
        type: String,
        required: true,
        unique: true
    },
    // tenthid:{
    //     type: String,
    //     required: true
    // },
    // tenthmarks:{
    //     type: Number,
    //     required: true
    // },
    // twelvethid:{
    //     type: String,
    //     required: true
    // },
    // twelvethmarks:{
    //     type: Number,
    //     required: true
    // },
    address:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    ay:{
        type:String,
        required: true
    },
    branch:{
        type:String,
        required:true
    }
})
const student = mongoose.model('Student', studentschema);

function generateRandomId(ay) {
    const min = 10000000;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return  ay + randomNumber;
}

module.exports = student;
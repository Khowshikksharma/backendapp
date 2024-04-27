const mongoose = require("mongoose")

const courseschema = new mongoose.Schema({
    dept:{
        type:String,
        required:true
    },
    prog:{
        type:String,
        required:true
    },
    ay:{
        type:String,
        required: true
    },
    semester:{
        type:String,
        required:true
    },
    year:{
        type:Number, 
        required:true
    },
    ccode:{
        type:String,
        requird:true,
        unique:true
    },
    ctitle:{
        type:String,
        required:true
    },
    cshortcut:{
        type:String,
        required:true
    },
    ltps:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        requird:true
    }
})

const course = mongoose.model('Course',courseschema)

module.exports = course
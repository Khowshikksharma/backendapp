const mongoose = require("mongoose")

const adminschema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role:{
        type :String ,
        required:true,
        default:'admin'
    }
  });

const admin = mongoose.model('Admin', adminschema);

module.exports = admin;
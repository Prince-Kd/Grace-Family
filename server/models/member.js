const mongoose = require('mongoose');

//schema of member details to be added to database//
const MemberSchema = mongoose.Schema({
    ID:{type:String, required:true, unique:1,},
    Surname:{type:String, required:true},
    Othernames:{type:String, required:true},
    DOB:{type:String, default:'N/A'},
    Gender:{type:String, required:true, enum: ["Male","Female"]},
    Postal_address:{type:String, default:'N/A'},
    Residence:{type:String, default:'N/A'},
    Hometown:{type:String, required:true},
    image: {type:String, required: true},
},{timestamps:true})

const Member = mongoose.model('Member',MemberSchema )

module.exports = { Member }
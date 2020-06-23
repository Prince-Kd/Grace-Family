const mongoose = require('mongoose');

const months = ['JANUARY','FEBURARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

const FuneralLevySchema = mongoose.Schema({
   memberId: {type:String, required: true}, 
   month: {type: String, required: true, enum: months},
   amount: {type:Number},
   status: {type:String, enum:['paid', 'not paid']},
   date: {type:String, default: Date.now().toString}
})


const FuneralLevy = mongoose.model('FuneralLevy',FuneralLevySchema )

module.exports = { FuneralLevy }
const mongoose = require('mongoose');
//const { Member } = require('../models/member');


//const months = ['JANUARY','FEBURARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];


const WelfareSchema = mongoose.Schema({
   name: {type:String},
   January:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   Feburary:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   March:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   April:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   May:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   June:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   July:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   August:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   September:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   October:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   November:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   },
   December:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String}
   }
})  


const Welfare = mongoose.model('Welfare',WelfareSchema )

module.exports = { Welfare }
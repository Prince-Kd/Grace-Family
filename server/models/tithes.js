const mongoose = require('mongoose');

const months = ['JANUARY','FEBURARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

const TitheSchema = mongoose.Schema({
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


const Tithe = mongoose.model('Tithe',TitheSchema )

module.exports = { Tithe }
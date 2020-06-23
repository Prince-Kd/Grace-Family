const express = require('express');
const mongoose = require('mongoose');
const { Tithe } = require('../models/tithes');
const { Welfare } = require('../models/welfare');
const { auth} = require('../middleware/auth');

const router = express.Router();

mongoose.set('useFindAndModify', false);

router.post('/api/accounts/payTithe', auth, (req, res) => {
    try{
        Tithe.findOneAndUpdate({'ID':req.body.ID},req.body,{new:true},(err,doc)=>{
            if(err) return res.status(400).send(err);
            res.json({
                success:true,
                doc
            })
        })
    }catch(err){
        throw(err);
    }
})

router.post('/api/accounts/payWelfare', auth, (req, res) => {
    try{
        Welfare.findOneAndUpdate(req.body.ID,req.body,{new:true},(err,doc)=>{
            if(err) return res.status(400).send(err);
            res.json({
                success:true,
                doc
            })
        })
    }catch(err){
        throw(err);
    }
})

module.exports = router;
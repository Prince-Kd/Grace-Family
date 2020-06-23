const express = require('express');
const { Member } = require('../models/member');
const { Welfare } = require('../models/welfare');
const { Tithe } = require('../models/tithes');
const { auth} = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb)=>{
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
}).single('image');



const router = express.Router();

//route to add details of new church member//
router.post('/api/add_member',auth,(req,res)=>{
    try{
	upload(req, res, (err) => {
		if (err) {
                	msg: err
        	} else {
		console.log(req.file);
        	const member = new Member({
			ID: req.body.ID,
			surname:req.body.surname,
			othernames: req.body.othernames,
			DOB: req.body.DOB,
			gender: req.body.gender,
			postal_address: req.body.postal_address,
			residence: req.body.residence,
			hometown: req.body.hometown,
			image: req.file
		})
        	const welfare = new Welfare({
            		'ID': req.body.ID,
            		'name' : `${req.body.Surname} ${req.body.Othernames}`
        	})
        	const tithe = new Tithe({
            		'ID': req.body.ID,
            		'name' : `${req.body.Surname} ${req.body.Othernames}`
        	})

   		 //saving member details in database 
    		welfare.save();   
    		tithe.save();
    		member.save((err,doc)=>{
        		if(err) return res.status(400).send(err);
        		res.status(200).json({
            		post:true,
           		MemberId: doc.ID
        		})
    		})
		}
    	})
    }catch(err){
        throw(err);
    }
})

//route to search for existing member by id  //
router.post('/api/search_member', auth, (req,res)=>{
    try{
        
        Member.findOne({'ID':req.body.ID},(err,member)=>{
            if(!member) return res.json({message:'Member not found'});
            res.send(member)
        })
    }catch(err){
        throw(err);
    }
})

//route to update or edit details of existing member//
router.post('/api/update_member', auth,(req,res)=>{
    try{
        Member.findOneAndUpdate(req.body.ID,req.body,{new:true},(err,doc)=>{
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

//route to delete all details of a member//
router.delete('/api/delete_member', auth,(req,res)=>{
   try{
    Member.findOneAndRemove(req.body.ID,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
   }catch(err){
       throw(err);
   }
})


module.exports = router;
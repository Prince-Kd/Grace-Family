const express = require('express');
const { User } = require('../models/user');
const { auth} = require('../middleware/auth');
const path = require('path');

const router = express.Router();


//route to register a user to the system//
router.post('/api/register', async (req,res)=>{
    try{
        //checking to see if user already exists in database by searching for email//
        const user = await User.findOne({'email':req.body.email});
         if(user) return res.status(400).send({error: 'user already exists'})

         //checking if username has already been taken//
        const userName = await User.findOne({'username':req.body.username});
         if(userName) return res.status(400).send({error: 'username already taken'})

        const   NewUser = new User(req.body);

        //saving new user details in database//
        NewUser.save((err,doc)=>{
            if(err) return res.json({success:false});
            res.status(200).sendFile(path.join(__dirname, '/form.html'));
        })
    }catch(err){
        throw(err);
    }
})

//route to login a user into the system//
router.post('/api/login', async (req,res)=>{
    try{
        //checking to see if username exists in database//
        const user = await User.findOne({'username':req.body.username})
        if(!user) return res.json({isAuth:false, message:'Auth failed, username not found'})

        //implementing method to compare user password with the one in the database//
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch){

                return res.redirect(path.join(__dirname, '/form.html'));
            }
            //implementing method to generate token to authenticate user//
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth', user.token).sendFile(path.join(__dirname, '/admin.html'));
            })
        })
    }catch(err){
        throw(err);
    }
})

//route to logout user//
router.get('/api/logout',auth, async (req,res)=>{
    try{
        req.user.deleteToken(req.token,(err,user)=>{
            if(err) return res.status(400).send(err);
            res.redirect(path.join(__dirname, '/form.html'));
        })
    }catch(err){
        throw(err);
    }

})

router.post('/api/sendMessage',async (req, res)=>{
    try{
        const message = "This message is from Mawuli. I am testing the software's messaging route. Thanks";

        const phoneNumbers = ['+233505527839','+233501096351','+233502729026'];
        const options = {
            to: phoneNumbers,
            message: message
        }

        sms.send(options).then(
                res.status(200).json({
                    success: 'Message sent succcessfully'
                })
        )

    }catch(err){
        res.status(400).json({success: 'messsage not sent'})
    }

})

module.exports = router;


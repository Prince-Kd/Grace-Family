const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const usersRoutes = require('./Routes/user');
const memberDetailsRoutes = require('./Routes/memberDetails');
const accountsRoutes = require('./Routes/accounts');
const app = express();
const {auth} = require('./middleware/auth');


//connecting the API to monogoose database//
mongoose.connect(config.DATABASE, {useNewUrlParser: true})
.then(() => {console.log("Mongodb connected")})
.catch(err => {console.log(err)});

//specifying ways to pass our data//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser()); 

app.use('/static', express.static('public'))

app.get('/api/login', function(req, res) {
  res.sendFile(path.join(__dirname, '/form.html'));

});

app.get('/api/logout', auth, function(req,res) {
  req.user.deleteToken(req.token,(err,user) => {
    if(err) return res.status(400).send(err);
    res.redirect('/api/login');
  })
});

app.get('/api/register', function(req, res) {
  res.sendFile(path.join(__dirname, '/registerAdmin.html'));

});

app.get('/api/add_member', (req, res) => {
  res.sendFile(path.join(__dirname, '/addMember.html'));
});

// USER ROUTES //
app.use('/', usersRoutes);

// MEMBER DETAILS ROUTES//
app.use('/', memberDetailsRoutes);

// ACCOUNTS ROUTES//
app.use('/', accountsRoutes);

//defining the port for the API// 
const port = process.env.PORT || 5000 ;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})
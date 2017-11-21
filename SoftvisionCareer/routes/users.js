const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Job = require('../models/job');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password: req.body.password,
        role: req.body.role
    });
    User.addUser(newUser, (err,user)=>{
        if(err){
            res.json({success:false, msg:'Failed to Register User'});
        } else {
            res.json({success:true, msg:'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
     const email = req.body.email;
     const password = req.body.password;

     User.getUserbyEmail(email, (err, user)=>{
         if(err)throw err;
         if(!user) {
             return res.json({success:false, msg:'User not found'});
         }

         User.comparePassword(password, user.password, (err, isMatch)=>{
             if(err) throw err;
             if(isMatch){
                 const token = jwt.sign({data:user}, config.secret, { //changed from user to data:user
                     expiresIn:608400 //1 week
                 });
                 res.json({
                    success:true,
                    token: 'JWT ' + token,
                    user:{
                        id:user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        role: user.role
                    }
                 });

             } else{
                 return res.json({success:false, msg: 'Wrong Password'});
             }
         });
     });
});

//Profile
router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    res.json({user:req.user});
});

//Profile
router.get('/test', (req, res, next) => {

});

// Get All Jobs
router.get('/Jobs', passport.authenticate('jwt',{session:false}), (req, res, next) => {
  Job.getAllJob((err, jobs) => {
    if(err) throw err;
    return res.json({success:true, jobs:jobs});
  });
});

//Register
router.post('/createjob', (req, res, next) => {

    const newJob = new Job({
      title: req.body.jobTitle,
      description: req.body.jobDescription,
      coreTechnology: req.body.coreTechnology,
      payroll: req.body.jobPayroll,
      location: req.body.jobLocation,
      postedByEmail: req.body.email,
      postedByName: req.body.name,
      datePosted: req.body.datePosted,
      numberOfOpening: req.body.NoOfOpening,
      isActive: req.body.isActive
    });

    Job.createJob(newJob, (err,job)=>{
        if(err){
            res.json({success:false, msg:'Job creation failed'});
        } else {
            res.json({success:true, msg:'Job created successfully'});
        }
    });
});

module.exports = router;

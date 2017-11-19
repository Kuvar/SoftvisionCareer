const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

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

module.exports = router;

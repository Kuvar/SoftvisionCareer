const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () =>{
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) =>{
  console.log('Database error ' + err);
});

const app = express();

const users = require('./routes/users')

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyparser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req,res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

// create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          xoauth2: xoauth2.createXOAuth2Generator({
            user: account.user, // generated ethereal user
            clientId: '547674249011-grt5m9kcpklkcl4e7k6877jlc0h5jol0.apps.googleusercontent.com'
            clientSecret: 'uOuwHWgtz5QER78Q4w9rjWgw',
            refreshToken: ''
          })
        }
    });

    var mailOptions = {
      from: 'Kuvar <kstest1111@gmail.com>',
      to: 'kuvarjava@gmail.com',
      subject: 'Node Mailer Test',
      text: 'Hello World!!'
    };

    transporter.sendMail(mailOptions, function(err, res){
      if (err) {
        console.log('Error');
      } else {
        console.log('Email Send');
      }
    });

// Start Server
app.listen(port, ()=>{
  console.log("Server started on port " + port);
});

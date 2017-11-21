const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Job Schema
const JobSchema = mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  description:{
    type:String,
    required: true
  },
  coreTechnology:{
    type:String,
    required: true
  },
  payroll:{
    type:String,
    required: true
  },
  location:{
    type:String,
    required: true
  },
  postedByEmail:{
    type:String,
    required: true
  },
  postedByName:{
    type:String,
    required: true
  },
  datePosted:{
    type:String,
    required: true
  },
  numberOfOpening:{
    type:String,
    required: true
  },
  isActive:{
    type:String,
    required: true
  }
});

const Job = module.exports = mongoose.model('Job', JobSchema);

module.exports.getJobById = function(id, callback){
  Job.findById(id, callback);
}

module.exports.getJobByEmail = function(email, callback){
  const query = { postedByEmail: email, isActive: '1' };
  Job.find(query, callback);
}

module.exports.getJobByTechnology = function(technology, callback){
  const query = { coreTechnology: technology, isActive: '1' };
  Job.find(query, callback);
}

module.exports.getAllJob = function(callback){
  const query = { isActive: '1' };
  Job.find(query, callback);
}

module.exports.createJob = function(newJob, callback){
  newJob.save(callback); 
}

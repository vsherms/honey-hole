'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  value: String,
  lifeGoal: String

  // goals: [{
  //   value: String,
  //   lifeGoal: String
  // }]
});

exports.default = mongoose.model('Goal', GoalSchema);
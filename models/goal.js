const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  value: String,
  lifeGoal:String

  // goals: [{
  //   value: String,
  //   lifeGoal: String
  // }]
});

export default mongoose.model('Goal', GoalSchema);

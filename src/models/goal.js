const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  goals: [{
    value: String,
    lifeGoal: String
  }]
});

export default mongoose.model('Goal', GoalSchema);

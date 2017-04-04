const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  value: String,
  lifeGoal:String,
  status: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

export default mongoose.model('Goal', GoalSchema);

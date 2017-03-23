const mongoose = require('mongoose');

const WheelSchema = new mongoose.Schema({
  date: Date,
  segs: [{
    value: String,
    score: Number
  }]

  // value1: String,
  // score1: Number,
  // value2: String,
  // score2: Number,
  // value3: String,
  // score3: Number,
  // value4: String,
  // score4: Number,
  // value5: String,
  // score5: Number,
  // value6: String,
  // score6: Number,
  // value7: String,
  // score7: Number,
  // value8: String,
  // score8: Number
});

export default mongoose.model('Wheel', WheelSchema);

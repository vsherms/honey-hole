const mongoose = require('mongoose');

const WheelSchema = new mongoose.Schema({
  date: Date,
  segs: [{
    value: String,
    score: Number
  }]
});

export default mongoose.model('Wheel', WheelSchema);

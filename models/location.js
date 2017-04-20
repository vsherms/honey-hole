const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  date: Date,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  title: String,
  temperature: Number,
  condition: String,
  notes: String,
  img: [{
    data: Buffer,
    contentType: String
  }],
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

export default mongoose.model('Location', LocationSchema);

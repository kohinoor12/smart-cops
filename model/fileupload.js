const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
  // Define your schema fields here
  Name: String,
  Dob: String,  // Assuming it's a Unix timestamp
  Gender: String,
  PrisonerCode: String,
  JailSerialNo: String,
  MajorHead: String,
  MinorHead: String,
});

module.exports = mongoose.model('MyModel', mySchema);

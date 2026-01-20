const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  address: { type: String, required: true },
  program: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true }, // change to String since form sends "1st", "2nd"
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('studentInfo', studentSchema);

const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender:{type: String, required: true},
  address: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  enquiryText: { type: String, required: true },
});

module.exports = mongoose.model('Enquiry', enquirySchema);

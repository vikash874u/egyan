const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  Program:{ type: String, required: true },
  Branch:{type: String, required: true},
  Year: { type: String, required: true },
  Subject: { type: String, required: true },
  Topic: { type: String, required: true },
  FileName:{ type: String, required: true },
});

module.exports = mongoose.model('Material', materialSchema);

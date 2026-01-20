const mongoose = require("mongoose");

const studentFeedbackSchema = new mongoose.Schema(
  {
    rollNo: { type: String, required: true },
    name: { type: String, required: true },
    program: String,
    branch: String,
    year: String,

    type: {
      type: String,
      enum: ["feedback", "complaint"],
      required: true,
    },

    rating: {
      type: Number,
      default: null, // only for feedback
    },

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "StudentFeedback",
  studentFeedbackSchema
);

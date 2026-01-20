const express = require("express");
const router = express.Router();
const StudentFeedback = require("../models/StudentFeedback");

/* =========================
   STUDENT: SUBMIT FEEDBACK / COMPLAINT
========================= */
router.post("/", async (req, res) => {
  try {
    const feedback = new StudentFeedback(req.body);
    await feedback.save();

    res.status(201).json({
      message: "Submitted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

/* =========================
   ADMIN: GET ALL FEEDBACKS
========================= */
router.get("/", async (req, res) => {
  try {
    const data = await StudentFeedback.find().sort({
      createdAt: -1,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

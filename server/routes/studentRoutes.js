const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Register student
router.post('/register', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.send({ message: 'Student is registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error registering student' });
  }
});

// Get all students
router.get('/all', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Error fetching students" });
  }
});
// Delete student
router.delete('/delete/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting student" });
  }
});
// Update student
router.put('/update/:id', async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Student updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating student" });
  }
});
router.post("/login", async (req, res) => {
  const { rollNo, password } = req.body;

  try {
    const student = await Student.findOne({ rollNo });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (student.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Optional: you can generate a token or session
    res.status(200).json({
      message: "Login successful",
      student: {
        rollNo: student.rollNo,
        name: student.name,
        program: student.program,
        branch: student.branch,
        year: student.year,
        email: student.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}); 

router.post("/change-password", async (req, res) => {
  try {
    const { rollNo, currentPassword, newPassword } = req.body;

    const student = await Student.findOne({ rollNo });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    if (student.password !== currentPassword) {
      return res.status(400).json({
        message: "Current password is incorrect",
      });
    }

    student.password = newPassword;
    await student.save();

    res.json({
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});


module.exports = router;

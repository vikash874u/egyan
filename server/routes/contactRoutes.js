const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST /api/enquiry/add
router.post('/add', async (req, res) => {
  try {
    const newEnquiry = new Contact(req.body);
    await newEnquiry.save();
    res.send({ message: 'Enquiry submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error saving enquiry' });
  }
});
// Get all students
router.get('/all', async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contact" });
  }
});
// Delete enquiry by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting enquiry" });
  }
});

module.exports = router;

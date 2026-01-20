const express = require("express");
const Material = require("../models/Material");
const multer = require("multer");
const path = require("path");

const router = express.Router();

/* ===========================
   FILE UPLOAD CONFIG
=========================== */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ===========================
   ADMIN: UPLOAD MATERIAL
=========================== */
router.post("/material", upload.single("FileName"), async (req, res) => {
  try {
    const { Program, Branch, Year, Subject, Topic } = req.body;

    const newMaterial = new Material({
      Program,
      Branch,
      Year,
      Subject,
      Topic,
      FileName: req.file.filename,
    });

    await newMaterial.save();
    res.send({ message: "Material uploaded successfully ✅" });
  } catch (error) {
    res.status(500).send({ error: "Upload failed ❌" });
  }
});

/* ===========================
   ADMIN: GET ALL MATERIALS
=========================== */
router.get("/material", async (req, res) => {
  try {
    const materials = await Material.find().sort({ createdAt: -1 });
    res.send(materials);
  } catch (error) {
    res.status(500).send({ error: "Cannot fetch materials ❌" });
  }
});

/* ===========================
   STUDENT: GET MATERIALS (FILTERED)
=========================== */
router.get("/student", async (req, res) => {
  try {
    const { program, branch, year } = req.query;

    const materials = await Material.find({
      Program: program,
      Branch: branch,
      Year: year,
    }).sort({ createdAt: -1 });

    res.send(materials);
  } catch (error) {
    res.status(500).send({ error: "Cannot fetch student materials ❌" });
  }
});

/* ===========================
   ADMIN: UPDATE MATERIAL
=========================== */
router.put("/material/:id", async (req, res) => {
  try {
    const updated = await Material.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updated);
  } catch (error) {
    res.status(500).send({ error: "Update failed ❌" });
  }
});

/* ===========================
   ADMIN: DELETE MATERIAL
=========================== */
router.delete("/material/:id", async (req, res) => {
  try {
    await Material.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted successfully ✔" });
  } catch (error) {
    res.status(500).send({ error: "Delete failed ❌" });
  }
});

module.exports = router;

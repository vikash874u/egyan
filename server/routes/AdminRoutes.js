const express = require("express");
const Admin = require("../models/Admin");
const router = express.Router();

/* ===========================
   ADMIN LOGIN
=========================== */

router.post("/adminlogin", async (req, res) => {
  try {
    const { adminId, password } = req.body;

    if (!adminId || !password) {
      return res.status(400).send({ message: "Missing credentials" });
    }

    const admin = await Admin.findOne({ adminId });

    if (!admin) {
      return res.status(404).send({ message: "Admin not exist" });
    }

    if (admin.password !== password) {
      return res.status(400).send({ message: "Wrong Password" });
    }

    // ✅ IMPORTANT: admin data send karo
    res.send({
      message: "Login successfully!",
      admin: {
        adminId: admin.adminId,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error login" });
  }
});

/* ===========================
   ADMIN CHANGE PASSWORD
=========================== */
router.post("/change-password", async (req, res) => {
  try {
    const { adminId, currentPassword, newPassword } = req.body;

    const admin = await Admin.findOne({ adminId });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    if (admin.password !== currentPassword) {
      return res.status(400).json({
        message: "Current password is incorrect",
      });
    }

    admin.password = newPassword;
    await admin.save();

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

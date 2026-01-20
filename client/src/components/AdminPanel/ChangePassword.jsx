import React, { useState } from "react";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import "./ChangePassword.css";

const ChangePassword = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admins/change-password",
        {
          adminId: admin.adminId, // ✅ SAME IDENTIFIER
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }
      );

      setSuccess(res.data.message);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Password change failed"
      );
    }
  };

  return (
    <div className="admin-password-page">
      <div className="admin-password-card">
        <h3>
          <FaLock /> Change Password
        </h3>

        {error && <div className="error-msg">{error}</div>}
        {success && <div className="success-msg">{success}</div>}

        <form onSubmit={handleSubmit}>
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLock,
} from "react-icons/fa";
import "./StudentChangePassword.css";
import axios from "axios";

const StudentChangePassword = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

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
      "http://localhost:5000/api/students/change-password",
      {
        rollNo: student.rollNo,
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


  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/studentlogin");
  };

  return (
    <div className="student-page">

      {/* Change Password Form */}
      <div className="password-wrapper">
        <div className="password-card">
          <h3>
            <FaLock /> Change Password
          </h3>
          <p className="subtitle">
            Update your account password securely
          </p>

          {error && <div className="error-msg">❌ {error}</div>}
          {success && <div className="success-msg">✅ {success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentChangePassword;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaBookOpen } from "react-icons/fa";
import "./StudentLogin.css";

const StudentLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    enrollment: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/students/login", {
        rollNo: formData.enrollment,
        password: formData.password,
      });

      localStorage.setItem("student", JSON.stringify(res.data.student));
      navigate("/student");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="student-login-bg">
      <div className="login-3d-wrapper">

        {/* LEFT – 3D CARTOON */}
        <div className="login-left">
          <FaBookOpen className="floating-book" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student"
            className="student-cartoon"
          />
          <h2>Welcome Back 👋</h2>
          <p>Access your study materials, results & dashboard</p>
        </div>

        {/* RIGHT – LOGIN CARD */}
        <div className="login-card-3d">
          <FaUserGraduate className="login-icon" />
          <h3>NOU Student Login</h3>

          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="enrollment"
              placeholder="Enrollment Number"
              value={formData.enrollment}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn-3d">
              Login
            </button>
          </form>

          <button className="back-btn" onClick={() => navigate("/")}>
            ⬅ Back to Home
          </button>
        </div>
      </div>

      <p className="login-footer">
        © 2025 Nalanda Open University — All Rights Reserved
      </p>
    </div>
  );
};

export default StudentLogin;

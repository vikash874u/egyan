import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admins/adminlogin",
        { adminId, password }
      );

      if (res.data.message === "Login successfully!") {
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/admin/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="admin-login-bg">
      <div className="admin-login-card">
        
        {/* Icon */}
        <div className="admin-icon">
          <FaUserShield />
        </div>

        <h2>Admin Login</h2>
        <p className="sub-text">Secure administrative access</p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Admin ID</label>
            <input
              type="text"
              placeholder="Enter Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="footer-text">
          © {new Date().getFullYear()} NOU e-Gyan Portal
        </p>
      </div>
    </div>
  );
}

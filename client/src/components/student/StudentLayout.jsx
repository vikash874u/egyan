import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaCommentDots,
  FaKey,
  FaSignOutAlt,
  FaUserGraduate,
} from "react-icons/fa";
import "./StudentDashboard.css"; // reuse CSS

const StudentLayout = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/studentlogin");
  };

  return (
    <div className="student-dashboard">
      {/* 🔹 HEADER (COMMON) */}
      <div className="student-header">
        <FaUserGraduate size={40} />
        <div>
          <h2>Welcome, {student?.name || "Student"}</h2>
          <p>Enrollment No: {student?.rollNo}</p>
        </div>
      </div>

      {/* 🔹 COMMON OPTIONS (NOW 5) */}
      <div className="student-cards">
        {/* Dashboard */}
        <div className="student-card" onClick={() => navigate("/student")}>
          <FaBookOpen className="icon" />
          <h4>Dashboard</h4>
        </div>

        {/* ✅ View Study Material (NEW) */}
        <div
          className="student-card"
          onClick={() => navigate("/student/materials")
}
        >
          <FaBookOpen className="icon" />
          <h4>View Study Material</h4>
        </div>

        {/* Feedback / Complaint */}
        <div
          className="student-card"
          onClick={() => navigate("/student/feedback-choice")}
        >
          <FaCommentDots className="icon" />
          <h4>Feedback / Complaint</h4>
        </div>

        {/* Change Password */}
        <div
          className="student-card"
          onClick={() => navigate("/student/change-password")}
        >
          <FaKey className="icon" />
          <h4>Change Password</h4>
        </div>

        {/* Logout */}
        <div className="student-card logout" onClick={handleLogout}>
          <FaSignOutAlt className="icon" />
          <h4>Logout</h4>
        </div>
      </div>

      {/* 🔥 OUTLET */}
      <Outlet />
    </div>
  );
};

export default StudentLayout;

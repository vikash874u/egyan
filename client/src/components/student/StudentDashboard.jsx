import React from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  return (
    <>
      {/* Statistics Section */}
      <div className="student-stats">
        <div className="stat-card">
          <h3>📚 24</h3>
          <p>Total Study Materials</p>
        </div>

        <div className="stat-card">
          <h3>📖 6</h3>
          <p>Subjects Covered</p>
        </div>

        <div className="stat-card">
          <h3>📝 3</h3>
          <p>Feedback Submitted</p>
        </div>

        <div className="stat-card">
          <h3>⏰ Today</h3>
          <p>Last Login</p>
        </div>
      </div>

      <div className="student-footer">
        <p>📘 NOU eGyan Portal — Empowering Digital Learning</p>
      </div>
    </>
  );
};

export default StudentDashboard;

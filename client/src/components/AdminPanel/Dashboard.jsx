import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome, Admin 👋</h1>
      <p style={{ color: "#475569", fontSize: "16px" }}>
        Manage and monitor college activities easily.
      </p>

      {/* MAIN CARDS */}
      <div className="cards">
        <div className="card" onClick={() => navigate("/admin/study-material")}>
          📚 Study Materials
        </div>

        <div className="card" onClick={() => navigate("/admin/enquiry")}>
          📨 Enquiries
        </div>

        <div className="card" onClick={() => navigate("/admin/students")}>
          👨‍🎓 Students
        </div>

        <div className="card" onClick={() => navigate("/admin/change-password")}>
          ⚙️ System Settings
        </div>
      </div>

      {/* QUICK STATS SECTION */}
      <h2 className="section-title">📊 Quick Overview</h2>
      <div className="stats-container">
        <div className="stat-box">
          <h3>150+</h3>
          <p>Total Students</p>
        </div>

        <div className="stat-box">
          <h3>80+</h3>
          <p>Study Materials</p>
        </div>

        <div className="stat-box">
          <h3>20+</h3>
          <p>New Enquiries</p>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <h2 className="section-title">🕒 Recent Activity</h2>
      <div className="activity-box">
        <ul>
          <li>📁 New Study Material Uploaded</li>
          <li>👨‍🎓 3 New Students Added</li>
          <li>📨 2 New Enquiries Received</li>
        </ul>
      </div>

      {/* ADMIN NOTE SECTION */}
      <h2 className="section-title">📝 Admin Notes</h2>
      <div className="notes-box">
        <textarea placeholder="Write important admin notes here..."></textarea>
      </div>

    </div>
  );
}

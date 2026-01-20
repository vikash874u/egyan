import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./AdminPanel.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/login");
  };

  return (
    <div className="admin-container">

      <aside className="sidebar">
        <div className="brand">
          <span>🏫</span> Admin Panel
        </div>

        <nav className="menu">

          <NavLink to="/admin/dashboard" className="menu-item">
            <span>🏠</span> Dashboard
          </NavLink>

          <NavLink to="/admin/study-material" className="menu-item">
            <span>📚</span> Study Material
          </NavLink>

          <NavLink to="/admin/view-material" className="menu-item">
            <span>📚</span> View Material
          </NavLink>

          <NavLink to="/admin/enquiry" className="menu-item">
            <span>📨</span> Manage Enquiry
          </NavLink>

          <NavLink to="/admin/students" className="menu-item">
            <span>👨‍🎓</span> Manage Students
          </NavLink>

          <NavLink to="/admin/change-password" className="menu-item">
            <span>🔒</span> Change Password
          </NavLink>

          <NavLink to="/admin/student-feedback" className="menu-item">
            <span>📁</span> Feedback/Complian
          </NavLink>

        </nav>

        <button className="logout" onClick={logout}>🚪 Logout</button>
      </aside>

      <main className="content">
        <Outlet />
      </main>

    </div>
  );
}

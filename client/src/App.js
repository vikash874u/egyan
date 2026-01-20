import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Registration from "./components/Registration";
import Enquiry from "./components/Enquiry";

import AdminLogin from "./components/AminLogin";
import AdminLayout from "./components/AdminPanel/AdminLayout";
import Dashboard from "./components/AdminPanel/Dashboard";
import StudyMaterial from "./components/AdminPanel/StudyMaterial";
import ManageEnquiry from "./components/AdminPanel/Enquiry";
import ManageStudents from "./components/AdminPanel/Students";
import ChangePassword from "./components/AdminPanel/ChangePassword";
import ViewStudy from "./components/AdminPanel/ViewStudy";
import AdminStudentFeedback from "./components/AdminPanel/StudentFeedback";

import StudentLogin from "./components/StudentLogin";
import StudentLayout from "./components/student/StudentLayout";
import StudentDashboard from "./components/student/StudentDashboard";
import StudentFeedbackChoice from "./components/student/StudentFeedbackChoice";
import StudentFeedback from "./components/student/StudentFeedback";
import StudentChangePassword from "./components/student/StudentChangePassword";
import StudentComplaint from "./components/student/StudentComplian";
import StudentMaterials from "./components/student/StudentMaterials";

import ProtectedAdminRoute from "./components/AdminPanel/ProtectedAdminRoute";
import ProtectedStudentRoute from "./components/student/ProtectedStudentRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/contact" element={<Enquiry />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />

        {/* 🎓 STUDENT (PROTECTED) */}
        <Route
          path="/student"
          element={
            <ProtectedStudentRoute>
              <StudentLayout />
            </ProtectedStudentRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="materials" element={<StudentMaterials />} />
          <Route path="feedback-choice" element={<StudentFeedbackChoice />} />
          <Route path="feedback" element={<StudentFeedback />} />
          <Route path="complaint" element={<StudentComplaint />} />
          <Route path="change-password" element={<StudentChangePassword />} />
        </Route>

        {/* 🛡 ADMIN (PROTECTED) */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="study-material" element={<StudyMaterial />} />
          <Route path="view-material" element={<ViewStudy />} />
          <Route path="enquiry" element={<ManageEnquiry />} />
          <Route path="students" element={<ManageStudents />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="student-feedback" element={<AdminStudentFeedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import axios from "axios";
import "./StudentComplian.css";

const StudentComplain = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/student-feedback", {
        rollNo: student.rollNo,
        name: student.name,
        program: student.program,
        branch: student.branch,
        year: student.year,
        type: "complaint",
        rating: null,
        message,
      });

      setSuccess("Complaint submitted successfully");
      setType("");
      setMessage("");
    } catch (error) {
      alert("Failed to submit complaint");
    }
  };

  return (
    <div className="student-complain-container">
      <h2>
        <FaExclamationTriangle /> Raise Complaint
      </h2>

      {success && (
        <div className="student-complain-success">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Complaint Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          <option value="Technical Issue">Technical Issue</option>
          <option value="Study Material Issue">Study Material Issue</option>
          <option value="Exam Related">Exam Related</option>
          <option value="Other">Other</option>
        </select>

        <label>Complaint Message</label>
        <textarea
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">
          Submit Complaint
        </button>
      </form>

      <button
        className="student-complain-back-btn"
        onClick={() => navigate("/student")}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default StudentComplain;

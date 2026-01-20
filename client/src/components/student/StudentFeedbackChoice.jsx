import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCommentDots,
  FaExclamationTriangle,
  FaArrowLeft,
} from "react-icons/fa";
import "./StudentFeedbackOptions.css";

const StudentFeedbackChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="feedback-options-page">
      <h2>💬 Feedback & Complaint</h2>
      <p>Select one option to continue</p>

      <div className="options-container">
        <div
          className="option-card"
          onClick={() => navigate("/student/feedback")}
        >
          <FaCommentDots className="icon" />
          <h3>Give Feedback</h3>
          <p>Share your experience with NOU eGyan</p>
        </div>

        <div
          className="option-card complaint"
          onClick={() => navigate("/student/complaint")}
        >
          <FaExclamationTriangle className="icon" />
          <h3>Raise Complaint</h3>
          <p>Report an issue or problem</p>
        </div>
      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/student")}
      >
        <FaArrowLeft /> Back to Dashboard
      </button>
    </div>
  );
};

export default StudentFeedbackChoice;

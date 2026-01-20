import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaPaperPlane,
  FaStar,
  FaBookOpen,
  FaCommentDots,
  FaKey,
  FaSignOutAlt,
  FaUserGraduate,
} from "react-icons/fa";
import "./StudentFeedback.css";

const StudentFeedback = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:5000/api/student-feedback", {
      rollNo: student.rollNo,
      name: student.name,
      program: student.program,
      branch: student.branch,
      year: student.year,
      type: "feedback",
      rating,
      message: feedback,
    });

    setSubmitted(true);
    setRating(0);
    setFeedback("");
  } catch (error) {
    alert("Failed to submit feedback");
  }
};


  // const handleLogout = () => {
  //   localStorage.removeItem("student");
  //   navigate("/studentlogin");
  // };

  return (
    <div className="student-page">
      {/* Decorative background */}
      <div className="bg-left-decor"></div>
      <div className="bg-right-decor"></div>
      {/* Floating icons */}
      <FaCommentDots className="floating-icon left-icon" />
      <FaStar className="floating-icon right-icon" />

      {/* Feedback Form */}
      <div className="feedback-wrapper">
        <div className="feedback-card">
          <h3>💬 Student Feedback</h3>
          <p className="subtitle">
            Help us improve the NOU eGyan learning experience
          </p>

          {submitted && (
            <div className="success-msg">
              ✅ Thank you! Your feedback has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="rating-section">
              <label>Rate your experience</label>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={star <= rating ? "star active" : "star"}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Your Feedback</label>
              <textarea
                rows="5"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;

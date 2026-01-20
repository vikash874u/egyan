import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";
import "./Enquiry.css";

export default function Enquiry() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    address: "",
    contactNo: "",
    email: "",
    enquiryText: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact/add",
        formData
      );
      alert(res.data.message || "Enquiry submitted successfully!");

      setFormData({
        name: "",
        gender: "",
        address: "",
        contactNo: "",
        email: "",
        enquiryText: "",
      });
    } catch (error) {
      alert("❌ Error saving enquiry!");
    }
  };

  return (
    <div className="enquiry-bg">
      <div className="enquiry-wrapper">

        {/* LEFT */}
        <div className="enquiry-left">
          <FaEnvelopeOpenText className="floating-icon" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="Enquiry"
            className="enquiry-img"
          />
          <h2>Have a Question?</h2>
          <p>We are here to help you. Submit your enquiry anytime.</p>
        </div>

        {/* RIGHT FORM */}
        <div className="enquiry-card">
          <h3>Enquiry Form</h3>

          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Name</label>
            </div>

            <div className="inputbox">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label>Gender</label>
            </div>

            <div className="inputbox">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Address</label>
            </div>

            <div className="inputbox">
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Contact Number</label>
            </div>

            <div className="inputbox">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Email</label>
            </div>

            <div className="inputbox textarea">
              <textarea
                name="enquiryText"
                value={formData.enquiryText}
                onChange={handleChange}
                required
                placeholder=" "
              ></textarea>
              <label>Your Enquiry</label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Enquiry
            </button>

            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/")}
            >
              ⬅ Back to Home
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

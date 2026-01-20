import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import "./Registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    rollNo: "",
    name: "",
    fatherName: "",
    motherName: "",
    address: "",
    program: "",
    branch: "",
    year: "",
    contactNo: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/register",
        formData
      );
      alert(res.data.message);

      setFormData({
        rollNo: "",
        name: "",
        fatherName: "",
        motherName: "",
        address: "",
        program: "",
        branch: "",
        year: "",
        contactNo: "",
        email: "",
        password: "",
      });
    } catch (error) {
      alert("❌ Error saving data!");
    }
  };

  return (
    <div className="reg-bg">
      <div className="reg-wrapper">

        {/* LEFT – NOU STYLE ANIMATION */}
        <div className="reg-left">
          <FaUserPlus className="reg-icon" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student"
            className="reg-img"
          />
          <h2>NOU Student Registration</h2>
          <p>Create your account to access the e-Gyan portal</p>
        </div>

        {/* RIGHT – FORM */}
        <div className="reg-card">
          <h3>Student Registration</h3>

          <form onSubmit={handleSubmit}>
            {[
              { name: "rollNo", label: "Roll No", type: "text" },
              { name: "name", label: "Name", type: "text" },
              { name: "fatherName", label: "Father's Name", type: "text" },
              { name: "motherName", label: "Mother's Name", type: "text" },
              { name: "address", label: "Address", type: "text" },
              { name: "contactNo", label: "Contact No", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "password", label: "Password", type: "password" },
            ].map((f, i) => (
              <div className="inputbox" key={i}>
                <input
                  type={f.type}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  required
                />
                <label>{f.label}</label>
              </div>
            ))}

            {/* DROPDOWNS */}
            <div className="inputbox">
              <select name="program" value={formData.program} onChange={handleChange} required>
                <option value=""></option>
                <option>B.Tech</option>
                <option>MCA</option>
                <option>MBA</option>
              </select>
              <label>Program</label>
            </div>

            <div className="inputbox">
              <select name="branch" value={formData.branch} onChange={handleChange} required>
                <option value=""></option>
                <option>CSE</option>
                <option>ECE</option>
                <option>ME</option>
                <option>CE</option>
              </select>
              <label>Branch</label>
            </div>

            <div className="inputbox">
              <select name="year" value={formData.year} onChange={handleChange} required>
                <option value=""></option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
              </select>
              <label>Year</label>
            </div>

            <button type="submit" className="reg-btn">
              Register
            </button>

            <p className="login-link">
              Already registered? <Link to="/studentlogin">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

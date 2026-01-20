import React, { useState } from "react";
import axios from "axios";
import "./AdminPanel.css";  // ✅ Make sure this is imported

export default function StudyMaterial() {
  const [formData, setFormData] = useState({
    Program: "",
    Branch: "",
    Year: "",
    Subject: "",
    Topic: "",
    FileName: null,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFormData({ ...formData, FileName: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    await axios.post("http://localhost:5000/api/materials/material", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("✅ Material Uploaded Successfully");
  };

  return (
    <div className="content"> {/* ✅ Matches Dashboard Area */}

      <h1>📚 Upload Study Material</h1>

      <div className="modern-table" style={{ padding: "25px" }}> {/* ✅ White Card UI */}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Program</label>
            <select name="Program" className="form-select" onChange={handleChange} required>
              <option value="">Select Program</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Branch</label>
            <select name="Branch" className="form-select" onChange={handleChange} required>
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Year</label>
            <select name="Year" className="form-select" onChange={handleChange} required>
              <option value="">Select Year</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>
          </div>

          <input type="text" name="Subject" placeholder="Subject Name" className="form-control mb-3" onChange={handleChange} required />
          <input type="text" name="Topic" placeholder="Topic Name" className="form-control mb-3" onChange={handleChange} required />

          <input type="file" className="form-control mb-4" onChange={handleFileChange} required />

          <button type="submit" className="save-btn w-100">Upload Material</button> {/* ✅ Same button style */}
        </form>

      </div>
    </div>
  );
}

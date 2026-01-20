import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students/all")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredStudents = students.filter((stu) =>
    stu.name.toLowerCase().includes(search.toLowerCase()) ||
    stu.rollNo.toString().includes(search) ||
    stu.branch.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    await axios.delete(`http://localhost:5000/api/students/delete/${id}`);
    setStudents(students.filter((s) => s._id !== id));
  };

  const saveStudent = async () => {
    await axios.put(`http://localhost:5000/api/students/update/${editData._id}`, editData);
    alert("Student Updated ✅");
    setEditData(null);
    window.location.reload();
  };

  return (
    <div>
      <h1>👨‍🎓 Student Management</h1>

      <div className="top-bar">
        <input type="text" placeholder="🔍 Search students..."
          value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="modern-table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Contact</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((stu, i) => (
              <tr key={stu._id}>
                <td>{i + 1}</td>
                <td>{stu.rollNo}</td>
                <td>{stu.name}</td>
                <td>{stu.branch}</td>
                <td>{stu.year}</td>
                <td>{stu.contactNo}</td>

                <td><button className="view-btn" onClick={() => { 
  setViewData(stu); 
  document.body.classList.add("popup-open"); 
}}
>View</button></td>
                <td><button className="edit-btn" onClick={() => setEditData(stu)}>✏️ Edit</button></td>
                <td><button className="delete-btn" onClick={() => handleDelete(stu._id)}>🗑 Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View More Popup */}
      {viewData && (
  <div className="popup">
    <div className="popup-content view-popup">

      <h2 className="popup-title">Student Details</h2>

      <div className="details-grid">
        <p><strong>Roll No:</strong> {viewData.rollNo}</p>
        <p><strong>Name:</strong> {viewData.name}</p>
        <p><strong>Father Name:</strong> {viewData.fatherName}</p>
        <p><strong>Mother Name:</strong> {viewData.motherName}</p>
        <p><strong>Address:</strong> {viewData.address}</p>
        <p><strong>Program:</strong> {viewData.program}</p>
        <p><strong>Branch:</strong> {viewData.branch}</p>
        <p><strong>Year:</strong> {viewData.year}</p>
        <p><strong>Contact:</strong> {viewData.contactNo}</p>
        <p><strong>Email:</strong> {viewData.email}</p>
      </div>

      <button className="close-popup-btn" onClick={() => { 
  setViewData(null); 
  document.body.classList.remove("popup-open"); 
}}
>Close</button>
    </div>
  </div>
)}


      {/* Edit Popup */}
      {editData && (
        <div className="popup">
          <div className="popup-content">
            <h2>Edit Student</h2>

            {Object.keys(editData).map((key) =>
              key !== "_id" && (
                <input key={key} type="text" value={editData[key]} onChange={(e) =>
                  setEditData({ ...editData, [key]: e.target.value })
                } />
              )
            )}

            <button className="save-btn" onClick={saveStudent}>Save</button>
            <button className="cancel-btn" onClick={() => setEditData(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

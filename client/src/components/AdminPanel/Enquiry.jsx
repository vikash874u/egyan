import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

export default function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/contact/all")
      .then((res) => setEnquiries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filtered = enquiries.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.contactNo.toString().includes(search) ||
    item.enquiryText.toLowerCase().includes(search.toLowerCase())
  );
const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

  try {
    await axios.delete(`http://localhost:5000/api/contact/delete/${id}`);
    setEnquiries(enquiries.filter((item) => item._id !== id));
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <h1>📨 Manage Enquiries</h1>

      <div className="top-bar">
        <input
          type="text"
          placeholder="🔍 Search by name, email, contact no..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="modern-table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Enquiry</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
  {filtered.length > 0 ? (
    filtered.map((item, index) => (
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.gender}</td>
        <td>{item.address}</td>
        <td>{item.contactNo}</td>
        <td>{item.email}</td>
        <td>{item.enquiryText}</td>

        <td>
          <button className="delete-btn" onClick={() => handleDelete(item._id)}>
            🗑 Delete
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="8" style={{ textAlign:"center", padding:"20px" }}>
        No Enquiries Found
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
}

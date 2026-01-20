import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

function ViewStudy() {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    Program: "",
    Branch: "",
    Year: "",
    Subject: "",
    Topic: "",
    NewFile: null
  });

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/materials/material");
      setData(res.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (item) => {
    setEditingId(item._id);
    setEditForm({
      Program: item.Program,
      Branch: item.Branch,
      Year: item.Year,
      Subject: item.Subject,
      Topic: item.Topic,
      NewFile: null
    });
  };

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFile = (e) => {
    setEditForm({
      ...editForm,
      NewFile: e.target.files[0]
    });
  };

  const handleSave = async (id) => {
    try {
      const formData = new FormData();

      Object.keys(editForm).forEach((key) => {
        formData.append(key, editForm[key]);
      });

      await axios.put(
        `http://localhost:5000/api/materials/material/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Updated Successfully!");

      setEditingId(null);
      fetchData();
    } catch (err) {
      console.log("Error updating:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/materials/material/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log("Error deleting:", err);
    }
  };

  return (
    <div className="view-container">
      <h2 className="view-title">View Study Material</h2>

      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Subject</th>
              <th>Topic</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                {editingId === item._id ? (
                  <>
                    <td><input className="edit-input" name="Program" value={editForm.Program} onChange={handleChange} /></td>
                    <td><input className="edit-input" name="Branch" value={editForm.Branch} onChange={handleChange} /></td>
                    <td><input className="edit-input" name="Year" value={editForm.Year} onChange={handleChange} /></td>
                    <td><input className="edit-input" name="Subject" value={editForm.Subject} onChange={handleChange} /></td>
                    <td><input className="edit-input" name="Topic" value={editForm.Topic} onChange={handleChange} /></td>

                    <td>
                      <input type="file" className="edit-input" onChange={handleFile} />
                      <small style={{ fontSize: "12px" }}>Current: {item.FileName}</small>
                    </td>

                    <td>
                      <button className="btn btn-save" onClick={() => handleSave(item._id)}>Save</button>
                      <button className="btn btn-cancel" onClick={() => setEditingId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.Program}</td>
                    <td>{item.Branch}</td>
                    <td>{item.Year}</td>
                    <td>{item.Subject}</td>
                    <td>{item.Topic}</td>

                    <td>
                      <a
                        href={`http://localhost:5000/uploads/${item.FileName}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-edit"
                      >
                        View File
                      </a>
                    </td>

                    <td>
                      <button className="btn btn-edit" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="btn btn-delete" onClick={() => handleDelete(item._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ViewStudy;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentMaterials.css";

const StudentMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/materials/material")
      .then((res) => {
        setMaterials(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="material-loading">Loading study materials...</p>;
  }

  return (
    <div className="student-material-container">
      <h2>📚 Study Materials</h2>

      {materials.length === 0 ? (
        <p className="no-material">No study material available</p>
      ) : (
        <table className="material-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Subject</th>
              <th>Topic</th>
              <th>Material</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((item) => (
              <tr key={item._id}>
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
                    className="pdf-link"
                  >
                    📄 Open PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentMaterials;

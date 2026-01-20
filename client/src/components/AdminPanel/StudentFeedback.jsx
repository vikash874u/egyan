import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentFeedback.css";

const StudentFeedback = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student-feedback")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading feedback...</p>;
  }

  return (
    <div className="admin-feedback-page">
      <h2>📋 Student Feedback & Complaints</h2>

      <table className="admin-feedback-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Program</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Type</th>
            <th>Rating</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ textAlign: "center" }}>
                No feedback found
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.rollNo}</td>
                <td>{item.program || "-"}</td>
                <td>{item.branch || "-"}</td>
                <td>{item.year || "-"}</td>
                <td>
                  <span
                    className={
                      item.type === "complaint"
                        ? "type-complaint"
                        : "type-feedback"
                    }
                  >
                    {item.type}
                  </span>
                </td>
                <td>{item.rating ?? "-"}</td>
                <td className="message-cell">{item.message}</td>
                <td>
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentFeedback;

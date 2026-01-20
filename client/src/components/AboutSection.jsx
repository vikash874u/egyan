import React from "react";
import img1 from "../img/download.jpeg";
import img2 from "../img/slider1.jpeg";

export default function AboutSection() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* LEFT SIDE - TEXT */}
        <div className="col-md-6">
          <h6 className="text-uppercase text-danger fw-bold">Description</h6>
          <h4 className="fw-bold mb-3">About NOU e-Gyan Portal</h4>

          <p className="text-muted">
            <strong>Nalanda Open University</strong> welcomes all our students,
            faculties & study centres to the very new & innovative online study
            portal <strong>NOU e-Gyan</strong>. The portal is a unique initiative
            by Hon'ble Vice-Chancellor <strong>Prof. (Dr.) K. C. Sinha</strong>,
            which aims at providing online study material to the students of NOU.
          </p>

          <p className="text-muted">
            The portal is accessible from any hook and corner of the world if the
            system allows the permission to its users. It is also fully secured
            and accessible 24×7 to its authorised users. It will resolve academic
            issues such as E-content Distribution, Delivery, Tracking, Assessment,
            Progress Monitoring & Controlling of all stakeholders, i.e. students,
            teachers, study centre administrators as well as Nalanda Open
            University Admins when they are at a distance.
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div
          className="col-md-6 position-relative d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            borderRadius: "12px",
          }}
        >
          <img
            src={img1}
            alt="NOU Portal"
            className="position-absolute rounded shadow"
            style={{
              width: "45%",
              bottom: "30%",
              right: "70%",
              border: "3px solid white",
            }}
          />
        </div>
      </div>
    </section>
  );
}

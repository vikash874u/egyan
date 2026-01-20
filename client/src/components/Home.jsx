import React from 'react'
import { Container, Navbar, Nav, Row, Col, Button, NavDropdown } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
/* Images */
import s1 from "../img/s1.png";
import slider from "../img/c.jpg";

import svg from "../img/helpline.svg";
import reges from "../img/r2.jpg";
import dashboard from "../img/dashboard.jpg";
import course from "../img/online-courses.jpg";
import catalogue from "../img/course-catlog.jpg";
import prefo from "../img/r1.jpg";
import lecture from "../img/a1.jpg";
import feedback from "../img/q1.jpg";
import vc from "../img/vc.jpg";
import reg from "../img/registrar1.jpeg";
import pvc from "../img/pvc.jpg";
import ex from "../img/w1.jpg";
import bg from "../img/bg.jpg";
import bca from "../img/bca.png";
import mca from "../img/bba.png";
import bba from "../img/bba.png";
import pg from "../img/pgdfm.png";
import logo from '../img/s1.png'

import './normal.css'
/* Components */
import AboutSection from './AboutSection';


import { Splide , SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

export default function Home() {
  return (
    <>
      {/* ======= TOP CONTACT BAR ======= */}
      <div className="bg-danger text-white py-2 small text-center">
        <div className="container d-flex justify-content-between flex-wrap">
          <div>
            📞 +91 7080102007 | ✉️ <a href="mailto:nouegyanhelp@gmail.com" className="text-white">nouegyanhelp@gmail.com</a>
          </div>
          <div>Mon Oct 27 2025 11:35:11 GMT+0530</div>
        </div>
      </div>

      {/* ======= RED INFO BAR ======= */}
      <div className="bg-dark text-warning py-2 text-center small">
        For Admission related query call: <b>9341508580, 9341508577</b>
      </div>

      {/* ======= NAVBAR ======= */}
      <Navbar expand="lg" className="bg-white border-bottom shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img src={s1} alt="Logo" height="60" className="me-2" />
            <div>
              <h5 className="m-0 fw-bold text-danger">NOU e-Gyan PORTAL</h5>
              <small>(Nalanda Open University)</small>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Courses</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Enquiry</Nav.Link>

              <NavDropdown title="Account">
                <NavDropdown.Item as={Link} to="/studentlogin">Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">Signup</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== HERO SECTION ===== */}
      <section className="text-center text-md-start d-flex align-items-center py-5" style={{ background: "linear-gradient(to right, #f7e9e3, #fff)" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold text-danger">NOU e-Gyan Portal</h2>
              <h1 className="display-5 fw-bold text-uppercase">Welcome Students</h1>
              <p className="lead text-secondary">Learn from Anywhere. Anytime.</p>
              <Button variant="danger">Explore Courses</Button>
            </Col>
            <Col md={6} className="text-center">
              <img src={slider} alt="Student" className="img-fluid rounded-3 shadow-sm" />
            </Col>
          </Row>
        </Container>

        {/* WhatsApp Floating */}
        <a href="https://wa.me/917080102007" className="position-fixed bottom-0 end-0 m-4 bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "55px", height: "55px", fontSize: "25px", zIndex: 1000 }}>
          <FaWhatsapp />
        </a>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="bg-warning py-2">
        <marquee scrollAmount="12">
          <span className="me-4">Easy to access & user-friendly portal</span>
          <span className="me-4">24x7 secured learning access</span>
          <span className="me-4">Online study material provided</span>
        </marquee>
      </section>

      {/* ===== ABOUT ===== */}
      <AboutSection />

      {/* ✅ ✅ ✅ MERGED SECTIONS START ✅ ✅ ✅ */}

    {/* ===== PORTAL SECTION ===== */}
<div
  className="portal-wrapper"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="container">

    {/* Heading */}
    <div className="portal-title text-center mb-5">
      <span className="portal-tag">PORTAL</span>
      <h2 className="portal-heading">
        USERS <span>OF THE PORTAL</span>
      </h2>
    </div>

    <div className="row justify-content-center g-4">

      {/* CARD 1 */}
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="portal-outer">
          <div className="portal-inner">

            <div className="portal-icon">
              <i className="fa-solid fa-lock"></i>
            </div>

            <span className="portal-number">01</span>

            <p>
              The university admin can login to monitor the portal, provide
              access to authorised stakeholders & upload study material.
            </p>

            <button className="portal-btn">University Admin</button>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="portal-outer">
          <div className="portal-inner">

            <div className="portal-icon">
              <i className="fa-solid fa-book"></i>
            </div>

            <span className="portal-number">02</span>

            <p>
              The study centres authorised personnel can login to track students
              progress, enroll students, schedule assignments & generate reports.
            </p>

            <button className="portal-btn">Study Centre</button>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="portal-outer">
          <div className="portal-inner">

            <div className="portal-icon">
              <i className="fa-solid fa-users"></i>
            </div>

            <span className="portal-number">03</span>

            <p>
              The university enrolled students can login to view notifications,
              access e-contents, give assignments & track progress report.
            </p>

            <button className="portal-btn">NOU Students</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



      {/* ===== STUDENT SERVICES ===== */}
<div className="container my-5 student-services">
  {/* Heading */}
  <div className="mb-4">
    <span className="section-tag">FEATURES</span>
    <h2 className="section-title">
      STUDENT <span>SERVICES</span>
    </h2>
  </div>

  {/* Cards */}
  <div className="row g-4">
    {[
      { img: reges, txt: "Login" },
      { img: dashboard, txt: "Dashboard" },
      { img: course, txt: "Self Learning Material (SLM)" },
      { img: lecture, txt: "e-Books" },
      { img: prefo, txt: "Self-Assessment Tools" },
      { img: reges, txt: "Performance" },
      { img: feedback, txt: "Feedback" },
      { img: catalogue, txt: "Courses Catalogue" }
    ].map((e, i) => (
      <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="service-card">
          <div className="service-img">
            <img src={e.img} alt={e.txt} />
          </div>
          <div className="service-title">
            {e.txt}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


     {/* ===== ADMINISTRATIVE SETUP / TEACHERS ===== */}
<div className="container-fluid admin-section py-5">
  <div className="container">

    {/* Heading */}
    <div className="mb-5">
      <span className="section-tag">OUR MENTORS</span>
      <h2 className="section-title">
        ADMINISTRATIVE <span>SETUP</span>
      </h2>
    </div>

    {/* Cards */}
    <div className="row g-4">
      {[
        { img: vc, name: "Prof. (Dr.) K. C. Sinha", role: "Vice Chancellor" },
        { img: reg, name: "Prof. (Dr.) Sanjoy Kumar", role: "Pro Vice Chancellor" },
        { img: pvc, name: "Dr. Md. Habibur Rahman", role: "Registrar" },
        { img: ex, name: "Dr. Neelam Kumari", role: "Registrar (Exam)" }
      ].map((e, i) => (
        <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="admin-card text-center">
            <div className="admin-img-wrapper">
              <img src={e.img} alt={e.name} />
            </div>
            <h5>{e.name}</h5>
            <p>{e.role}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>


      {/* ===== HELPDESK SECTION ===== */}
<div className="container my-5 helpdesk-section">

  {/* ===== ROW 1 : HEADING ===== */}
  <div className="row mb-4">
    <div className="col-12 helpdesk-heading">
  <span className="helpdesk-tag">HELPDESK</span>

  <h2 className="helpdesk-title">
    HERE TO <span>SUPPORT YOU!</span>
  </h2>
</div>

  </div>

  {/* ===== ROW 2 : IMAGE + CONTENT ===== */}
  <div className="row align-items-center">

    {/* LEFT IMAGE */}
    <div className="col-lg-6 text-center mb-4 mb-lg-0">
      <div className="helpdesk-image-wrapper">
        <img
          src={svg}
          alt="Helpdesk"
          className="helpdesk-image"
        />
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="col-lg-6 helpdesk-content">
      <div className="helpdesk-info-box">
        <p>
          The help desk provides user assistance to navigate and understand
          the aspects of the portal. This also provides a simple interface
          for maintenance of student information and issues faced.
        </p>
      </div>

      <div className="helpdesk-contact">
        <div className="contact-item">
          📞 <span>+91 7080102007</span>
        </div>
        <div className="contact-item">
          ✉️ <span>nouegyanhelp@gmail.com</span>
        </div>
      </div>
    </div>

  </div>
</div>

      {/* ===== COURSE SLIDER ===== */}
    <div className="container my-5">
  <h1 className="text-center mb-4">Courses</h1>

  <Splide
    options={{
      type: "loop",
      autoplay: true,
      gap: "1rem",
      perPage: 3,
      pagination: true,
      arrows: true,
      breakpoints: {
        1200: {
          perPage: 3,
        },
        992: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
        576: {
          perPage: 1,
          arrows: false,
        },
      },
    }}
  >
    {[
      { img: mca, title: "MCA" },
      { img: bca, title: "BCA" },
      { img: bba, title: "BBA" },
      { img: pg, title: "PGDFM" },
    ].map((e, i) => (
      <SplideSlide key={i}>
        <div className="course-card card shadow text-center">
          <img src={e.img} alt={e.title} />
          <h5>{e.title}</h5>
        </div>
      </SplideSlide>
    ))}
  </Splide>
</div>


      {/* ===== FOOTER ===== */}
      <div className="row py-5 " style={{backgroundColor:"darkred"}}>
        <div className="col-sm-11 mx-auto  p-md-3 p-1">
            <div className="row">
                <div className="col-lg-3 col-md-6 main-footer text-center px-3">
                <img src={logo} alt="" style={{height:"16vh"}} />
                <p className=" pt-3">Nalanda Open University is a State Open University duly established under the Act of Bihar Government and is also recognized by Distance Education Council, IGNOU, Maidan Garhi, New Delhi.</p>
                <div className="footer-icon">
                    <a href="" style={{color:"white"}}><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" style={{color:" white"}}><i className="fa-brands fa-google"></i></a>
                    <a href="#" style={{color: "white"}}><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" style={{color: "white"}}><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 main-footer ps-5">
                    <h2>USEFUL LINKS</h2>
                    <span className="animate-border border-black mb-4"></span>
                    <ul className="list-unstyled">
          <li className="mb-2"><a href=""><i className="fa-solid fa-arrow-right text-white"></i><span className='p-2'>Home</span></a></li>
          <li className="mb-2"><a href=""> <i className="fa-solid fa-arrow-right textt-white"></i><span className='ps-2'>About Portal</span></a></li>
          <li className="mb-2"><a href=""><i className="fa-solid fa-arrow-right textt-white"></i><span className='ps-2'>Services</span></a></li>
          <li className="mb-2"><a href=""><i className="fa-solid fa-arrow-right textt-white"></i><span className='ps-2'>Contact us</span></a></li>
          <li className="mb-2"><a href=""><i className="fa-solid fa-arrow-right textt-white"></i><span className='ps-2'>Courses</span></a></li>
          <li className="mb-2"><a href=""><i className="fa-solid fa-arrow-right textt-white"></i><span className='ps-2'>Study Center</span></a></li>
        </ul>
                </div>
                <div className="col-lg-3 col-md-6 main-footer pe-5">
                    <h2>CONTACT INFO</h2>
                    <span className="animate-border mb-4"></span>
                    <p><i class="fa-solid fa-location-dot"></i><span className='ps-2'>NOU</span></p>
                    <p>2nd/3rd Floor, Biscomaun Bhawan, Gandhi Maidan, Patna 800 001 (BIHAR).

</p>
                     <p className='pt-3'><i class="fa-solid fa-phone-volume"></i><span className='ps-2'>+91 7080102007
                     Give us a call</span></p>
                </div>
                <div className="col-lg-3 col-md-6 main-footer px-3">
                  <h2>SUBSCRIBE</h2>
                  <span className="animate-border border-black mb-4"></span>
                  <p>Fill the detail below to receive the manual of the NOU e-Gyan Portal</p>
                  <input type="email" className='box' placeholder='Email' />
                  <button type='submit'><i className="fa-solid fa-paper-plane bg-dark "></i>Send</button>
                </div>
                
            </div>
        </div>
    </div>
      <div className="row">
    <div className="col-sm-12 text-center  " style={{backgroundColor:"brown"}}>
        <p className='text-white pt-2'>© Copyright 2025 Designed & Developed By | Softpro India Computer Technologies (P) Ltd.</p>
    </div>
</div>
    </>
  )
}

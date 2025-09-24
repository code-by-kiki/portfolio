import React from 'react';
import 'animate.css';
import picture from '../assest/profile-pic.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

const Introduction = () => {
  return (
    <div style={{ backgroundColor: '#e3e6e5', minHeight: '100vh', padding: '4rem 0' }}>
      <body style={{ backgroundColor: '#e3e6e5', minHeight: '100vh', padding: '4rem 0' }}>

      </body>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          
          <div className="col-md-5 text-center animate__animated animate__fadeInLeft">
            <img
              src={picture}
              alt="Krithika Profile"
              className="img-fluid   shadow mt-5"
              style={{ maxWidth: '350px', borderRadius:'50px' }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-7 animate__animated animate__fadeInRight">
            <h2
              className="text-center fw-bold mb-4"
              style={{ color: '#715a5a', fontFamily: 'Playfair Display, serif' }}
            >
              <i>Introduction</i>
            </h2>
            <div className="card p-4 shadow-sm col-sm-12" style={{ backgroundColor: '#f8f9fa' }}>
              <p className="fs-5" style={{ textIndent: '2em', lineHeight: '1.8' }}>
                Hi, I’m Krithika — a B.A. Economics graduate with a deep passion for web development and digital innovation.
                My academic background has sharpened my analytical thinking and decision-making abilities, allowing me to assess
                solutions from multiple angles and choose the most effective path forward. As a web developer, I prioritize the
                user experience, crafting intuitive and responsive web pages that are both visually appealing and functionally
                seamless. I thrive on transforming ideas into interactive digital solutions that connect with users and deliver
                real value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;

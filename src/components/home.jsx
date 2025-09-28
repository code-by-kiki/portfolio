import React from 'react';
import 'animate.css';
import picture from '../assest/profile-pic.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

const Introduction = () => {
  return (
    <div>
      <body style={{ backgroundColor: '#e3e6e5', minHeight: '100vh', padding: '4rem 0' }}>

      </body>
      <div className="container">
       <div className="row justify-content-center align-items-center">
  <div className="col-12 col-md-5 text-center animate__animated animate__fadeInLeft mb-4 mb-md-0">
    <img
      src={picture}
      alt="Krithika Profile"
      className="img-fluid shadow mt-3"
      style={{ maxWidth: '350px', borderRadius: '50px' }}
    />
  </div>

  <div className="col-12 col-md-7 animate__animated animate__fadeInRight px-3">
    <h2 className="text-center fw-bold mb-4" style={{ color: '#715a5a', fontFamily: 'Playfair Display, serif' }}><i>Introduction</i> </h2>
    <div className="p-2 col-sm-12" >
      <p className="fs-5  " style={{ textIndent: '1em', lineHeight: '1.5',textAlign:'justify' }}>
       Hi, I’m Krithika B.A.Economics graduate with a deep passion for web development and digital innovation. My academic background has sharpened
        my analytical thinking and decision-making abilities, allowing me to assess solutions from multiple angles and choose the most effective 
        path forward.As a web developer, I prioritize the user experience, crafting intuitive and responsive web pages that are both visually 
        appealing and functionally seamless. I thrive on transforming ideas into interactive digital solutions that connect with users and deliver real value.</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Introduction;

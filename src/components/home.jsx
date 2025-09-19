import React from 'react';
import picture from "../assest/profile-pic.jpg";

function Home()
{
 return (
  <div style={{ backgroundColor: 'rgb(211, 218, 217)' }} className='container-fulid' >
    <section >
      <div >
        <div className='row mb-5 mt-5 pt-5 justify-content-center'>

          <div className='col-xl-4 mt-5 pt-5 me-5 mb-5' >
            <img src={picture} alt="Profile" className="img-fluid rounded shadow" width={450} height={450} />
          </div>

          <div className='col-xl-6 me-2' >
            <h2 className='text-center mt-5 fw-bold ' style={{color:'rgb(113, 90, 90)'}}>
              <i>Introduction</i>
            </h2>
            <p className='card p-4 mt-4 fs-5' style={{ textIndent: '3em', backgroundColor: '#f8f9fa' }}>
             Hi, I’m <strong>Krithika</strong> —a B.A. Economics graduate with a deep passion for web development and digital innovation. My academic background has sharpened my 
             analytical thinking and decision-making abilities, allowing me to assess solutions from multiple angles and choose the most effective path forward.
            As a web developer, I prioritize the user experience, crafting intuitive and responsive web pages that are both visually appealing and functionally seamless. 
            I thrive on transforming ideas into interactive digital solutions that connect with users and deliver real value.
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>  
  );
};

export default Home;
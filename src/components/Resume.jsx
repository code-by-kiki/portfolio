import React from "react";
import picture from '../assest/profile-pic.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Resumedatas(props) {
  return (
    <div className="container-fluid" style={{ fontFamily: 'serif' }}>
      <div className="row mt-5" style={{ background: "rgb(68, 68, 78)", padding: '10px' }}></div>

      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-6 mt-3 text-md-start text-center">
          <img src={picture} alt="Krithika Profile" style={{ maxWidth: '150px', borderRadius: '25rem' }} />

          <div className="row">
            <div className="col mt-5 fw-bold">
              <h4 className="fw-bold fs-2 mb-4">Contact</h4>
              <p><i className="bi bi-telephone"></i> 6374760410</p>
              <p><i className="bi bi-envelope"></i> root.krithika10@gmail.com</p>
              <p><i className="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/krithika-selvam-km10" className="text-decoration-none text-dark">Linkedin</a></p>
              <p><i className="bi bi-github"></i> <a href="https://github.com/" className="text-decoration-none text-dark">Repository</a></p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h4 className="fw-bold fs-2 mb-4">Certification</h4>
              <pre>🎓 NSS</pre>
              <pre>🎓 Digital Marketing</pre>
              <pre>🎓 Java Full-Stack Web Development</pre>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h4 className="fw-bold fs-2 mb-4">Internship</h4>
              <p><b>Organization:</b> <i>State Bank of India</i></p>
              <p><b>Role:</b> <i>Intern</i></p>
              <p><b>Duration:</b> <i>Two Weeks</i></p>
              <p><b>Responsibilities:</b> <i>Customer Interaction and Record Maintenance</i></p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h4 className="fw-bold fs-2 mb-4">Language</h4>
              <p><i className="bi bi-translate"></i> Tamil</p>
              <p><i className="bi bi-translate"></i> English</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 text-md-end text-center">
          <h1 className="mt-5">{props.name}</h1>
          <pre>Web Developer</pre>

          <div className="row mt-5 text-md-start text-center">
            <h4 className="mb-3 fw-bold fs-2"><i>Profile</i></h4>
            <p style={{ textAlign: 'justify', textIndent: '2rem' }}>
              Economics graduate with hands-on training in full-stack web development and a
              strong foundation in business analysis and data-driven problem solving. Proficient in building responsive websites and dynamic applications using modern technologies. Passionate about creating meaningful digital solutions and continuously expanding technical expertise.
              Seeking opportunities to grow as a developer and contribute to impactful, real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resumedatas;
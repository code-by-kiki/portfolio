import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import SwipeableCards from './Skills';

const About = () => {
  const aboutRef = useRef(null);
  const certRef = useRef(null);
  const hobbiesRef = useRef(null);

  useEffect(() => {
    anime.timeline()
      .add({
        targets: aboutRef.current,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      })
      .add({
        targets: certRef.current,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutBack'
      }, '-=500')
      .add({
        targets: hobbiesRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      }, '-=400');
  }, []);

  const certifications = [
    { title: 'Java Full Stack Development', issuer: 'ecareerpluz', year: '2025' },
    { title: 'Digital Marketing', issuer: 'ecareerpluz', year: '2025' },
    { title: 'Economics Degree', issuer: 'Lady Doak College', year: '2025' },
  ];

  const hobbies = ['🍳 Cooking', '🎶 Music', '🧘‍♀️ Yoga'];

  return (
    <div
      style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: 'auto' }}
      className="px-3 px-md-5 py-4"
    >
      {/* About Me Section */}
      <div
        ref={aboutRef}
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}
      >
        <h2 style={{ textAlign: 'center' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          I’m Krithika, a passionate graduate with a B.A. in Economics and a certified Java Full Stack Developer.
          My internship at SBI gave me real-world exposure to financial systems and customer engagement.
          I’m enthusiastic about blending analytical thinking with tech innovation to build impactful solutions.
        </p>
      </div>

      <SwipeableCards />

      {/* Certifications Section */}
      <div ref={certRef} style={{ marginTop: '5rem' }}>
        <h3 className="text-center mb-4">Certifications</h3>
        <div className="d-flex flex-wrap justify-content-center" style={{ gap: '1rem' }}>
          {certifications.map(cert => (
            <div
              key={cert.title}
              style={{
                background: '#f0f0f0',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                flex: '1 1 250px',
                minWidth: '250px'
              }}
            >
              <h4>{cert.title}</h4>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Year:</strong> {cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div ref={hobbiesRef} style={{ marginTop: '5rem' }}>
        <h4 className="text-center mb-4">My Hobbies</h4>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="hobby-card p-3 text-center border rounded "
              style={{ minWidth: '10px', flex: '1 1 120px',backgroundColor:'rgb(68, 68, 78)',color:'whitesmoke'}}
            >
              <h6 className="mb-0">{hobby}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
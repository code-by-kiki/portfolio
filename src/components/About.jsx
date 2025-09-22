import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import SkillsScroll from './Skills';

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
  
  <SkillsScroll/>

  const certifications = [
    { title: 'Java Full Stack Development', issuer: 'XYZ Institute', year: '2025' },
    { title: 'Economics Degree', issuer: 'Your University', year: '2024' }
  ];

  const hobbies = ['🎨 Drawing', '📚 Reading', '🎶 Music', '🧘‍♀️ Yoga'];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      {/* About Me Section */}
      <div ref={aboutRef} style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ textAlign: 'center' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          I’m Krithika, a passionate graduate with a B.A. in Economics and a certified Java Full Stack Developer.
          My internship at SBI gave me real-world exposure to financial systems and customer engagement.
          I’m enthusiastic about blending analytical thinking with tech innovation to build impactful solutions.
        </p>
      </div>

      {/* Certifications Section */}
      <div ref={certRef} style={{ marginBottom: '2rem' }}>
        <h3>Certifications</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {certifications.map(cert => (
            <div key={cert.title} style={{
              background: '#f0f0f0',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              flex: '1 1 250px'
            }}>
              <h4>{cert.title}</h4>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Year:</strong> {cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div ref={hobbiesRef}>
        <h3>Hobbies</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '1.2rem' }}>
          {hobbies.map(hobby => (
            <li key={hobby} style={{ marginBottom: '0.5rem' }}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
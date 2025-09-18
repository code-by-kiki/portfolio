import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    anime({
      targets: aboutRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div
      ref={aboutRef}
      className="about-box"
      style={{
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '700px',
        margin: '2rem auto',
        fontFamily: 'Arial, sans-serif',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={() => {
        anime({
          targets: aboutRef.current,
          scale: 1.03,
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          duration: 300,
          easing: 'easeOutQuad'
        });
      }}
      onMouseLeave={() => {
        anime({
          targets: aboutRef.current,
          scale: 1,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          duration: 300,
          easing: 'easeOutQuad'
        });
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }} className='mt-5'> About Me</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        I’m a B.A. Economics graduate who transitioned into tech through a comprehensive Java Full Stack Development course. I’ve developed strong skills in HTML, CSS, JavaScript, Bootstrap, React, MySQL, MongoDB, Core Java, and Java. I also hold a certification in Digital Marketing, which adds a strategic edge to my technical profile.
        My internship at State Bank of India (SBI) gave me valuable exposure to real-world banking operations and customer service. I’m a curious learner, a problem solver, and someone who enjoys working on projects that challenge me to grow.
      </p>
    </div>
  );
};

export default About;
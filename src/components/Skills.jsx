import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const SkillsScroll = () => {
  const cardRefs = useRef([]);

  const skills = [
    { name: 'Java', level: 'Expert' },
    { name: 'Spring Boot', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Expert' },
    { name: 'Git & GitHub', level: 'Advanced' },
    { name: 'REST APIs', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
  ];

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      anime({
        targets: card,
        translateY: [30, 0],
        opacity: [0, 1],
        delay: index * 150,
        duration: 800,
        easing: 'easeOutExpo'
      });
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>💡 My Skills</h3>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1rem',
        paddingBottom: '1rem',
        scrollbarWidth: 'thin'
      }}>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            ref={el => cardRefs.current[index] = el}
            style={{
              minWidth: '180px',
              background: '#f0f0f0',
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              flexShrink: 0
            }}
          >
            <h4 style={{ marginBottom: '0.5rem' }}>{skill.name}</h4>
            <p style={{ fontWeight: 'bold', color: '#4caf50' }}>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsScroll;

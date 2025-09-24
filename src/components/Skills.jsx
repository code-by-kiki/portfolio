import React, { useEffect, useState } from "react";

const SkillsScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    { name: "Java", level: "Expert" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "SQL", level: "Intermediate" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(skills[(currentIndex + i) % skills.length]);
    }
    return visible;
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>My Skills</h3>
      <div style={styles.cardWrapper}>
        {getVisibleCards().map((skill, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              transform: `rotateY(${i === 0 ? -15 : i === 2 ? 15 : 0}deg) scale(${i === 1 ? 1 : 0.9})`,
              opacity: i === 1 ? 1 : 0.8,
            }}
          >
            <h4 style={{ marginBottom: "1.5rem" }}>{skill.name}</h4>
            <p style={{ fontWeight: "bold", color: "#4caf50" }}>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    marginTop: "1rem",
  },
  heading: {
    marginTop: "5rem",
    fontSize: "1.8rem",
  },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
  card: {
    width: "220px",
    background: "#f0f0f0",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
    textAlign: "center",
    transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
  },
};

export default SkillsScroll;
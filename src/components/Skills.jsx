import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "Java", color: "rgb(113, 90, 90)",level:90},
  { name: "Html", color: "rgb(113, 90, 90)",level:90 },
  { name: "Css", color: "rgb(113, 90, 90)" ,level:90},
  { name: "Bootstrap", color: "rgb(113, 90, 90)",level:90 },
  { name: "My SQL", color: "rgb(113, 90, 90)",level:90 },
  { name: "Git-Hub", color: "rgb(113, 90, 90)",level:90 },
  { name: "React", color:  "rgb(113, 90, 90)",level:90},
  { name: "Node.js", color:  "rgb(113, 90, 90)",level:90}
];

const SwipeableCards = () => {
  const [index, setIndex] = useState(0);

  // Manual swipe handler
  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100 || info.offset.x < -100) {
      setIndex((prev) => (prev + 1) % skills.length);
    }
  };

  // Auto-change card every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 3000); // change every 3s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-80 h-96">
        <h3 className="text-center mb-4">Skills</h3>
        <AnimatePresence>
          <motion.div
            key={skills[index].name}{...skills[index].level}
            drag="x"
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl"
            style={{ backgroundColor: skills[index].color }}
            initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 15, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {skills[index].name}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SwipeableCards;

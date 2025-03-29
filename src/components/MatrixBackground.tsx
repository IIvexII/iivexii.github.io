"use client";

import { useEffect, useState } from "react";

export default function MatrixBackground() {
  const [boxes, setBoxes] = useState<{ x: number; y: number; opacity: number; delay: number }[]>([]);

  useEffect(() => {
    // Create grid of boxes
    const generateBoxes = () => {
      const newBoxes = [];
      const cols = Math.floor(window.innerWidth / 40); // Adjust box size here
      const rows = Math.floor(Math.max(window.innerHeight, 720) / 40); // Minimum height is 720px

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          newBoxes.push({
            x,
            y,
            opacity: Math.random() * 0.15, // Random initial opacity
            delay: Math.random() * 5, // Random animation delay
          });
        }
      }

      setBoxes(newBoxes);
    };

    generateBoxes();

    // Regenerate on resize
    window.addEventListener("resize", generateBoxes);
    return () => window.removeEventListener("resize", generateBoxes);
  }, []);

  return (
    <div className='absolute inset-0 overflow-hidden'>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black opacity-80'></div>

      {/* Matrix boxes */}
      {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${box.x * 40}px`,
            top: `${box.y * 40}px`,
            width: "30px",
            height: "30px",
            opacity: box.opacity,
            backgroundColor: "#0c4a6e",
            boxShadow: "0 0 10px rgba(0, 150, 250, 0.5)",
            animationDelay: `${box.delay}s`,
          }}
          className='matrix-box'
        />
      ))}
    </div>
  );
}

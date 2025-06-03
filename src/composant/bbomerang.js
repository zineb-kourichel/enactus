// RandomMovementAnimation.js
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RandomMovementAnimation() {
  const { scrollYProgress } = useScroll();

  // Define a random path for x and y positions
  const xPosition = useTransform(scrollYProgress, [0, 1], ["-50vw", "150vw"]); // Move across the screen
  const yPosition = useTransform(scrollYProgress, [0, 1], ["-50vh", "50vh"]); // Move vertically

  // Random rotation to add some spinning effect
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{
        position: "fixed", // Keep it fixed above everything
        top: "50%", // Initial position from top of the viewport
        left: "50%", // Initial position from left of the viewport
        transform: "translate(-50%, -50%)", // To center the logo
        width: "200px", // Set logo size
        height: "100px",
        backgroundImage: "url('/images/Logowhite.png')", // Your logo image path
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        borderRadius: "50%",
        x: xPosition, // Apply random horizontal movement
        y: yPosition, // Apply random vertical movement
        rotate: rotation, // Apply random rotation
        zIndex: 10, // Ensure it's above all other content
      }}
    />
  );
}

"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="min-h-screen bg-[#111] flex items-center justify-center px-6 sm:px-10 text-white">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-32 items-center">
        {/* Left Side - Text */}
        <div className="text-center lg:text-left space-y-6">
          {/* Top Text */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.05em",
            }}
          >
            FULL STACK
          </motion.h2>

          {/* Main Highlight */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-8xl sm:text-9xl md:text-[11rem] text-orange-600 leading-none"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            DEVELOPER
          </motion.h1>

          {/* Typewriter Name */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl mt-4 whitespace-nowrap overflow-hidden"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.05em",
            }}
          >
            HEY THERE, I’M{" "}
            <span className="text-orange-600 font-semibold">
              <Typewriter
                words={["UJJWAL"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>
        </div>

        {/* Right Side - Animated Profile Picture */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mt-10 lg:mt-0"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-800 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition">
            <span className="text-gray-400 text-lg sm:text-xl">
              Your Image Here
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

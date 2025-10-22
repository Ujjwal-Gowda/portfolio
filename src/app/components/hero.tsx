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
    <section className="min-h-screen bg-[#111] flex items-center justify-center px-4 sm:px-6 md:px-10 text-white">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        {/* Left Side - Text */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6">
          {/* Top Text */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
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
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-orange-600 leading-none"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 whitespace-nowrap overflow-hidden"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.05em",
            }}
          >
            HEY THERE, I&apos;M{" "}
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
          className="flex justify-center mt-8 lg:mt-0"
        >
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gray-800 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition">
            <span className="text-gray-400 text-sm sm:text-base md:text-lg">
              Your Image Here
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

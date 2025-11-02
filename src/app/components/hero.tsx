"use client";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "UJJWAL";

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      const speed = isDeleting ? 50 : 120;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 relative overflow-hidden"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: "#f3f1f0",
        color: "#111",
      }}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="text-center lg:text-left space-y-6 sm:space-y-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight border-4 border-black bg-[#a3c4f3] text-black inline-block px-6 py-3 transform -rotate-1"
            style={{ boxShadow: "6px 6px 0px 0px #111" }}
          >
            FULL STACK
          </h2>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none uppercase tracking-tighter text-black"
            style={{
              textShadow: "6px 6px 0px #ffb3c6",
            }}
          >
            DEVELOPER
          </h1>
          <div className="space-y-4 mt-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
              Hey there, I &apos;m{" "}
              <span className="font-black text-black">
                {displayText}
                <span className="animate-pulse text-[#a3c4f3]">|</span>
              </span>
            </p>

            <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed"></p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <button
                className="bg-[#a3c4f3] border-4 border-black px-8 py-4 font-black uppercase text-base transform transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: "6px 6px 0px 0px #111" }}
              >
                View Work
              </button>
              <button
                className="bg-[#ffb3c6] border-4 border-black px-8 py-4 font-black uppercase text-base transform transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: "6px 6px 0px 0px #111" }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <div
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] bg-white border-8 border-black overflow-hidden transform transition-all hover:scale-105"
            style={{ boxShadow: "12px 12px 0px 0px #111" }}
          >
            <img
              src="/your-photo.jpg"
              alt="Ujjwal"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

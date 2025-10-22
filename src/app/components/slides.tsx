"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CardSlides() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      title: "Audio Player",
      image: "/images/play4.png",
      link: "/projects/audio-player",
      accent: "#9333ea",
    },
    {
      title: "Audio Player 2",
      image: "/images/play3.png",
      link: "/projects/audio-player-2",
      accent: "#0ea5e9",
    },
    {
      title: "Chat App",
      image: "/images/chat4.png",
      link: "/projects/chat-app",
      accent: "#10b981",
    },
    {
      title: "Wallpaper App",
      image: "/images/wall.png",
      link: "/projects/wallpaper-app",
      accent: "#f59e0b",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] flex items-center justify-center font-sans px-4 py-8 md:py-0">
      <div className="w-full max-w-7xl">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center gap-8 perspective-1000">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => router.push(card.link)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-[580px] w-[340px] bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out group"
              style={{
                transform:
                  hoveredIndex === index
                    ? "translateY(-20px) scale(1.08)"
                    : "translateY(0) scale(1)",
                zIndex: hoveredIndex === index ? 50 : 10,
              }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                  style={{
                    filter: hoveredIndex === index ? "brightness(110%)" : "brightness(85%)",
                    transform: hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                  }}
                />
              </div>

              {/* Subtle Vignette (top and sides only) */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
                }}
              />

              {/* Accent Glow on Hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
                style={{
                  opacity: hoveredIndex === index ? 0.15 : 0,
                  background: `radial-gradient(circle at 50% 120%, ${card.accent} 0%, transparent 70%)`,
                }}
              />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Title Section */}
                <div className="relative z-10">
                  <h3
                    className="text-white font-light text-3xl tracking-wide transition-all duration-300"
                    style={{
                      transform: hoveredIndex === index ? "translateY(-4px)" : "translateY(0)",
                      textShadow: "0 2px 12px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <div
                    className="mt-3 h-0.5 rounded-full transition-all duration-500"
                    style={{
                      width: hoveredIndex === index ? "60px" : "0px",
                      backgroundColor: card.accent,
                      boxShadow: hoveredIndex === index ? `0 0 12px ${card.accent}` : "none",
                    }}
                  />
                </div>

                {/* Bottom Indicator */}
                <div className="flex items-center gap-2 opacity-0 transition-opacity duration-300"
                  style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <span className="text-white/70 text-sm font-light">View Project</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300"
                    style={{ transform: hoveredIndex === index ? "translateX(4px)" : "translateX(0)" }}
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke={card.accent}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Border Glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500"
                style={{
                  border: hoveredIndex === index ? `1px solid ${card.accent}40` : "1px solid transparent",
                  boxShadow: hoveredIndex === index ? `0 0 30px ${card.accent}30` : "none",
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => router.push(card.link)}
              className="relative h-80 bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform duration-200"
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(85%)" }}
                />
              </div>

              {/* Vignette */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-light text-2xl sm:text-3xl drop-shadow-lg">
                    {card.title}
                  </h3>
                  <div
                    className="mt-2 w-12 h-0.5 rounded-full"
                    style={{ backgroundColor: card.accent }}
                  />
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

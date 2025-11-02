"use client";
import React, { useState } from "react";

export default function CardSlides() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Audio Player",
      image: "/images/play4.png",
      link: "https://audio-player-five-coral.vercel.app/",
      color: "#A78BFA",
    },
    {
      title: "Chat App",
      image: "/images/chat4.png",
      link: "https://chat-app-od00.onrender.com/",
      color: "#34D399",
    },
    {
      title: "Task Manager",
      image: "/images/task2.png",
      link: "https://task-management-beige-chi.vercel.app/",
      color: "#60A5FA",
    },
    {
      title: "Wallpaper App",
      image: "/images/wall.png",
      link: "https://wallpaper-app-frontend.vercel.app/",
      color: "#FDE047",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f1f0] flex items-center justify-center font-sans px-4 py-12 md:py-0 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-8 border-black transform rotate-12 opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 transform -rotate-6 opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 transform rotate-45 opacity-10"></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-black border-4 border-black px-6 py-2 mb-4 transform rotate-1">
            <p className="text-yellow-400 font-black text-xs sm:text-sm tracking-widest">
              ⚡ FEATURED WORK ⚡
            </p>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase"
            style={{ textShadow: "4px 4px 0px #FDE047" }}
          >
            Projects
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => window.open(card.link, "_blank")}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-[540px] w-[300px] lg:w-[340px] bg-white border-4 border-black overflow-hidden cursor-pointer transition-all duration-300 group"
              style={{
                transform:
                  hoveredIndex === index
                    ? "translateY(-16px) scale(1.05) rotate(2deg)"
                    : "translateY(0) scale(1) rotate(0deg)",
                zIndex: hoveredIndex === index ? 50 : 10,
                boxShadow:
                  hoveredIndex === index
                    ? `16px 16px 0px 0px ${card.color}`
                    : "8px 8px 0px 0px #000",
              }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    filter:
                      hoveredIndex === index
                        ? "brightness(0.9)"
                        : "brightness(1)",
                  }}
                />
              </div>

              {/* Color Overlay on Hover */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  backgroundColor: card.color,
                  opacity: hoveredIndex === index ? 0.15 : 0,
                  mixBlendMode: "multiply",
                }}
              />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                {/* Top Corner Emoji */}
                <div
                  className="text-5xl transition-all duration-300"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "scale(1.2) rotate(10deg)"
                        : "scale(1) rotate(0deg)",
                  }}
                ></div>

                {/* Bottom Section */}
                <div>
                  {/* Title */}
                  <div
                    className="bg-white border-4 border-black p-4 mb-4 transition-all duration-300"
                    style={{
                      boxShadow:
                        hoveredIndex === index
                          ? `6px 6px 0px 0px ${card.color}`
                          : "4px 4px 0px 0px #000",
                      transform:
                        hoveredIndex === index
                          ? "translateY(-8px)"
                          : "translateY(0)",
                    }}
                  >
                    <h3 className="text-black font-black text-2xl uppercase tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* View Button */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: hoveredIndex === index ? "60px" : "0px",
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                  >
                    <button
                      className="w-full bg-black border-4 border-black py-3 font-black uppercase text-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
                      style={{
                        color: card.color,
                        boxShadow: `4px 4px 0px 0px ${card.color}`,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = `0px 0px 0px 0px ${card.color}`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${card.color}`)
                      }
                    >
                      View Project →
                    </button>
                  </div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div
                className="absolute top-0 left-0 w-4 h-4 border-4 border-black transition-colors duration-300"
                style={{
                  borderColor: hoveredIndex === index ? card.color : "#000",
                  backgroundColor:
                    hoveredIndex === index ? card.color : "transparent",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-4 h-4 border-4 border-black transition-colors duration-300"
                style={{
                  borderColor: hoveredIndex === index ? card.color : "#000",
                  backgroundColor:
                    hoveredIndex === index ? card.color : "transparent",
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
              onClick={() => window.open(card.link, "_blank")}
              className="relative h-80 bg-white border-4 border-black overflow-hidden cursor-pointer active:scale-95 transition-all duration-200"
              style={{ boxShadow: "6px 6px 0px 0px #000" }}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tag */}
              <div className="absolute top-3 right-3 bg-black border-2 border-black px-3 py-1 z-20">
                <span className="text-white font-black text-xs uppercase">
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <div className="text-4xl">{card.emoji}</div>

                <div
                  className="bg-white border-4 border-black p-3"
                  style={{ boxShadow: `4px 4px 0px 0px ${card.color}` }}
                >
                  <h3 className="text-black font-black text-xl uppercase">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Corner Decorations */}
              <div
                className="absolute top-0 left-0 w-3 h-3"
                style={{ backgroundColor: card.color }}
              />
              <div
                className="absolute bottom-0 right-0 w-3 h-3"
                style={{ backgroundColor: card.color }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={() =>
              window.open(
                "https://github.com/Ujjwal-Gowda?tab=repositories",
                "_blank",
              )
            }
            className="bg-black text-white border-4 border-black px-8 py-4 font-black text-base uppercase transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none inline-flex items-center gap-3"
            style={{ boxShadow: "8px 8px 0px 0px #FDE047" }}
          >
            <span>View All Projects</span>
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

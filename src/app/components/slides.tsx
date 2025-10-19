"use client";

import React from "react";

const cards = [
  { title: "Card 1" },
  { title: "Card 2" },
  { title: "Card 3" },
  { title: "Card 4" },
];

export default function CardCarousel() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#100e17] font-sans">
      <div className="relative flex h-[300px] w-[600px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group absolute h-[280px] w-[200px] bg-[#17141d] rounded-xl shadow-[ -1rem_0_3rem_#000]
              transition-all duration-500 ease-out`}
            style={{
              left: `${index * 150}px`,
              zIndex: `${10 - index}`,
            }}
          >
            {/* Title */}
            <h3 className="text-white font-light absolute left-5 top-4">
              {card.title}
            </h3>

            {/* Progress Bar */}
            <div className="absolute top-[100px] left-5 h-[5px] w-[150px]">
              <div className="bg-[#2e3033] w-full h-full"></div>
              <div
                className="absolute top-0 h-full w-0 bg-gradient-to-r from-[#009ad9] via-[#d99300] to-[#ffba00]
                  transition-all duration-500 ease-out group-hover:w-[120px]"
              ></div>
            </div>

            {/* Circle animation */}
            <div className="absolute top-[150px] left-1/2 -translate-x-1/2">
              <svg
                viewBox="0 0 120 120"
                className="w-[120px] h-[120px] fill-[#17141d] stroke-[2px]"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="stroke-white [stroke-dasharray:360] [stroke-dashoffset:360]
                    transition-all duration-700 ease-out group-hover:[stroke-dashoffset:100]"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Hover cascade logic */}
      <style jsx>{`
        .relative > div:hover {
          transform: translateY(-20px);
          transition: transform 0.4s ease-out;
        }

        .relative > div:hover ~ div {
          transform: translateX(50px);
          transition: transform 0.4s ease-out;
        }

        .relative > div:not(:first-child) {
          margin-left: -50px;
        }
      `}</style>
    </div>
  );
}

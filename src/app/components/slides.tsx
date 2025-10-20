
"use client";
import React from "react";

export default function CardSlides() {
  const cards = [
    { title: "Audio Player", image: "/images/play4.png" },
    { title: "Audio Player", image: "/images/play3.png" },
    { title: "Chat App", image: "/images/chat4.png" },
    { title: "Wallpaper App", image: "/images/wall.png" },
  ];

  return (
    <div className="min-h-screen bg-[#100e17] flex items-center justify-center font-sans px-4">
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card-item group">
            {/* Image */}
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-overlay" />
            </div>

            {/* Title */}
            <h3 className="card-title">{card.title}</h3>

            {/* Progress Bar */}
            <div className="bar-container">
              <div className="bg-[#2e3033] w-full h-full rounded-full"></div>
              <div className="filled-bar"></div>
            </div>

            {/* Circle */}
            <div className="circle-container">
              <svg xmlns="http://www.w3.org/2000/svg" className="circle-svg">
                <circle className="stroke-circle" cx="75" cy="75" r="65" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* STYLES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .card-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 1600px;
            height: 650px;
            margin: 0 auto;
          }

          .card-item {
            position: relative;
            height: 620px;
            width: 450px;
            background-color: #17141d;
            border-radius: 25px;
            box-shadow: -1rem 0 1rem #000;
            transition: all 0.4s ease-out;
            overflow: hidden;
            cursor: pointer;
          }

          .card-item:not(:first-child) {
            margin-left: -150px;
          }

          .card-item:hover {
            transform: translateY(-40px) scale(1.05);
            z-index: 10;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5),
                        -0.5rem 0 1rem #000,
                        0 0 0 1px rgba(255, 255, 255, 0.05);
          }

          .card-item:hover ~ .card-item {
            position: relative;
            left: 150px;
          }

          /* Image & overlay */
          .card-image-wrapper {
            position: absolute;
            inset: 0;
            z-index: 1;
            overflow: hidden;
          }

          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1);
            filter: brightness(70%);
            transition: all 0.5s ease;
          }

          .card-item:hover .card-image {
            transform: scale(1.08);
            filter: brightness(100%);
          }

          .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(23,20,29,0.05) 0%, rgba(23,20,29,0.85) 100%);
            z-index: 2;
          }

          /* Title */
          .card-title {
            position: absolute;
            left: 40px;
            top: 35px;
            color: white;
            font-weight: 300;
            font-size: 2rem;
            z-index: 3;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .card-item:hover .card-title {
            transform: translateY(-8px);
            color: #ffba00;
          }

          /* Progress Bar */
          .bar-container {
            position: absolute;
            top: 220px;
            left: 40px;
            height: 10px;
            width: 340px;
            z-index: 3;
            border-radius: 10px;
            overflow: hidden;
          }

          .filled-bar {
            position: absolute;
            top: 0;
            width: 290px;
            height: 100%;
            background: linear-gradient(90deg, rgb(0,154,217) 0%, rgb(217,147,0) 65%, rgb(255,186,0) 100%);
            border-radius: 10px;
            transition: width 0.5s ease;
          }

          .card-item:hover .filled-bar {
            width: 340px;
          }

          /* Circle */
          .circle-container {
            position: absolute;
            top: 340px;
            left: calc(50% - 105px);
            z-index: 3;
          }

          .circle-svg {
            width: 210px;
            height: 210px;
            fill: transparent;
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
          }

          .stroke-circle {
            stroke: white;
            stroke-width: 4px;
            stroke-dasharray: 440;
            stroke-dashoffset: 140;
            transition: all 0.5s ease;
          }

          .card-item:hover .stroke-circle {
            stroke-dashoffset: 70;
            stroke: #ffba00;
          }
        `,
        }}
      />
    </div>
  );
}
"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function CardSlides() {
  const router = useRouter();

  const cards = [
    {
      title: "Audio Player",
      image: "/images/play4.png",
      link: "/projects/audio-player",
    },
    {
      title: "Audio Player 2",
      image: "/images/play3.png",
      link: "/projects/audio-player-2",
    },
    {
      title: "Chat App",
      image: "/images/chat4.png",
      link: "/projects/chat-app",
    },
    {
      title: "Wallpaper App",
      image: "/images/wall.png",
      link: "/projects/wallpaper-app",
    },
  ];

  return (
    <div className="min-h-screen bg-[#100e17] flex items-center justify-center font-sans px-4">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => router.push(card.link)}
            className="card-item group"
          >
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-overlay" />
            </div>
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>

      {/* Minimal Styles */}
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
        `,
        }}
      />
    </div>
  );
}

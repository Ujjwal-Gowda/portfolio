import React from "react";

export default function CardSlides() {
  const cards = [
    {
      title: "Audio Player",
      image: "/images/play4.png",
    },
    {
      title: "Audio Player",
      image: "/images/play3.png",
    },
    {
      title: "Chat App",
      image: "/images/chat4.png",
    },
    {
      title: "Wallpaper App",
      image: "/images/wall.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#100e17] flex items-center justify-center font-sans px-4 py-20">
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card-item">
            {/* Image Container */}
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.title} className="card-image" />
              {/* Overlay gradient */}
              <div className="card-overlay"></div>
            </div>

            {/* Title */}
            <h3 className="card-title">{card.title}</h3>

            {/* Progress Bar */}
            <div className="bar-container">
              <div className="bg-[#2e3033] w-full h-full rounded-full"></div>
              <div className="filled-bar"></div>
            </div>

            {/* Circle SVG */}
            <div className="circle-container">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="circle-svg"
              >
                <circle className="stroke-circle" cx="75" cy="75" r="65" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .card-container {
            position: relative;
            display: flex;
            width: 100%;
            max-width: 800px;
            height: 400px;
          }

          @media (min-width: 768px) {
            .card-container {
              max-width: 1200px;
              height: 550px;
            }
          }

          @media (min-width: 1024px) {
            .card-container {
              max-width: 1600px;
              height: 650px;
            }
          }

          .card-item {
            display: flex;
            position: relative;
            height: 380px;
            width: 280px;
            background-color: #17141d;
            border-radius: 15px;
            box-shadow: -1rem 0 3rem #000;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            left: 0px;
            overflow: hidden;
            cursor: pointer;
          }

          @media (min-width: 768px) {
            .card-item {
              height: 520px;
              width: 380px;
              border-radius: 20px;
            }
          }

          @media (min-width: 1024px) {
            .card-item {
              height: 620px;
              width: 450px;
              border-radius: 25px;
            }
          }

          .card-item:not(:first-child) {
            margin-left: -80px;
          }

          @media (min-width: 768px) {
            .card-item:not(:first-child) {
              margin-left: -120px;
            }
          }

          @media (min-width: 1024px) {
            .card-item:not(:first-child) {
              margin-left: -150px;
            }
          }

          .card-item:hover {
            transform: translateY(-30px) scale(1.02);
            z-index: 10;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8),
                        -1rem 0 3rem #000,
                        0 0 0 1px rgba(255, 255, 255, 0.1);
          }

          .card-item::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            z-index: -1;
          }

          @media (min-width: 768px) {
            .card-item:hover {
              transform: translateY(-40px) scale(1.03);
              box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9),
                          -1rem 0 3rem #000,
                          0 0 0 1px rgba(255, 255, 255, 0.1);
            }

            .card-item::before {
              top: -15px;
              left: -15px;
              right: -15px;
              bottom: -15px;
            }
          }

          @media (min-width: 1024px) {
            .card-item:hover {
              transform: translateY(-50px) scale(1.04);
            }

            .card-item::before {
              top: -20px;
              left: -20px;
              right: -20px;
              bottom: -20px;
            }
          }

          .card-item:hover ~ .card-item {
            position: relative;
            left: 80px;
          }

          @media (min-width: 768px) {
            .card-item:hover ~ .card-item {
              left: 120px;
            }
          }

          @media (min-width: 1024px) {
            .card-item:hover ~ .card-item {
              left: 150px;
            }
          }

          .card-image-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }

          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(23, 20, 29, 0.2) 0%, rgba(23, 20, 29, 0.95) 100%);
            z-index: 2;
            transition: background 0.5s ease;
          }

          .card-item:hover .card-overlay {
            background: linear-gradient(180deg, rgba(23, 20, 29, 0.1) 0%, rgba(23, 20, 29, 0.9) 100%);
          }

          .card-title {
            position: absolute;
            left: 25px;
            top: 20px;
            color: white;
            font-weight: 300;
            font-size: 1.25rem;
            z-index: 3;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
          }

          .card-item:hover .card-title {
            transform: translateY(-5px);
            font-size: 1.4rem;
          }

          @media (min-width: 768px) {
            .card-title {
              left: 35px;
              top: 30px;
              font-size: 1.75rem;
            }

            .card-item:hover .card-title {
              font-size: 1.9rem;
            }
          }

          @media (min-width: 1024px) {
            .card-title {
              left: 40px;
              top: 35px;
              font-size: 2rem;
            }

            .card-item:hover .card-title {
              font-size: 2.2rem;
            }
          }

          .bar-container {
            position: absolute;
            top: 120px;
            left: 25px;
            height: 6px;
            width: 200px;
            z-index: 3;
            border-radius: 10px;
            overflow: hidden;
          }

          @media (min-width: 768px) {
            .bar-container {
              top: 180px;
              left: 35px;
              width: 280px;
              height: 8px;
            }
          }

          @media (min-width: 1024px) {
            .bar-container {
              top: 220px;
              left: 40px;
              width: 340px;
              height: 10px;
            }
          }

          .filled-bar {
            position: absolute;
            top: 0px;
            z-index: 3;
            width: 0px;
            height: 100%;
            background: linear-gradient(90deg, rgb(0,154,217) 0%, rgb(217,147,0) 65%, rgb(255,186,0) 100%);
            transition: width 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(255, 186, 0, 0.5);
          }

          .card-item:hover .filled-bar {
            width: 160px;
          }

          @media (min-width: 768px) {
            .card-item:hover .filled-bar {
              width: 230px;
            }
          }

          @media (min-width: 1024px) {
            .card-item:hover .filled-bar {
              width: 290px;
            }
          }

          .circle-container {
            position: absolute;
            top: 200px;
            left: calc(50% - 75px);
            z-index: 3;
          }

          @media (min-width: 768px) {
            .circle-container {
              top: 280px;
              left: calc(50% - 90px);
            }
          }

          @media (min-width: 1024px) {
            .circle-container {
              top: 340px;
              left: calc(50% - 105px);
            }
          }

          .circle-svg {
            width: 150px;
            height: 150px;
            fill: transparent;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
          }

          @media (min-width: 768px) {
            .circle-svg {
              width: 180px;
              height: 180px;
            }
          }

          @media (min-width: 1024px) {
            .circle-svg {
              width: 210px;
              height: 210px;
            }
          }

          .stroke-circle {
            stroke: white;
            stroke-width: 3px;
            stroke-dasharray: 440;
            stroke-dashoffset: 440;
            transition: stroke-dashoffset 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          }

          @media (min-width: 768px) {
            .stroke-circle {
              stroke-width: 4px;
            }
          }

          .card-item:hover .stroke-circle {
            stroke-dashoffset: 140;
          }
        `,
        }}
      />
    </div>
  );
}

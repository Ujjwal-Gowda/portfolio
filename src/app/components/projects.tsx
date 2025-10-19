"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Wallpaper App",
    category: "Web Dev",
    description:
      "A Pintrest inspired Wallpaper App built with React, Tailwind, and Unsplash API. User friendly and a modern UI.",
    media: [
      { type: "image", src: "/images/wall.png" },
      { type: "image", src: "/images/wall2.png" },
      { type: "image", src: "/images/wall3.png" },
      { type: "image", src: "/images/wall4.png" },
    ],
    link: "https://wallpaper-app-frontend.vercel.app/",
  },
  {
    title: "Chat-App",
    category: "web dev",
    description:
      "A Chat App built with React, Tailwind, socket.io and daisyui. User friendly and a modern UI.",
    media: [
      { type: "image", src: "/images/chat1.png" },
      { type: "image", src: "/images/chat2.png" },
      { type: "image", src: "/images/chat3.png" },
      { type: "image", src: "/images/chat4.png" },
    ],
    link: "https://chat-app-od00.onrender.com/",
  },
  {
    title: "Audio Player",
    category: "web dev",
    description:
      "A Audio Player built with React, Tailwind and spotify web api . A minimalistic approach to elevate the user experience.",
    media: [
      { type: "image", src: "/images/play1.png" },
      { type: "image", src: "/images/play2.png" },
      { type: "image", src: "/images/play3.png" },
      { type: "image", src: "/images/play4.png" },
      { type: "image", src: "/images/play5.png" },
      { type: "image", src: "/images/play6.png" },
    ],
    link: "https://audio-player-five-coral.vercel.app/",
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setCurrentSlide(0);
    } else {
      setOpenIndex(index);
      setCurrentSlide(0);
    }
  };

  const nextSlide = (mediaLength: number) => {
    setCurrentSlide((prev) => (prev + 1) % mediaLength);
  };

  const prevSlide = (mediaLength: number) => {
    setCurrentSlide((prev) => (prev - 1 + mediaLength) % mediaLength);
  };

  // 🕒 Auto-play logic
  useEffect(() => {
    if (openIndex === null || isPaused) return;
    const mediaLength = projects[openIndex].media.length;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaLength);
    }, 4000); // change every 4 seconds

    return () => clearInterval(timer);
  }, [openIndex, isPaused]);

  return (
    <section className="min-h-screen flex flex-col items-center py-16 justify-center bg-[#111]">
      <h2 className="text-sm tracking-widest text-gray-300 mb-6">
        RECENT PROJECTS
      </h2>

      <div className="w-full max-w-3xl space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-2 cursor-pointer"
            onClick={() => toggle(index)}
          >
            {/* Header row */}
            <div className="flex justify-between items-center py-3">
              <p className="text-white font-medium">{project.title}</p>
              <span className="text-gray-500 text-sm">{project.category}</span>
            </div>

            {/* Drop-down content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden text-white"
                >
                  <div
                    className="py-4 space-y-4"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <p>{project.description}</p>

                    {/* Carousel */}
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-full"
                        >
                          {project.media[currentSlide].type === "image" ? (
                            <Image
                              src={project.media[currentSlide].src}
                              alt={`${project.title}-${currentSlide}`}
                              width={800}
                              height={450}
                              className="w-full h-auto object-cover rounded-2xl"
                            />
                          ) : (
                            <video
                              src={project.media[currentSlide].src}
                              controls
                              className="w-full rounded-2xl"
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation buttons */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide(project.media.length);
                        }}
                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide(project.media.length);
                        }}
                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        ›
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.media.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlide(i);
                            }}
                            className={`w-2.5 h-2.5 rounded-full ${
                              currentSlide === i
                                ? "bg-white"
                                : "bg-gray-500/50 hover:bg-gray-300"
                            }`}
                          ></button>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      className="text-sm text-blue-500 hover:underline block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          window.open("https://github.com/ujjwal-gowda", "git hub")
        }
        className="mt-10 px-5 py-2 border border-gray-500 text-gray-300 rounded-full text-sm hover:bg-gray-800 transition  hover:px-6"
      >
        Git Hub →
      </button>
    </section>
  );
}

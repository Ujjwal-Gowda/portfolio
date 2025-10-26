"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Wallpaper App",
    category: "Web Dev",
    description:
      "A Pinterest-inspired Wallpaper App built with React, Tailwind, and Unsplash API. Modern, clean, and user-friendly.",
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
    category: "Web Dev",
    description:
      "A chat application using React, Tailwind, Socket.io, and DaisyUI with a sleek real-time interface.",
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
    category: "Web Dev",
    description:
      "A Spotify-inspired Audio Player built with React, Tailwind, and the Spotify Web API. Minimal and elegant.",
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile layout
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth mobile scroll-based open/close
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );

          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            // Cancel any pending close
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
            setOpenIndex(index);
            setCurrentSlide(0);
          } else if (!entry.isIntersecting && openIndex === index) {
            // Small delay before closing for smoother UX
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = setTimeout(() => {
              setOpenIndex(null);
            }, 350);
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, [isMobile, openIndex]);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setOpenIndex(index);
      setCurrentSlide(0);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenIndex(null);
      setCurrentSlide(0);
    }
  };

  const nextSlide = (mediaLength: number) =>
    setCurrentSlide((prev) => (prev + 1) % mediaLength);

  const prevSlide = (mediaLength: number) =>
    setCurrentSlide((prev) => (prev - 1 + mediaLength) % mediaLength);

  // Auto-play slides when open
  useEffect(() => {
    if (openIndex === null || isPaused) return;
    const mediaLength = projects[openIndex].media.length;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaLength);
    }, 4000);
    return () => clearInterval(timer);
  }, [openIndex, isPaused]);

  return (
    <section className="min-h-screen flex flex-col items-center py-10 sm:py-16 bg-[#111] px-4 sm:px-6">
      <h2 className="text-xs sm:text-sm tracking-widest text-gray-400 mb-6 sm:mb-8">
        RECENT PROJECTS
      </h2>

      <div className="w-full max-w-3xl space-y-3 sm:space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="border-b border-gray-700 pb-2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center py-3">
              <p className="text-white font-medium text-sm sm:text-base">
                {project.title}
              </p>
              <span className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                {project.category}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key={index}
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden text-white"
                >
                  <div
                    className="py-4 space-y-4"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                  >
                    <p className="text-sm sm:text-base text-gray-300">
                      {project.description}
                    </p>

                    <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {project.media[currentSlide].type === "image" ? (
                            <Image
                              src={project.media[currentSlide].src}
                              alt={`${project.title}-${currentSlide}`}
                              width={800}
                              height={450}
                              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                            />
                          ) : (
                            <video
                              src={project.media[currentSlide].src}
                              controls
                              className="w-full rounded-xl sm:rounded-2xl"
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide(project.media.length);
                        }}
                        className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full text-lg sm:text-xl transition"
                        aria-label="Previous"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide(project.media.length);
                        }}
                        className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full text-lg sm:text-xl transition"
                        aria-label="Next"
                      >
                        ›
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.media.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlide(i);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${currentSlide === i
                                ? "bg-white scale-110"
                                : "bg-gray-500/50 hover:bg-gray-300"
                              }`}
                          ></button>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 hover:underline block"
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
        onClick={() => window.open("https://github.com/ujjwal-gowda", "_blank")}
        className="mt-10 px-5 py-2 border border-gray-600 text-gray-300 rounded-full text-sm hover:bg-gray-800 hover:border-gray-400 transition-all active:scale-95"
      >
        GitHub →
      </button>
    </section>
  );
}

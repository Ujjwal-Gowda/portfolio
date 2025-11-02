"use client";
import { useState, useEffect, useRef } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  color: string;
  media: { type: "image" | "video"; src: string }[];
  link: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: "Wallpaper App",
    category: "Web Dev",
    description:
      "A Pinterest-inspired Wallpaper App built with React, Tailwind, and Unsplash API. Modern, clean, and user-friendly.",
    color: "#b7c9f2",
    media: [
      { type: "image", src: "/images/wall.png" },
      { type: "image", src: "/images/wall2.png" },
      { type: "image", src: "/images/wall3.png" },
      { type: "image", src: "/images/wall4.png" },
    ],
    link: "https://wallpaper-app-frontend.vercel.app/",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Chat App",
    category: "Web Dev",
    description:
      "A chat application using React, Tailwind, Socket.io, and DaisyUI with a sleek real-time interface.",
    color: "#ffd4e5",
    media: [
      { type: "image", src: "/images/chat1.png" },
      { type: "image", src: "/images/chat2.png" },
      { type: "image", src: "/images/chat3.png" },
      { type: "image", src: "/images/chat4.png" },
    ],
    link: "https://chat-app-od00.onrender.com/",
    tags: ["Socket.io", "Real-time", "React"],
  },
  {
    title: "Task Manager",
    category: "Web Dev",
    description:
      "A Spotify-inspired Audio Player built with React, Tailwind, and the Spotify Web API. Minimal and elegant.",
    color: "#c7f0db",
    media: [
      { type: "image", src: "/images/task1.png" },
      { type: "image", src: "/images/task2.png" },
      { type: "image", src: "/images/task3.png" },
    ],
    link: "https://task-management-beige-chi.vercel.app/",
    tags: ["Spotify API", "Music", "React"],
  },
  {
    title: "E-com Cart",
    category: "Web Dev",
    description:
      "A Spotify-inspired Audio Player built with React, Tailwind, and the Spotify Web API. Minimal and elegant.",
    color: "#fde4cf",
    media: [
      { type: "image", src: "/images/ecart1.png" },
      { type: "image", src: "/images/ecart2.png" },
    ],
    link: "https://e-cart-peach-psi.vercel.app/",
    tags: ["Spotify API", "Music", "React"],
  },
  {
    title: "Audio Player",
    category: "Web Dev",
    description:
      "A Spotify-inspired Audio Player built with React, Tailwind, and the Spotify Web API. Minimal and elegant.",
    color: "#e5d4f7",
    media: [
      { type: "image", src: "/images/play1.png" },
      { type: "image", src: "/images/play2.png" },
      { type: "image", src: "/images/play3.png" },
      { type: "image", src: "/images/play4.png" },
    ],
    link: "https://audio-player-five-coral.vercel.app/",
    tags: ["Spotify API", "Music", "React"],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlides, setCurrentSlides] = useState<number[]>(
    projects.map(() => 0),
  );
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Center opened project or restore scroll position on close
  useEffect(() => {
    if (openIndex !== null && projectRefs.current[openIndex]) {
      scrollPositionRef.current = window.scrollY;

      setTimeout(() => {
        projectRefs.current[openIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 400);
    } else if (openIndex === null && scrollPositionRef.current !== 0) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [openIndex]);
  // Center opened project (desktop only, mobile handles in handleClick)
  useEffect(() => {
    if (openIndex !== null && projectRefs.current[openIndex] && !isMobile) {
      scrollPositionRef.current = window.scrollY;

      setTimeout(() => {
        projectRefs.current[openIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 400);
    } else if (
      openIndex === null &&
      scrollPositionRef.current !== 0 &&
      !isMobile
    ) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [openIndex, isMobile]);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      setCurrentSlides((prev) => {
        const newSlides = [...prev];
        newSlides[index] = 0;
        return newSlides;
      });

      // Scroll to center on mobile after a short delay
      if (isMobile) {
        setTimeout(() => {
          projectRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 300);
      }
    }
  };

  const handleHover = (index: number) => {
    if (!isMobile) {
      setOpenIndex(index);
      setCurrentSlides((prev) => {
        const newSlides = [...prev];
        newSlides[index] = 0;
        return newSlides;
      });
    }
  };

  const handleLeave = () => {
    if (!isMobile) {
      setOpenIndex(null);
    }
  };

  const nextSlide = (
    index: number,
    mediaLength: number,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[index] = (newSlides[index] + 1) % mediaLength;
      return newSlides;
    });
  };

  const prevSlide = (
    index: number,
    mediaLength: number,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[index] = (newSlides[index] - 1 + mediaLength) % mediaLength;
      return newSlides;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center py-16 px-4"
      style={{ backgroundColor: "#f3f1f0" }}
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <div
          className="inline-block border-4 px-6 py-2 mb-4 transform -rotate-1"
          style={{
            backgroundColor: "#b7c9f2",
            borderColor: "#000",
            boxShadow: "6px 6px 0 #000",
          }}
        >
          <p className="font-black text-xs sm:text-sm tracking-widest text-black">
            ⚡ RECENT PROJECTS ⚡
          </p>
        </div>
        <h2
          className="text-5xl sm:text-7xl font-black uppercase"
          style={{ color: "#111", textShadow: "4px 4px 0 #f5b5c5" }}
        >
          My Work
        </h2>
      </div>

      {/* Projects */}
      <div className="w-full max-w-5xl space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="border-4 overflow-hidden transition-all duration-500 cursor-pointer relative"
            style={{
              borderColor: "#000",
              backgroundColor: "#fff",
              boxShadow:
                openIndex === index ? "12px 12px 0 #000" : "8px 8px 0 #000",
              transform: openIndex === index ? "scale(1.02)" : "scale(1)",
            }}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            {/* Right Side Stripes */}
            <div className="absolute top-0 right-0 h-full flex items-stretch pointer-events-none">
              <div
                className="w-3 sm:w-4 border-l-4 border-black transition-all duration-500"
                style={{
                  backgroundColor: openIndex === index ? "#fff" : project.color,
                  opacity: openIndex === index ? 0 : 1,
                }}
              />
              <div
                className="w-6 sm:w-8 border-l-4 border-black transition-all duration-500"
                style={{
                  backgroundColor: openIndex === index ? project.color : "#fff",
                  opacity: openIndex === index ? 0 : 1,
                }}
              />
            </div>
            {/* Project Header */}
            <div
              className="flex justify-between items-center p-5 sm:p-6 transition-all duration-500"
              style={{
                backgroundColor: openIndex === index ? project.color : "#fff",
              }}
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Plus Icon */}
                <div
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border-4 border-black flex items-center justify-center font-black text-3xl transition-all duration-500"
                  style={{
                    backgroundColor: "#fff",
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </div>

                {/* Title & Category */}
                <div className="flex-1">
                  <h3 className="font-black text-xl sm:text-2xl uppercase text-black leading-tight">
                    {project.title}
                  </h3>
                  <span
                    className="text-black font-bold text-xs uppercase border-2 border-black px-2 py-1 inline-block mt-2"
                    style={{
                      backgroundColor:
                        openIndex === index ? "#fff" : project.color,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            <div
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: openIndex === index ? "2000px" : "0px",
                opacity: openIndex === index ? 1 : 0,
              }}
            >
              <div
                className="border-t-4 border-black p-6 sm:p-8 space-y-6"
                style={{ backgroundColor: "#fafafa" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Description */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-bold uppercase px-3 py-1 border-2 border-black"
                        style={{ backgroundColor: project.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Media Carousel */}
                <div className="relative border-4 border-black overflow-hidden bg-black">
                  <div className="relative">
                    {project.media[currentSlides[index]].type === "image" ? (
                      <img
                        src={project.media[currentSlides[index]].src}
                        alt={`${project.title} - ${currentSlides[index] + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      <video
                        src={project.media[currentSlides[index]].src}
                        controls
                        className="w-full"
                      />
                    )}
                  </div>

                  {/* Navigation Arrows */}
                  {project.media.length > 1 && (
                    <>
                      <button
                        onClick={(e) =>
                          prevSlide(index, project.media.length, e)
                        }
                        className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 border-4 border-black font-black text-2xl flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          backgroundColor: project.color,
                          boxShadow: "4px 4px 0 #000",
                        }}
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) =>
                          nextSlide(index, project.media.length, e)
                        }
                        className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 border-4 border-black font-black text-2xl flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          backgroundColor: project.color,
                          boxShadow: "4px 4px 0 #000",
                        }}
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Slide Indicators */}
                  {project.media.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.media.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlides((prev) => {
                              const newSlides = [...prev];
                              newSlides[index] = i;
                              return newSlides;
                            });
                          }}
                          className="border-2 border-black transition-all"
                          style={{
                            backgroundColor:
                              currentSlides[index] === i
                                ? project.color
                                : "#fff",
                            width:
                              currentSlides[index] === i ? "2rem" : "0.75rem",
                            height: "0.75rem",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-black border-4 border-black px-6 sm:px-8 py-3 sm:py-4 font-black text-sm sm:text-base uppercase transition-all hover:translate-x-1 hover:translate-y-1"
                  style={{
                    backgroundColor: project.color,
                    boxShadow: "6px 6px 0 #000",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = "0px 0px 0 #000")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "6px 6px 0 #000")
                  }
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Button */}
      <button
        onClick={() => window.open("https://github.com/ujjwal-gowda", "_blank")}
        className="mt-16 border-4 font-black px-8 py-4 text-base sm:text-lg uppercase transition-all hover:translate-x-1 hover:translate-y-1"
        style={{
          backgroundColor: "#a8edea",
          borderColor: "#000",
          color: "#111",
          boxShadow: "8px 8px 0 #000",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0px 0px 0 #000")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "8px 8px 0 #000")
        }
      >
        GitHub →
      </button>
    </section>
  );
}

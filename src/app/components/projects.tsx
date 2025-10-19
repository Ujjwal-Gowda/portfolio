"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { image } from "framer-motion/m";
import Image from "next/image";

const projects = [
  {
    title: "wallpaper App",
    category: "Web Dev",
    description:
      "A sleek personal portfolio built with React, Tailwind, and Framer Motion. Features smooth transitions and a modern UI.",
    image: "/images/portfolio-preview.jpg",
    link: "#",
  },
  {
    title: "Unity 3D Game",
    category: "Game Dev",
    description:
      "A third-person adventure game built in Unity with a custom camera system, combat mechanics, and exploration.",
    video: "/videos/unity-demo.mp4",
    link: "#",
  },
  {
    title: "AI Email Classifier",
    category: "Machine Learning",
    description:
      "A React + FastAPI project that classifies emails using GPT APIs and provides smart tagging features.",
    image: "/images/ai-email.jpg",
    link: "#",
  },
  {
    title: "AI Email Classifier",
    category: "Machine Learning",
    description:
      "A React + FastAPI project that classifies emails using GPT APIs and provides smart tagging features.",
    image: "/images/ai-email.jpg",
    link: "#",
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" min-h-screen flex flex-col items-center py-16 justify-center">
      <h2 className="text-sm tracking-widest text-white mb-6">
        RECENT PROJECTS
      </h2>

      <div className="w-full max-w-2xl space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-2 cursor-pointer"
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
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-white"
                >
                  <div className="py-3 space-y-3">
                    <p>{project.description}</p>
                    {/* Image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-2xl shadow-sm w-full object-cover"
                      />
                    )}
                    <Image
                      src={`${project.image}`}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="rounded-2xl shadow-sm w-full object-cover"
                    />
                    {/* Video */}
                    {project.video && (
                      <video
                        src={project.video}
                        controls
                        className="rounded-2xl shadow-sm w-full object-cover"
                      />
                    )}
                    <a
                      href={project.link}
                      className="text-sm text-blue-600 hover:underline block"
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

      <button className="mt-8 px-4 py-2 border rounded-full text-sm hover:bg-gray-200 transition">
        Full archive →
      </button>
    </section>
  );
}

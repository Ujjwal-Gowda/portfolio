"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Audio Player App",
    description:
      "A modern music player with playlists, themes, and REST API integration.",
    image: "/projects/audio-player.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Email Classifier",
    description:
      "AI-powered email classifier that separates spam and important mail using NLP.",
    image: "/projects/email-classifier.png",
    tech: ["Next.js", "Python", "TensorFlow"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal website showcasing my work, skills, and contact info with a clean aesthetic.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-charcoal text-ash px-8 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bronze">
            My Projects
          </h2>
          <p className="text-ash/70 mt-4 text-lg">
            A few selected works that showcase my development and design
            approach.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-oxblood/20 border border-bronze/20 rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-bronze/50 transition-transform duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-bronze">
                  {project.title}
                </h3>
                <p className="text-sm text-ash/80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-charcoal border border-bronze/40 text-bronze text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

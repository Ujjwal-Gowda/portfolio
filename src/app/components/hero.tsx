"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="bg-charcoal text-ash min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-8 md:px-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 mt-10 md:mt-0"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-bronze leading-tight">
          Hi, I’m <br />
          <span className="text-rosewood">Ujjwal Gowda</span>
        </h1>

        <p className="text-lg max-w-xl text-ash/80">
          Full Stack Developer passionate about crafting efficient, elegant, and
          visually refined digital experiences. Building apps that look sharp
          and perform flawlessly.
        </p>

        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-bronze text-charcoal px-6 py-3 rounded-full font-medium hover:bg-oxblood hover:text-ash transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-bronze px-6 py-3 rounded-full font-medium hover:bg-rosewood hover:border-rosewood hover:text-charcoal transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-bronze flex items-center justify-center bg-oxblood/20">
          <span className="text-bronze text-xl font-semibold">
            {/* Replace this with your photo */}
            UJ
          </span>
        </div>
      </motion.div>
    </section>
  );
}

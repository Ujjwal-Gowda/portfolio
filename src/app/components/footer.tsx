"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-charcoal text-ash  px-8 md:px-20 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-bronze mb-6">
          Let’s Build Something Together
        </h2>
        <p className="text-ash/70 text-lg mb-10">
          I’m currently open to freelance projects, collaborations, or full-time
          opportunities.
          <br />
          If you think I’d be a good fit for your team or project — let’s
          connect.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <a
            href="mailto:ujjwalgangadhar@example.com"
            className="flex items-center gap-2 border border-bronze/40 text-bronze px-6 py-3 rounded-full hover:bg-bronze hover:text-charcoal transition"
          >
            <Mail size={18} /> Email Me
          </a>

          <a
            href="https://github.com/Ujjwal-Gowda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-bronze/40 text-bronze px-6 py-3 rounded-full hover:bg-bronze hover:text-charcoal transition"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/ujjwal-gangadhar-653399361"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-bronze/40 text-bronze px-6 py-3 rounded-full hover:bg-bronze hover:text-charcoal transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        {/* Subtle Signoff */}
        <p className="text-sm text-ash/60 mt-16">
          © {new Date().getFullYear()} Ujjwal Gowda G
        </p>
      </motion.div>
    </section>
  );
}

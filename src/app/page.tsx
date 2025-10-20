"use client";
import Hero from "./components/hero";
import { motion } from "framer-motion";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Slides from "./components/slides";
export default function Portfolio() {
  return (
    <div>
      <motion.aside
        className="fixed top-1/2 left-4 -translate-y-1/2 group"
        initial={{ width: "3.5rem" }}
        whileHover={{ width: "16rem" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="relative group-hover:w-64 shadow-lg rounded-2xl transition-all duration-500">
          <Sidebar />
        </div>
      </motion.aside>

      <Hero />
      <Projects />
      <Slides />
      <Skills />
      <Footer />
    </div>
  );
}

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Menu,
//   X,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Code,
//   Briefcase,
//   User,
//   MessageSquare,
// } from "lucide-react";

// export default function Portfolio() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   // Create refs for each section
//   const homeRef = useRef(null);
//   const projectsRef = useRef(null);
//   const skillsRef = useRef(null);
//   const contactRef = useRef(null);

//   const sections = {
//     home: homeRef,
//     projects: projectsRef,
//     skills: skillsRef,
//     contact: contactRef,
//   };

//   // Smooth scroll to section
//   const scrollToSection = (sectionId) => {
//     const ref = sections[sectionId];
//     if (ref && ref.current) {
//       ref.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setActiveSection(sectionId);
//       setMobileMenuOpen(false);
//     }
//   };

//   // Observer to detect which section is in view
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "-50% 0px -50% 0px",
//       threshold: 0,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions,
//     );

//     Object.values(sections).forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => observer.disconnect();
//   }, []);

//   const projects = [
//     {
//       title: "Project Alpha",
//       description:
//         "A full-stack web application built with React and Node.js, featuring real-time data synchronization.",
//       tech: ["React", "Node.js", "MongoDB", "Socket.io"],
//       link: "#",
//     },
//     {
//       title: "Project Beta",
//       description:
//         "An e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
//       tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
//       link: "#",
//     },
//     {
//       title: "Project Gamma",
//       description:
//         "A mobile-first progressive web app for task management with offline capabilities.",
//       tech: ["React", "PWA", "Firebase", "Material-UI"],
//       link: "#",
//     },
//   ];

//   const skills = [
//     {
//       category: "Frontend",
//       items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
//     },
//     {
//       category: "Backend",
//       items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
//     },
//     { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
//   ];

//   const navItems = [
//     { id: "home", label: "Home", icon: User },
//     { id: "projects", label: "Projects", icon: Code },
//     { id: "skills", label: "Skills", icon: Briefcase },
//     { id: "contact", label: "Contact", icon: MessageSquare },
//   ];

//   return (

//   )
"use client";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
export default function portfolio() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

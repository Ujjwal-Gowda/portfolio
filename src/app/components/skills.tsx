"use client";
import { useState, useEffect } from "react";
const skills = [
  {
    name: "JavaScript",
    icon: "🟨",
    desc: "ES6+, DOM manipulation, Async/Await patterns, closures",
  },
  { name: "React", icon: "⚛️", desc: "Hooks, Context API, Components" },
  {
    name: "Next.js",
    icon: "▲",
    desc: "App Router, SSR, API Routes, Server Components",
  },
  { name: "Tailwind CSS", icon: "💨", desc: "Utility-first styling" },
  { name: "TypeScript", icon: "🔷", desc: "Types, Interfaces, Generics" },
  {
    name: "Node.js",
    icon: "🟩",
    desc: "Express, REST APIs, middleware, authentication",
  },
  { name: "MongoDB", icon: "🍃", desc: "Mongoose, NoSQL schema design" },
  { name: "Git & GitHub", icon: "🐙", desc: "Version control, collaboration" },
  {
    name: "Unity",
    icon: "🎮",
    desc: "C#, 3D game development, physics, Game logic and scripting",
  },
  { name: "C#", icon: "💻", desc: "OOP, LINQ, Scripting for Unity" },
];

export default function SkillsMasonry() {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute skills into columns
  const columnsArray = Array.from({ length: columns }, () => []);
  skills.forEach((skill, index) => {
    columnsArray[index % columns].push(skill);
  });

  return (
    <section className="min-h-screen py-16 px-6 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of technologies and tools I work with to bring ideas to
          life
        </p>

        {/* Masonry Grid */}
        <div className="flex gap-4">
          {columnsArray.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4">
              {column.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80
                           border border-gray-700/50 p-6 rounded-2xl shadow-lg
                           hover:border-blue-500/50 hover:shadow-blue-500/20
                           transition-all duration-300 hover:-translate-y-1
                           backdrop-blur-sm"
                >
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

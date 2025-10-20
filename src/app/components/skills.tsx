"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", image: "/icons/javascript.svg" },
      { name: "TypeScript", image: "/icons/typescript.svg" },
      { name: "Java", image: "/icons/cplusplus.svg" },
      { name: "Python", image: "/icons/python.svg" },
      { name: "HTML5", image: "/icons/html5.svg" },
      { name: "CSS3", image: "/icons/css3.svg" },
    ],
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { name: "React", image: "/icons/react.svg" },
      { name: "Next.js", image: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", image: "/icons/tailwindcss.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
      { name: "Express", image: "/icons/express.png" },
      { name: "REST API", image: "/icons/rest.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "PostgreSQL", image: "/icons/postgresql.svg" },
    ],
  },
  {
    title: "Tools / Platforms",
    skills: [
      { name: "Git", image: "/icons/git.svg" },
      { name: "Linux", image: "/icons/linux.svg" },
    ],
  },
];

export default function SkillsMasonry() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen py-20 px-6 bg-[#0d0b10] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-">
          My Skills
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          The tools and technologies I use to design, build, and deploy
          full-stack applications.
        </p>

        {/* Masonry Layout */}
        <div
          className="masonry"
          style={{ columnCount: columns, columnGap: "1.5rem" }}
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="break-inside-avoid mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80
                    border border-gray-700/50 p-6 rounded-2xl mb-4
                    hover:border-blue-500/50 hover:shadow-blue-500/20
                    transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        fill
                        sizes="64px"
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

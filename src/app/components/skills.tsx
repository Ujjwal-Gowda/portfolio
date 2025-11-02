"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", image: "/icons/javascript.svg" },
      { name: "TypeScript", image: "/icons/typescript.svg" },
      { name: "C++", image: "/icons/cplusplus.svg" },
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
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "PostgreSQL", image: "/icons/postgresql.svg" },
      { name: "Git", image: "/icons/git.svg" },
      { name: "Linux", image: "/icons/linux.svg" },
    ],
  },
];

const pastelPalette = ["#C7CEEA", "#FFD6A5", "#D0F4DE", "#FFADAD", "#A0E7E5"];

export default function SkillsSection() {
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
    <section className="py-16 px-4 sm:px-8 bg-[#f3f1f0] text-black dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block border-4 px-6 py-2 mb-4 transform -rotate-1"
            style={{
              backgroundColor: "#A0E7E5",
              borderColor: "#000",
              boxShadow: "6px 6px 0 #000",
            }}
          >
            <p className="font-black text-xs sm:text-sm tracking-widest text-black">
              ⚡ TECH STACK ⚡
            </p>
          </div>
          <h2
            className="text-5xl sm:text-7xl font-black uppercase"
            style={{
              color: "#FFADAD",
              textShadow: "3px 3px 0 #00000055",
            }}
          >
            My Skills
          </h2>
        </div>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="rounded-xl border-4 border-black p-6 sm:p-8 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: pastelPalette[i % pastelPalette.length],
                boxShadow: "8px 8px 0 #000",
              }}
            >
              <h3 className="text-2xl sm:text-3xl text-black font-black mb-6 uppercase border-b-4 border-black pb-3">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center sm:justify-start gap-3 bg-white  border-2 border-black px-3 py-3 rounded-md hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                    style={{
                      boxShadow: "4px 4px 0 #000",
                    }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={48}
                        height={48}
                        loading="eager"
                        priority
                        className="object-contain"
                      />
                    </div>

                    <span className="text-sm sm:text-base text-black font-bold uppercase truncate block sm:hidden">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

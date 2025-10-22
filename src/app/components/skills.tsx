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
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            My Skills
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            The tools and technologies I use to design, build, and deploy
            full-stack applications.
          </p>
        </div>
        {/* Masonry Layout */}
        <div
          className="grid gap-4 sm:gap-6"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2 sm:py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-50 rounded-lg">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={28}
                      height={28}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

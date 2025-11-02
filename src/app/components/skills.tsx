// import Image from "next/image";
// import { useState, useEffect } from "react";
//
// const skillCategories = [
//   {
//     title: "Programming Languages",
//     skills: [
//       { name: "JavaScript", image: "/icons/javascript.svg" },
//       { name: "TypeScript", image: "/icons/typescript.svg" },
//       { name: "C++", image: "/icons/cplusplus.svg" },
//       { name: "Python", image: "/icons/python.svg" },
//       { name: "HTML5", image: "/icons/html5.svg" },
//       { name: "CSS3", image: "/icons/css3.svg" },
//     ],
//   },
//   {
//     title: "Libraries / Frameworks",
//     skills: [
//       { name: "React", image: "/icons/react.svg" },
//       { name: "Next.js", image: "/icons/nextjs.svg" },
//       { name: "Tailwind CSS", image: "/icons/tailwindcss.svg" },
//       { name: "Node.js", image: "/icons/nodejs.svg" },
//       { name: "Express", image: "/icons/express.png" },
//       { name: "REST API", image: "/icons/rest.png" },
//     ],
//   },
//   {
//     title: "Databases & Tools",
//     skills: [
//       { name: "MongoDB", image: "/icons/mongodb.svg" },
//       { name: "PostgreSQL", image: "/icons/postgresql.svg" },
//       { name: "Git", image: "/icons/git.svg" },
//       { name: "Linux", image: "/icons/linux.svg" },
//     ],
//   },
// ];
//
// export default function SkillsMasonry() {
//   const [columns, setColumns] = useState(3);
//
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setColumns(1);
//       else if (window.innerWidth < 1024) setColumns(2);
//       else setColumns(3);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//
//   return (
//     <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#111] from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8 sm:mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
//             My Skills
//           </h2>
//           <p className="text-base sm:text-lg text-white max-w-2xl mx-auto px-4">
//             The tools and technologies I use to design, build, and deploy
//             full-stack applications.
//           </p>
//         </div>
//         {/* Masonry Layout */}
//         <div
//           className="grid gap-4 sm:gap-6"
//           style={{
//             gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
//           }}
//         >
//           {skillCategories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-gray-300 rounded-xl shadow-md p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
//                 {category.title}
//               </h3>
//               {category.skills.map((skill, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-3 py-2 sm:py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-50 rounded-lg">
//                     <Image
//                       src={skill.image}
//                       alt={skill.name}
//                       width={28}
//                       height={28}
//                       className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
//                     />
//                   </div>
//                   <span className="text-sm sm:text-base font-medium text-gray-700">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", emoji: "🟨" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "C++", emoji: "⚙️" },
      { name: "Python", emoji: "🐍" },
      { name: "HTML5", emoji: "🌐" },
      { name: "CSS3", emoji: "🎨" },
    ],
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { name: "React", emoji: "⚛️" },
      { name: "Next.js", emoji: "▲" },
      { name: "Tailwind CSS", emoji: "💨" },
      { name: "Node.js", emoji: "🟢" },
      { name: "Express", emoji: "🚂" },
      { name: "REST API", emoji: "🔌" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", emoji: "🍃" },
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "Git", emoji: "📦" },
      { name: "Linux", emoji: "🐧" },
    ],
  },
];

const colors = ["#FDE047", "#A78BFA", "#FB923C", "#34D399"];

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
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-4xl sm:text-6xl font-black text-black mb-4 sm:mb-6 uppercase tracking-tight"
            style={{ textShadow: "4px 4px 0px #000" }}
          >
            My Skills
          </h2>
          <p className="text-lg sm:text-xl text-black font-bold max-w-2xl mx-auto px-4 border-4 border-black bg-yellow-300 p-4 transform rotate-1">
            The tools and technologies I use to design, build, and deploy
            full-stack applications.
          </p>
        </div>

        {/* Masonry Layout */}
        <div
          className="grid gap-6 sm:gap-8"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-none border-4 border-black p-5 sm:p-7 transform transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              style={{
                backgroundColor: colors[index % colors.length],
                boxShadow: "8px 8px 0px 0px #000",
              }}
            >
              <h3 className="text-xl sm:text-2xl font-black text-black mb-4 sm:mb-5 pb-3 border-b-4 border-black uppercase">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-3 px-3 bg-white border-3 border-black transform transition-transform hover:-translate-y-1"
                    style={{
                      boxShadow: "4px 4px 0px 0px #000",
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-yellow-300 border-3 border-black font-bold text-2xl">
                      {skill.emoji}
                    </div>
                    <span className="text-base sm:text-lg font-bold text-black uppercase">
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

"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cpu, Globe, Server } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Globe size={22} className="text-bronze" />,
    skills: ["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server size={22} className="text-bronze" />,
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "WebSockets"],
  },
  {
    title: "Database & Cloud",
    icon: <Database size={22} className="text-bronze" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Render / Vercel",
    ],
  },
  {
    title: "Other Tools",
    icon: <Cpu size={22} className="text-bronze" />,
    skills: ["Git / GitHub", "Docker", "VSCode", "Linux", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="bg-charcoal text-ash min-h-screen px-8 md:px-20 py-20 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bronze">
            Skills & Technologies
          </h2>
          <p className="text-ash/70 mt-4 text-lg">
            The tools and technologies I use to design, develop, and deploy
            modern web apps.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-oxblood/20 border border-bronze/20 rounded-2xl p-6 hover:border-bronze/40 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                {group.icon}
                <h3 className="text-xl font-semibold text-bronze">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-ash/80">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-charcoal border border-bronze/30 rounded-lg px-3 py-1 text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

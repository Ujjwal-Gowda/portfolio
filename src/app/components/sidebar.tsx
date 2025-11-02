"use client";
import React, { useState } from "react";
import { Home, FolderKanban, Zap, Mail } from "lucide-react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  const menuItems = [
    {
      id: "hero",
      label: "Home",
      color: "#FDE047",
      icon: Home,
    },
    {
      id: "projects",
      label: "Projects",
      color: "#A78BFA",
      icon: FolderKanban,
    },
    {
      id: "skills",
      label: "Skills",
      color: "#34D399",
      icon: Zap,
    },
    {
      id: "contact",
      label: "Contact",
      color: "#FB923C",
      icon: Mail,
    },
  ];

  return (
    <>
      <ul
        className="
          hidden md:flex
          fixed left-3 top-1/2 -translate-y-1/2 z-50
          flex-col gap-3
          transition-all duration-300 ease-in-out
        "
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <li
              key={item.id}
              className="group w-16 overflow-hidden border-4 border-black bg-white transition-all duration-300 hover:w-64"
              style={{
                boxShadow: `6px 6px 0px 0px ${item.color}`,
              }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="flex w-full items-center gap-3 p-2 text-left transition-all active:scale-95"
              >
                {/* Icon Box */}
                <div
                  className="flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-md border-2 border-black bg-white transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: isActive ? item.color : "#fff",
                    boxShadow: `3px 3px 0px 0px ${item.color}`,
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={2.5}
                    color={isActive ? "black" : item.color}
                  />
                </div>

                {/* Label */}
                <div className="font-black text-black uppercase text-base whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            </li>
          );
        })}

        {/* Decorative Bottom Bar */}
        <li className="w-16 h-2 bg-black border-4 border-black mt-2"></li>
      </ul>
    </>
  );
};

export default Sidebar;

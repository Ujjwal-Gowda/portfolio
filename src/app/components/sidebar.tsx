"use client";
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show sidebar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);

        // Clear existing timeout
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }

        // Set new timeout to hide after 3 seconds of inactivity
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 3000);

        setHideTimeout(timeout);
      } else {
        // Hide immediately when scrolling down
        setIsVisible(false);
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
      }

      setLastScrollY(currentScrollY);
    };

    // Only add scroll listener on mobile
    if (window.innerWidth < 768) {
      window.addEventListener("scroll", handleScroll);

      // Set initial timeout
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      setHideTimeout(timeout);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
      };
    }
  }, [lastScrollY, hideTimeout]);

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) {
      setIsVisible(true);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      setHideTimeout(timeout);
    }
  };

  return (
    <ul
      className={`
        fixed left-2 top-1/2 -translate-y-1/2 z-50
        flex flex-col gap-1 pl-1
        transition-all duration-300 ease-in-out
        md:w-64 md:translate-x-0 md:opacity-100
        ${isVisible ? "w-14 translate-x-0 opacity-100" : "w-14 -translate-x-16 opacity-0"}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
    >
      {/* Home */}
      <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg md:w-14">
        <button
          onClick={() => scrollToSection("hero")}
          className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-indigo-800 transition-all active:scale-95"
        >
          <div className="rounded-lg border-2 border-indigo-300 bg-indigo-100 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="font-semibold whitespace-nowrap">Home</div>
        </button>
      </li>

      {/* Projects */}
      <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg md:w-14">
        <button
          onClick={() => scrollToSection("projects")}
          className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-purple-800 transition-all active:scale-95"
        >
          <div className="rounded-lg border-2 border-purple-300 bg-purple-100 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          </div>
          <div className="font-semibold whitespace-nowrap">Projects</div>
        </button>
      </li>

      {/* Skills */}
      <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg md:w-14">
        <button
          onClick={() => scrollToSection("skills")}
          className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-emerald-800 transition-all active:scale-95"
        >
          <div className="rounded-lg border-2 border-emerald-300 bg-emerald-100 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
          </div>
          <div className="font-semibold whitespace-nowrap">Skills</div>
        </button>
      </li>

      {/* Contact */}
      <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg md:w-14">
        <button
          onClick={() => scrollToSection("contact")}
          className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-amber-800 transition-all active:scale-95"
        >
          <div className="rounded-lg border-2 border-amber-300 bg-amber-100 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="font-semibold whitespace-nowrap">Contact</div>
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;

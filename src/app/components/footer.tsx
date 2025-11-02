import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#f3f1f0] px-6 sm:px-12 md:px-20 py-16 sm:py-24 text-center relative overflow-hidden">
      {/* Soft Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-12 right-12 w-32 h-32 bg-[#d6b3ff] rounded-xl blur-2xl"></div>
        <div className="absolute bottom-16 left-16 w-40 h-40 bg-[#ffe6a7] rounded-xl blur-2xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-6"
          style={{ textShadow: "2px 2px 0 #e4c1f9" }}
        >
          Let’s Build Something Together
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg leading-relaxed">
          I’m open to freelance projects, collaborations, and full-time roles.
          If you’d like to create something amazing together, reach out!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a
            href="mailto:ujjwalgangadhar@example.com"
            className="group transition-all w-full sm:w-auto"
          >
            <div
              className="flex items-center justify-center gap-3 bg-[#fffaf0] border-2 border-black px-8 py-4 font-semibold text-sm sm:text-base rounded-xl hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              style={{ boxShadow: "4px 4px 0 #fcd34d" }}
            >
              <Mail size={20} strokeWidth={2.5} />
              <span>Email Me</span>
            </div>
          </a>

          <a
            href="https://github.com/Ujjwal-Gowda"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all w-full sm:w-auto"
          >
            <div
              className="flex items-center justify-center gap-3 bg-[#f0f4ff] border-2 border-black px-8 py-4 font-semibold text-sm sm:text-base rounded-xl hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              style={{ boxShadow: "4px 4px 0 #a5b4fc" }}
            >
              <Github size={20} strokeWidth={2.5} />
              <span>GitHub</span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/ujjwal-gangadhar-653399361"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all w-full sm:w-auto"
          >
            <div
              className="flex items-center justify-center gap-3 bg-[#ecfdf5] border-2 border-black px-8 py-4 font-semibold text-sm sm:text-base rounded-xl hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              style={{ boxShadow: "4px 4px 0 #6ee7b7" }}
            >
              <Linkedin size={20} strokeWidth={2.5} />
              <span>LinkedIn</span>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 space-y-3">
          <p className="text-gray-700 font-medium">Made by Ujjwal Gowda G</p>
          <p className="text-sm text-gray-500 font-medium">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}

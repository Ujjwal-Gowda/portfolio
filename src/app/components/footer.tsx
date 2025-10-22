import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#1a1a1a] text-gray-100 px-4 sm:px-8 md:px-20 py-16 sm:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4a574] mb-4 sm:mb-6 leading-tight">
          Let's Build Something Together
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
          I'm currently open to freelance projects, collaborations, or full-time
          opportunities. If you think I'd be a good fit for your team or project
          — let's connect.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
          <a
            href="mailto:ujjwalgangadhar@example.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#d4a574]/30 text-[#d4a574] px-6 py-3 rounded-lg hover:bg-[#d4a574]/10 hover:border-[#d4a574]/50 transition-all duration-300 backdrop-blur-sm"
          >
            <Mail size={18} />
            <span>Email Me</span>
          </a>
          <a
            href="https://github.com/Ujjwal-Gowda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#d4a574]/30 text-[#d4a574] px-6 py-3 rounded-lg hover:bg-[#d4a574]/10 hover:border-[#d4a574]/50 transition-all duration-300 backdrop-blur-sm"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ujjwal-gangadhar-653399361"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#d4a574]/30 text-[#d4a574] px-6 py-3 rounded-lg hover:bg-[#d4a574]/10 hover:border-[#d4a574]/50 transition-all duration-300 backdrop-blur-sm"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent mx-auto mb-8 sm:mb-12"></div>

        {/* Subtle Signoff */}
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Ujjwal Gowda G.
        </p>
      </motion.div>
    </section>
  );
}

import React from "react";
import { Link } from "@heroui/react";
// Lucide-react থেকে শুধু Sparkles রাখা হয়েছে, বাকিগুলো react-icons দিয়ে রিপ্লেস করা হয়েছে
import { Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6 text-slate-400">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand & Description */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
              EduGuide AI
            </span>
          </div>
          <p className="text-sm max-w-sm mb-6 text-slate-400">
            Empowering your learning journey with personalized AI-driven roadmaps.
            Master the tech of tomorrow, today.
          </p>
          <div className="flex gap-5">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-slate-500 hover:text-white hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-slate-500 hover:text-white hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:hello@eduguide.ai"
              className="text-slate-500 hover:text-white hover:scale-110 transition-all"
              aria-label="Email"
            >
              <FaRegEnvelope className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-slate-200 font-semibold mb-4 tracking-wide">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/explore" className="text-slate-400 hover:text-teal-400 transition-colors">
                Explore Paths
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-slate-400 hover:text-teal-400 transition-colors">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-slate-200 font-semibold mb-4 tracking-wide">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-slate-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-slate-400 hover:text-teal-400 transition-colors">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-slate-800/50 text-sm flex flex-col md:flex-row justify-between items-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} EduGuide AI. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Built with <span className="text-slate-300 font-medium">Next.js</span> & <span className="text-slate-300 font-medium">HeroUI</span>
        </p>
      </div>
    </footer>
  );
}
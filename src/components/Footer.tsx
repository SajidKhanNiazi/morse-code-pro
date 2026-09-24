import React from "react";
import Link from "next/link";
import { Radio, ArrowUpRight, Heart, Shield, HelpCircle, BookOpen, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-14 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-md">
                <Radio className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Morse Code Academy
              </span>
            </Link>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              An interactive learning resource for understanding, translating, and practicing Morse code.
            </p>
            
            <p className="text-xs text-slate-400 font-mono tracking-wide">
              TAGLINE: &ldquo;Learn Morse Code. Decode Signals. Master the Language of Dots and Dashes.&rdquo;
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                ITU Standard Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-sky-950/80 text-sky-400 border border-sky-800/60">
                Web Audio Enabled
              </span>
            </div>
          </div>

          {/* Quick Learning Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Learning & Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/learn-morse-code"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Learn Morse Code</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/morse-code-alphabet"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Morse Code Alphabet</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/morse-code-history"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Morse Code History</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Interactive Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/translator"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Translator (Text &harr; Morse)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/practice"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Practice Game</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/morse-code-quiz"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Morse Code Quiz</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>About This Academy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider & credits */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} Morse Code Academy. Built for students, amateur radio operators, and signaling enthusiasts worldwide.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">
              Help & FAQ
            </Link>
            <Link href="/translator" className="hover:text-slate-300 transition-colors">
              Translator
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

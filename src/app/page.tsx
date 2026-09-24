import React from "react";
import Link from "next/link";
import {
  Radio,
  ArrowRight,
  BookOpen,
  Volume2,
  Brain,
  Award,
  History,
  HelpCircle,
  Sparkles,
  Zap,
  CheckCircle2,
  Compass,
  Headphones,
  ExternalLink,
} from "lucide-react";
import SignalDemo from "@/components/SignalDemo";
import MorseTranslator from "@/components/MorseTranslator";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden morse-grid-bg">
        {/* Glow ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 text-xs sm:text-sm font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Learn Morse Code. Decode Signals. Master the Language of Dots and Dashes.</span>
          </div>

          {/* Hero H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Learn Morse Code, Decode Signals &amp; Practice Online
          </h1>

          {/* Hero Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Explore Morse code with an interactive translator, alphabet reference, practical lessons, quizzes, and hands-on exercises designed for beginners and curious learners.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <Link
              href="/translator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-slate-950 font-bold text-base shadow-xl shadow-sky-500/20 hover:shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>Try the Translator</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/learn-morse-code"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <BookOpen className="w-5 h-5 text-sky-400" />
              <span>Start Learning</span>
            </Link>
          </div>

          {/* Visual Morse Code Demonstration (Below Hero) */}
          <SignalDemo />
        </div>
      </section>

      {/* CORE CURRICULUM & TOOL PILLARS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/60 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
              Comprehensive Learning Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything You Need to Master Morse Code
            </h2>
            <p className="text-slate-400 text-base mt-3 leading-relaxed">
              From foundational letter memorization to high-speed audio decoding, Morse Code Academy provides structured, accessible tools built for modern web browsers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Translator */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Bidirectional Translator
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Instantly translate plain text into International Morse Code and decode incoming dot-and-dash sequences back to readable text with real-time audio playback.
                </p>
              </div>
              <Link
                href="/translator"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 group-hover:text-sky-300 transition-colors"
              >
                <span>Launch Translator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Alphabet */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Searchable Alphabet Reference
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Explore complete tables for letters A–Z, numerals 0–9, and punctuation marks. Listen to each character&apos;s rhythmic cadence and study effective mnemonics.
                </p>
              </div>
              <Link
                href="/morse-code-alphabet"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors"
              >
                <span>Browse Alphabet Table</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Lessons */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Structured Learning Guide
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Learn how Morse timing works, study audio-first methods like Farnsworth and Koch, and avoid common beginner traps with our comprehensive 2,000-word tutorial.
                </p>
              </div>
              <Link
                href="/learn-morse-code"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-colors"
              >
                <span>Read Practical Lessons</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 4: Practice Game */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Interactive Practice Game
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Sharpen your reflex speed with multiple-choice exercises covering letters, numbers, and decoding challenges. Track accuracy streaks and advance through difficulty tiers.
                </p>
              </div>
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
              >
                <span>Play Practice Game</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 5: Knowledge Quiz */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Proficiency Quiz
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Test your theoretical and practical Morse code comprehension with 12 calibrated questions covering terminology, history, international standards, and signal patterns.
                </p>
              </div>
              <Link
                href="/morse-code-quiz"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 group-hover:text-teal-300 transition-colors"
              >
                <span>Take the Quiz</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 6: History */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Telegraph History &amp; Legacy
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Discover how Samuel Morse, Alfred Vail, and wireless pioneers revolutionized global communications, and learn why Morse code remains actively utilized in amateur radio.
                </p>
              </div>
              <Link
                href="/morse-code-history"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
              >
                <span>Explore Telegraph History</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TRANSLATOR WORKSPACE ON HOMEPAGE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Instant Online Converter
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Try the Live Morse Code Translator
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              Type any sentence to see real-time dots and dashes, listen to the acoustic sidetone, or convert Morse back to text.
            </p>
          </div>

          <MorseTranslator />
        </div>
      </section>

      {/* EDUCATIONAL FOUNDATIONS: HOW MORSE TIMING WORKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                Acoustic &amp; Temporal Rules
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-6">
                Understanding the Golden Ratios of Morse Code
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Morse code is fundamentally a temporal language—it is defined not simply by symbols on paper, but by exact mathematical proportions of sound and silence established by the International Telecommunication Union (ITU).
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Every speed measurement in Morse code is calculated in Words Per Minute (WPM) using the standard reference word <strong className="text-white">&ldquo;PARIS&rdquo;</strong>, which occupies precisely 50 time units:
              </p>

              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">1 Dit = 1 Unit:</span> The elementary quantum of Morse code. At 20 WPM, one dit lasts exactly 60 milliseconds.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">1 Dah = 3 Units:</span> Equal in duration to three consecutive dits.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Element Space = 1 Unit:</span> The silence between dots and dashes inside a single letter.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Letter Space = 3 Units:</span> The silence between distinct letters within a word.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Word Space = 7 Units:</span> The silence between consecutive words, denoted visually as &ldquo; / &rdquo;.
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/learn-morse-code"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300"
                >
                  <span>Explore the complete beginner learning curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Headphones className="w-4 h-4 text-emerald-400" />
                  <span>Audio-First Learning Strategy</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  Recommended Method
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Why Experienced Operators Avoid Visual Memorization
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                When beginners count dots and dashes visually, their brain creates a translation bottleneck: hearing sound → visualizing dots and dashes → counting them → finding the letter.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Modern instruction utilizes the <strong className="text-white">Koch Method</strong> and <strong className="text-white">Farnsworth Spacing</strong>. You listen to individual characters transmitted at a brisk 18 to 20 WPM from day one, training your auditory cortex to perceive complete acoustic patterns (like recognizing a musical chord) instead of counting pieces.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Ready to test your recognition?</div>
                  <div className="text-sm font-bold text-white">Launch the interactive practice trainer</div>
                </div>
                <Link
                  href="/practice"
                  className="px-4 py-2 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 text-xs font-bold transition-colors"
                >
                  Start Practice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USEFUL MORSE CODE RESOURCES SECTION (SPEC REQUIREMENT) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2.5 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <Compass className="w-4 h-4 text-sky-400" />
              <span>Independent Reference Directory</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Useful Morse Code Resources
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Mastering radiotelegraphy benefits from engaging with diverse practice environments, audio generators, and reference charts. After learning the basic alphabet, you can use a dedicated{" "}
              <a
                href="https://morsecodetranslatr.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline font-semibold transition-colors"
              >
                morse code translator
              </a>{" "}
              to quickly convert text into Morse code or decode Morse messages. Combining reference lookups with practical audio drills will accelerate your comprehension speed and signal fluency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ITU Recommendation M.1677</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>ARRL Morse Practice Audio Files</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Web Audio Continuous Wave Sidetone</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

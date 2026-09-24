import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Radio,
  BookOpen,
  Award,
  Zap,
  Shield,
  Heart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Morse Code Academy | Mission, Standards & Curriculum",
  description:
    "Learn about Morse Code Academy: an independent educational platform dedicated to teaching International Morse Code through interactive web tools, audio synthesis, and structured lessons.",
  alternates: {
    canonical: "https://morsecodeacademy.com/about",
  },
  openGraph: {
    title: "About Morse Code Academy | Mission & Educational Standards",
    description:
      "Our mission is to make radiotelegraphy accessible to curious learners, ham radio operators, and students worldwide.",
    url: "https://morsecodeacademy.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "About Morse Code Academy", href: "/about" }]} />

      {/* Header */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60 text-sky-400 font-mono text-xs uppercase tracking-widest mb-4">
          <Radio className="w-3.5 h-3.5" />
          <span>Independent Educational Platform</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          About Morse Code Academy
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Dedicated to preserving, teaching, and practicing the timeless digital language of continuous wave radiotelegraphy through modern, accessible web technology.
        </p>
      </header>

      {/* Mission & Purpose */}
      <section className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
        <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            Our Mission
          </h2>
          <p>
            Morse Code Academy was created to provide a modern, completely free, and genuinely educational space for anyone curious about Morse code. Whether you are studying for your amateur radio license, interested in the physics of telecommunications, or learning how to send emergency signals, our goal is to eliminate outdated memorization hurdles.
          </p>
          <p>
            Rather than relying on confusing static charts or ad-saturated doorway pages, we provide interactive tools powered directly by your browser&apos;s Web Audio API, allowing you to hear realistic sidetones, practice at your own pace, and master the language of dits and dahs.
          </p>
        </div>

        {/* Core Principles */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Our Educational Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Audio-First Pedagogy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We advocate for the Koch method and Farnsworth timing. We teach you to recognize whole rhythmic sounds rather than counting printed dots with your eyes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Strict ITU Standards</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                All character mappings, prosigns, and timing ratios in our tools strictly follow International Telecommunication Union recommendation ITU-R M.1677-1.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Privacy &amp; Zero Friction</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No registration, no accounts, and no backend data collection. All translation algorithms and audio synthesis run 100% locally in your browser.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-purple-400 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Universal Accessibility</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Built to be lightweight, responsive from 320px screens to 4K displays, and fully operable with keyboard navigation and screen readers.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Quicklinks */}
        <div className="pt-6 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white mb-4">
            Explore the Academy Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/translator"
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-colors group"
            >
              <div className="font-bold text-white text-sm group-hover:text-sky-400 transition-colors">
                Live Translator
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Convert text to Morse code with audio
              </div>
            </Link>

            <Link
              href="/morse-code-alphabet"
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
            >
              <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                Alphabet Directory
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Letters, numbers, and prosign charts
              </div>
            </Link>

            <Link
              href="/practice"
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors group"
            >
              <div className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                Practice Game
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Test your decoding reflex speed
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

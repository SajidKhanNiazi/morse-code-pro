import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, GraduationCap, Zap, HelpCircle, Radio, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import MorseTranslator from "@/components/MorseTranslator";

export const metadata: Metadata = {
  title: "Interactive Morse Code Translator & Audio Decoder",
  description:
    "Convert plain text into International Morse Code and decode Morse signals into readable text with real-time audio playback, speed control, and spacing assistance.",
  alternates: {
    canonical: "https://morsecodeacademy.com/translator",
  },
  openGraph: {
    title: "Morse Code Translator & Audio Decoder | Morse Code Academy",
    description:
      "Interactive bidirectional Morse code translator with Web Audio sound playback, speed control, and real-time conversion.",
    url: "https://morsecodeacademy.com/translator",
  },
};

export default function TranslatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Morse Code Academy Translator",
    url: "https://morsecodeacademy.com/translator",
    applicationCategory: "EducationalApplication",
    description:
      "Bidirectional text and Morse code translator supporting international standard characters, audio sidetone simulation, and real-time validation.",
  };

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Morse Code Translator", href: "/translator" }]} />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60 text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>Bidirectional Acoustic Converter</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Interactive Morse Code Translator
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Encode standard Latin letters, numbers, and punctuation into International Morse Code, or decode incoming dits and dahs back to plain English with synchronized audio sidetones.
        </p>
      </div>

      {/* Main Interactive Translator Component */}
      <MorseTranslator />

      {/* Educational Guide & Internal Linking Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-800/80">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
          <BookOpen className="w-8 h-8 text-sky-400 mb-3" />
          <h2 className="text-lg font-bold text-white mb-2">Alphabet Chart</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            Need to look up specific letters or prosigns? Browse our searchable International Morse Code alphabet dictionary.
          </p>
          <Link
            href="/morse-code-alphabet"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
          >
            <span>View Morse Alphabet &rarr;</span>
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
          <GraduationCap className="w-8 h-8 text-emerald-400 mb-3" />
          <h2 className="text-lg font-bold text-white mb-2">Learning Guide</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            Discover the Farnsworth and Koch memorization techniques and learn how to recognize rhythmic sound patterns instinctively.
          </p>
          <Link
            href="/learn-morse-code"
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
          >
            <span>Read Beginner Guide &rarr;</span>
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
          <Zap className="w-8 h-8 text-amber-400 mb-3" />
          <h2 className="text-lg font-bold text-white mb-2">Practice Game</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            Put your decoding skills to the test with multiple-choice drills, score counters, and progressive difficulty tiers.
          </p>
          <Link
            href="/practice"
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
          >
            <span>Play Practice Game &rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

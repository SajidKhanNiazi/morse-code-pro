"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Volume2, Sparkles, Filter, ArrowRight, BookOpen, Radio } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SoundButton from "@/components/SoundButton";
import { MORSE_DIRECTORY, PROSIGNS, MorseCharacter } from "@/lib/morseData";

export default function MorseAlphabetPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Prosign list formatted for directory
  const prosignList: MorseCharacter[] = useMemo(() => {
    return Object.entries(PROSIGNS).map(([key, val]) => ({
      char: key,
      morse: val.morse,
      category: "prosign",
      name: val.meaning,
      mnemonic: `Procedural signal: ${val.meaning}`,
    }));
  }, []);

  const allItems = useMemo(() => {
    return [...MORSE_DIRECTORY, ...prosignList];
  }, [prosignList]);

  // Filtering
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const term = searchTerm.trim().toLowerCase();
      if (!term) return matchesCategory;

      const matchesSearch =
        item.char.toLowerCase().includes(term) ||
        item.morse.includes(term) ||
        (item.name && item.name.toLowerCase().includes(term)) ||
        (item.mnemonic && item.mnemonic.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [allItems, activeCategory, searchTerm]);

  const categories = [
    { id: "all", label: "All Characters" },
    { id: "letter", label: "Letters (A–Z)" },
    { id: "number", label: "Numbers (0–9)" },
    { id: "punctuation", label: "Punctuation" },
    { id: "prosign", label: "Prosigns & Codes" },
  ];

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: "Morse Code Alphabet", href: "/morse-code-alphabet" }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Complete Reference Dictionary</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          International Morse Code Alphabet
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Search and listen to standardized International Morse Code symbols for letters, numbers, punctuation, and procedural signals (prosigns).
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by letter (e.g. 'A', 'S'), Morse (e.g. '...'), or phonetic name..."
              className="w-full pl-12 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 font-mono text-sm"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Stats */}
          <div className="text-xs font-mono text-slate-400 shrink-0">
            Showing <span className="text-white font-bold">{filteredItems.length}</span> of {allItems.length} characters
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                  : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Characters */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          <p className="text-base font-medium text-slate-300">No matching characters found.</p>
          <p className="text-xs mt-1">Try searching for a single letter, a dash/dot pattern, or reset filters.</p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("all");
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-medium"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={`${item.char}-${idx}`}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-1 mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-sky-400 transition-colors">
                    {item.char}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                    {item.category}
                  </span>
                </div>

                {item.name && (
                  <div className="text-xs font-medium text-slate-300 mb-1 line-clamp-1">
                    {item.name}
                  </div>
                )}

                {/* Morse representation with custom dots and dashes */}
                <div className="py-2.5 px-2 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-center gap-1.5 my-2 min-h-[38px]">
                  {Array.from(item.morse).map((symbol, sIdx) => {
                    if (symbol === ".") {
                      return (
                        <span
                          key={sIdx}
                          className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"
                          title="Dit"
                        />
                      );
                    }
                    if (symbol === "-") {
                      return (
                        <span
                          key={sIdx}
                          className="w-5 h-2.5 rounded bg-sky-400 inline-block"
                          title="Dah"
                        />
                      );
                    }
                    return null;
                  })}
                </div>

                <div className="text-center font-mono text-xs tracking-widest text-slate-400 mb-2">
                  {item.morse}
                </div>

                {item.mnemonic && (
                  <p className="text-[11px] text-slate-400 italic line-clamp-2 leading-tight">
                    &ldquo;{item.mnemonic}&rdquo;
                  </p>
                )}
              </div>

              {/* Sound Playback Button */}
              <div className="mt-3 pt-3 border-t border-slate-800/60">
                <SoundButton
                  morse={item.morse}
                  label="Play Tone"
                  size="sm"
                  className="w-full text-xs"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Internal Navigation CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Ready to Translate and Decode Entire Phrases?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Take what you&apos;ve learned from the alphabet table and test your decoding speed in the translator or practice game.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/translator"
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
          >
            Open Translator
          </Link>
          <Link
            href="/practice"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            Practice Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}

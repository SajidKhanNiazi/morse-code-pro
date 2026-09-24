"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Play, Square, Sparkles } from "lucide-react";
import { morseAudio } from "@/lib/morseAudio";

export default function SignalDemo() {
  const [activeWord, setActiveWord] = useState("SOS");
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCharIndex, setActiveCharIndex] = useState<number | null>(null);

  const demoWords: Record<string, { morse: string; meaning: string }> = {
    SOS: { morse: "... --- ...", meaning: "Universal Distress Signal" },
    CQ: { morse: "-.-. --.-", meaning: "General Call to Any Station" },
    RADIO: { morse: ".-. .- -.. .. ---", meaning: "Wireless Transmission" },
    HELLO: { morse: ".... . .-.. .-.. ---", meaning: "Friendly Greeting" },
  };

  const handlePlay = async (wordKey: string) => {
    if (isPlaying) {
      morseAudio.stop();
      setIsPlaying(false);
      setActiveCharIndex(null);
      return;
    }

    const item = demoWords[wordKey];
    setIsPlaying(true);
    setActiveWord(wordKey);

    await morseAudio.playMorseSequence(
      item.morse,
      16,
      650,
      (index) => {
        setActiveCharIndex(index);
      },
      () => {
        setIsPlaying(false);
        setActiveCharIndex(null);
      }
    );
  };

  const currentItem = demoWords[activeWord];

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Subtle top indicator bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-emerald-400 to-amber-400" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Live Signal Visualizer
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            Visual Morse Signal Demonstration
          </h2>
        </div>

        {/* Word switcher tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800">
          {Object.keys(demoWords).map((word) => (
            <button
              key={word}
              type="button"
              onClick={() => {
                if (isPlaying) morseAudio.stop();
                setActiveWord(word);
                setActiveCharIndex(null);
                setIsPlaying(false);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeWord === word
                  ? "bg-sky-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Main Signal Display */}
      <div className="bg-slate-950/90 rounded-xl p-6 sm:p-8 border border-slate-800/80 flex flex-col items-center justify-center text-center relative group">
        <div className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-2">
          {currentItem.meaning}
        </div>
        
        <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-widest font-mono mb-4">
          {activeWord}
        </div>

        {/* Animated Morse Dots and Dashes */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-3 px-4 rounded-xl bg-slate-900/60 border border-slate-800 w-full min-h-[72px]">
          {Array.from(currentItem.morse).map((char, index) => {
            const isCharActive = activeCharIndex === index;
            if (char === ".") {
              return (
                <div
                  key={index}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-150 flex items-center justify-center ${
                    isCharActive
                      ? "bg-emerald-400 scale-125 shadow-lg shadow-emerald-400/80 ring-4 ring-emerald-400/30"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                  title="Dit (.)"
                />
              );
            }
            if (char === "-") {
              return (
                <div
                  key={index}
                  className={`w-10 sm:w-14 h-4 sm:h-5 rounded-md transition-all duration-150 flex items-center justify-center ${
                    isCharActive
                      ? "bg-sky-400 scale-110 shadow-lg shadow-sky-400/80 ring-4 ring-sky-400/30"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                  title="Dah (-)"
                />
              );
            }
            if (char === " ") {
              return (
                <div
                  key={index}
                  className="w-3 sm:w-4 h-5 flex items-center justify-center"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-800" />
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Morse raw representation */}
        <div className="mt-4 font-mono text-lg sm:text-xl tracking-widest text-sky-400">
          {currentItem.morse}
        </div>
      </div>

      {/* Control Action */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
          <span>Dot (dit) = 1 unit</span>
          <span className="text-slate-600">•</span>
          <span className="w-4 h-2 rounded-sm bg-sky-400 inline-block" />
          <span>Dash (dah) = 3 units</span>
        </div>

        <button
          type="button"
          onClick={() => handlePlay(activeWord)}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
            isPlaying
              ? "bg-rose-500 hover:bg-rose-400 text-white shadow-rose-500/20"
              : "bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 shadow-emerald-500/20 hover:scale-105"
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-4 h-4 fill-current" />
              <span>Stop Signal</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Play Signal Audio (650 Hz)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

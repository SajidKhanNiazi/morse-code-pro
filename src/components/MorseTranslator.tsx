"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  Copy,
  Check,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Sliders,
  AlertCircle,
  HelpCircle,
  Share2,
  BookOpen,
  GraduationCap,
  Play,
  Square,
} from "lucide-react";
import {
  encodeTextToMorse,
  decodeMorseToText,
  MORSE_ALPHABET,
  getDitDurationMs,
} from "@/lib/morseData";
import { morseAudio } from "@/lib/morseAudio";

type Direction = "text-to-morse" | "morse-to-text";

export default function MorseTranslator() {
  const [direction, setDirection] = useState<Direction>("text-to-morse");
  const [input, setInput] = useState("HELLO WORLD");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [isRealtime, setIsRealtime] = useState(true);
  const [unmappedChars, setUnmappedChars] = useState<string[]>([]);
  const [invalidTokens, setInvalidTokens] = useState<string[]>([]);

  // Audio settings
  const [wpm, setWpm] = useState(18);
  const [freq, setFreq] = useState(650);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Conversion logic
  const handleConvert = useCallback(() => {
    if (direction === "text-to-morse") {
      const res = encodeTextToMorse(input);
      setOutput(res.morse);
      setUnmappedChars(res.unmapped);
      setInvalidTokens([]);
    } else {
      const res = decodeMorseToText(input);
      setOutput(res.text);
      setInvalidTokens(res.invalidTokens);
      setUnmappedChars([]);
    }
  }, [direction, input]);

  // Real-time update effect
  useEffect(() => {
    if (isRealtime) {
      handleConvert();
    }
  }, [input, direction, isRealtime, handleConvert]);

  // Swap direction
  const handleSwap = () => {
    if (isPlayingAudio) morseAudio.stop();
    setIsPlayingAudio(false);

    const newDirection =
      direction === "text-to-morse" ? "morse-to-text" : "text-to-morse";
    setDirection(newDirection);
    // Swap input and output text cleanly
    setInput(output);
    setOutput(input);
  };

  // Copy output
  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  // Clear
  const handleClear = () => {
    if (isPlayingAudio) morseAudio.stop();
    setIsPlayingAudio(false);
    setInput("");
    setOutput("");
    setUnmappedChars([]);
    setInvalidTokens([]);
  };

  // Load Example
  const handleLoadExample = () => {
    if (isPlayingAudio) morseAudio.stop();
    setIsPlayingAudio(false);

    if (direction === "text-to-morse") {
      setInput("SOS CQ MORSE CODE ACADEMY 2026");
    } else {
      setInput("... --- ... / -.-. --.- / .- -.-. .- -.. . -- -.--");
    }
  };

  // Insert morse symbols easily when in Morse-to-text mode
  const handleAppendMorseSymbol = (sym: string) => {
    setInput((prev) => prev + sym);
  };

  // Audio Playback
  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      morseAudio.stop();
      setIsPlayingAudio(false);
      return;
    }

    const morseToPlay = direction === "text-to-morse" ? output : input;
    if (!morseToPlay || !morseToPlay.trim()) return;

    setIsPlayingAudio(true);
    await morseAudio.playMorseSequence(
      morseToPlay,
      wpm,
      freq,
      undefined,
      () => {
        setIsPlayingAudio(false);
      }
    );
  };

  // Counts
  const charCount = input.length;
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
  const outputCharCount = output.length;
  const outputWordCount = output.trim() ? output.trim().split(/\s+/).length : 0;

  const ditDurationMs = Math.round(getDitDurationMs(wpm));

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg">
        {/* Direction Switcher */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSwap}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-950/70 hover:bg-sky-900/80 border border-sky-800/60 text-sky-300 font-medium text-xs sm:text-sm transition-all"
            title="Swap translation direction"
          >
            <ArrowLeftRight className="w-4 h-4 text-sky-400" />
            <span>
              {direction === "text-to-morse"
                ? "Text → Morse Code"
                : "Morse Code → Text"}
            </span>
          </button>

          <button
            type="button"
            onClick={handleLoadExample}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
          >
            Load Example
          </button>
        </div>

        {/* Option toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 select-none">
            <input
              type="checkbox"
              checked={isRealtime}
              onChange={(e) => setIsRealtime(e.target.checked)}
              className="rounded bg-slate-800 border-slate-700 text-sky-500 focus:ring-sky-400 focus:ring-offset-slate-900 w-3.5 h-3.5"
            />
            <span>Real-time</span>
          </label>

          <button
            type="button"
            onClick={() => setShowSettings(!showSettings)}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
              showSettings
                ? "bg-slate-700 border-slate-600 text-white"
                : "bg-slate-800 border-slate-700/60 text-slate-400 hover:text-white"
            }`}
            title="Audio & Timing Settings"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sound Settings</span>
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-300 border border-slate-700/60 text-slate-400 text-xs font-medium transition-colors flex items-center gap-1"
            title="Clear all fields"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Audio Settings Panel (Collapsible) */}
      {showSettings && (
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-300 font-semibold uppercase tracking-wider font-mono">
            <span>Acoustic Tone & Transmission Settings</span>
            <span className="text-sky-400">Dit duration: {ditDurationMs} ms</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Speed (WPM):</span>
                <span className="font-mono text-white font-bold">{wpm} WPM</span>
              </div>
              <input
                type="range"
                min="6"
                max="35"
                step="1"
                value={wpm}
                onChange={(e) => setWpm(Number(e.target.value))}
                className="w-full accent-sky-400 bg-slate-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>6 WPM (Beginner)</span>
                <span>18 WPM (Standard)</span>
                <span>35 WPM (Pro)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Sidetone Frequency (Pitch):</span>
                <span className="font-mono text-white font-bold">{freq} Hz</span>
              </div>
              <input
                type="range"
                min="400"
                max="900"
                step="25"
                value={freq}
                onChange={(e) => setFreq(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>400 Hz (Low)</span>
                <span>650 Hz (Classic)</span>
                <span>900 Hz (High)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Dual Panels (Input & Output) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Panel */}
        <div className="flex flex-col bg-slate-900/90 rounded-2xl border border-slate-800/90 shadow-xl overflow-hidden focus-within:border-sky-500/60 transition-colors">
          <div className="px-5 py-3.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              {direction === "text-to-morse" ? "Plain Text Input" : "Morse Code Input"}
            </span>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span>{charCount} chars</span>
              <span>{wordCount} words</span>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <textarea
              id="translator-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                direction === "text-to-morse"
                  ? "Type your message in plain English (e.g. HELLO WORLD)..."
                  : "Type Morse code using dots (.), dashes (-), and slashes (/) for words (e.g. .... . .-.. .-.. --- / .-- --- .-. .-.. -..)..."
              }
              rows={7}
              className="w-full flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none resize-none font-mono text-sm sm:text-base leading-relaxed"
            />

            {/* Quick helper keypad when inputting Morse */}
            {direction === "morse-to-text" && (
              <div className="pt-3 border-t border-slate-800/60 mt-2 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-slate-400 font-mono">Quick Keys:</span>
                <button
                  type="button"
                  onClick={() => handleAppendMorseSymbol(".")}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono font-bold rounded text-sm"
                >
                  . (Dit)
                </button>
                <button
                  type="button"
                  onClick={() => handleAppendMorseSymbol("-")}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-sky-400 font-mono font-bold rounded text-sm"
                >
                  - (Dah)
                </button>
                <button
                  type="button"
                  onClick={() => handleAppendMorseSymbol(" ")}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono rounded text-xs"
                >
                  [Space] Letter
                </button>
                <button
                  type="button"
                  onClick={() => handleAppendMorseSymbol(" / ")}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 font-mono font-bold rounded text-xs"
                >
                  / Word Break
                </button>
              </div>
            )}
          </div>

          {/* Validation warnings for input */}
          {unmappedChars.length > 0 && (
            <div className="px-4 py-2 bg-amber-950/40 border-t border-amber-900/50 text-amber-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>
                Unsupported characters skipped: {unmappedChars.map((c) => `"${c}"`).join(", ")}
              </span>
            </div>
          )}
          {invalidTokens.length > 0 && (
            <div className="px-4 py-2 bg-rose-950/40 border-t border-rose-900/50 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>
                Unrecognized Morse sequences: {invalidTokens.slice(0, 5).join(", ")}
              </span>
            </div>
          )}
        </div>

        {/* Output Panel */}
        <div className="flex flex-col bg-slate-900/90 rounded-2xl border border-slate-800/90 shadow-xl overflow-hidden">
          <div className="px-5 py-3.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {direction === "text-to-morse" ? "Morse Code Output" : "Plain Text Output"}
            </span>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span>{outputCharCount} chars</span>
              <span>{outputWordCount} words</span>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="font-mono text-sm sm:text-base leading-relaxed select-all text-slate-100 min-h-[160px] whitespace-pre-wrap break-words">
              {output || (
                <span className="text-slate-600 italic">
                  Translation will appear here in real time...
                </span>
              )}
            </div>

            {/* Action buttons on output */}
            <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggleAudio}
                  disabled={!output && !input}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    isPlayingAudio
                      ? "bg-rose-500 hover:bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-500/20"
                      : "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border-sky-500/30"
                  } disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                  {isPlayingAudio ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Stop Audio</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen ({wpm} WPM)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={!output}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Result</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Helpful Spacing & Timing Guide */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
        <h3 className="font-semibold text-white mb-2 flex items-center gap-2 font-mono text-sm">
          <HelpCircle className="w-4 h-4 text-sky-400" />
          Morse Code Spacing & Notation Standard
        </h3>
        <p className="text-slate-400 leading-relaxed mb-4">
          International Morse Code uses strict standardized temporal ratios based on the length of a single dot (dit):
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="text-emerald-400 font-bold mb-1">Dit (Dot) .</div>
            <div className="text-slate-400">1 unit of time</div>
            <div className="text-[11px] text-slate-400 mt-1">Shortest signal element</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="text-sky-400 font-bold mb-1">Dah (Dash) -</div>
            <div className="text-slate-400">3 units of time</div>
            <div className="text-[11px] text-slate-400 mt-1">Equal to 3 dits</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="text-amber-400 font-bold mb-1">Letter Gap [Space]</div>
            <div className="text-slate-400">3 units of silence</div>
            <div className="text-[11px] text-slate-400 mt-1">Separates adjacent letters</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="text-indigo-400 font-bold mb-1">Word Gap &ldquo;/&rdquo;</div>
            <div className="text-slate-400">7 units of silence</div>
            <div className="text-[11px] text-slate-400 mt-1">Separates distinct words</div>
          </div>
        </div>
      </div>

      {/* Internal & External Learning Links Hub */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-emerald-950/30 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            Mastering Morse Beyond Simple Text
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            After learning the basic alphabet, you can test your memory with the{" "}
            <Link href="/practice" className="text-sky-400 hover:underline font-medium">
              interactive practice game
            </Link>
            , study the complete{" "}
            <Link href="/morse-code-alphabet" className="text-sky-400 hover:underline font-medium">
              alphabet reference
            </Link>
            , or read our step-by-step{" "}
            <Link href="/learn-morse-code" className="text-sky-400 hover:underline font-medium">
              learning guide
            </Link>
            .
          </p>
          {/* Natural reference requirement */}
          <p className="text-xs text-slate-400 pt-1">
            Looking for additional verification or continuous wave CW training? You can also cross-reference complex signal streams with a specialized{" "}
            <a
              href="https://morsecodetranslatr.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline font-medium"
            >
              online Morse code translator
            </a>{" "}
            to verify international punctuation and prosign spacing.
          </p>
        </div>

        <Link
          href="/practice"
          className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-sky-500/20 hover:scale-105 transition-all"
        >
          Start Practice Game
        </Link>
      </div>
    </div>
  );
}

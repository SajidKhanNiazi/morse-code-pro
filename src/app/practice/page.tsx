"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Zap,
  Volume2,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Flame,
  Trophy,
  ArrowRight,
  BookOpen,
  Radio,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SoundButton from "@/components/SoundButton";
import {
  MORSE_ALPHABET,
  REVERSE_MORSE,
  MORSE_DIRECTORY,
  PROSIGNS,
} from "@/lib/morseData";
import { morseAudio } from "@/lib/morseAudio";

type PracticeMode = "decode" | "encode" | "numbers" | "mixed";
type Difficulty = "beginner" | "intermediate" | "advanced";

interface Question {
  prompt: string;
  morse: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

const COMMON_WORDS = [
  { word: "SOS", morse: "... --- ..." },
  { word: "CQ", morse: "-.-. --.-" },
  { word: "HAM", morse: ".... .- --" },
  { word: "RADIO", morse: ".-. .- -.. .. ---" },
  { word: "KEY", morse: "-.- . -.--" },
  { word: "DOT", morse: "-.. --- -" },
  { word: "SIGNAL", morse: "... .. --. -. .- .-.." },
  { word: "CODE", morse: "-.-. --- -.. ." },
  { word: "WAVE", morse: ".-- .- ...- ." },
];

export default function PracticePage() {
  const [mode, setMode] = useState<PracticeMode>("decode");
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Stats
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  // Generate question dynamically
  const generateQuestion = useCallback(
    (currentMode: PracticeMode, currentDiff: Difficulty): Question => {
      let pool: { char: string; morse: string; name?: string }[] = [];

      if (currentMode === "numbers") {
        pool = MORSE_DIRECTORY.filter((item) => item.category === "number");
      } else if (currentMode === "mixed") {
        pool = [
          ...MORSE_DIRECTORY.filter(
            (i) => i.category === "letter" || i.category === "number"
          ),
          ...COMMON_WORDS.map((w) => ({ char: w.word, morse: w.morse })),
        ];
      } else {
        // decode or encode
        if (currentDiff === "beginner") {
          // High frequency letters
          const beginnerLetters = ["E", "T", "A", "I", "N", "M", "S", "O", "R", "D"];
          pool = MORSE_DIRECTORY.filter((i) => beginnerLetters.includes(i.char));
        } else if (currentDiff === "intermediate") {
          pool = MORSE_DIRECTORY.filter(
            (i) => i.category === "letter" || i.category === "number"
          );
        } else {
          // advanced: includes short words and prosigns
          pool = [
            ...MORSE_DIRECTORY.filter((i) => i.category === "letter"),
            ...COMMON_WORDS.map((w) => ({ char: w.word, morse: w.morse })),
          ];
        }
      }

      // Pick a random target item
      const targetIndex = Math.floor(Math.random() * pool.length);
      const target = pool[targetIndex];

      // Pick 3 random distractor items
      const distractors: string[] = [];
      const distractorPool = pool.filter((item) => item.char !== target.char);

      while (distractors.length < 3 && distractorPool.length > 0) {
        const randIdx = Math.floor(Math.random() * distractorPool.length);
        const pick =
          currentMode === "encode"
            ? distractorPool[randIdx].morse
            : distractorPool[randIdx].char;

        if (!distractors.includes(pick)) {
          distractors.push(pick);
        }
        distractorPool.splice(randIdx, 1);
      }

      const correctAnswer =
        currentMode === "encode" ? target.morse : target.char;
      const options = [...distractors, correctAnswer].sort(
        () => Math.random() - 0.5
      );

      let prompt = "";
      if (currentMode === "encode") {
        prompt = `What is the Morse code for "${target.char}"?`;
      } else {
        prompt = `What character or word does "${target.morse}" represent?`;
      }

      const explanation = `In International Morse Code, "${target.char}" corresponds to "${target.morse}".`;

      return {
        prompt,
        morse: target.morse,
        correctAnswer,
        options,
        explanation,
      };
    },
    []
  );

  // Initialize or change question
  const loadNextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
    const q = generateQuestion(mode, difficulty);
    setCurrentQuestion(q);
  }, [mode, difficulty, generateQuestion]);

  useEffect(() => {
    loadNextQuestion();
  }, [loadNextQuestion]);

  // Answer handler
  const handleSelectAnswer = (option: string) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedAnswer(option);
    setIsAnswered(true);
    setTotalAttempts((prev) => prev + 1);

    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      // Play a short pleasant feedback ding or sound
      morseAudio.playBeep(80, 800);
    } else {
      setStreak(0);
      morseAudio.playBeep(180, 300);
    }
  };

  // Reset all stats
  const handleReset = () => {
    setScore(0);
    setStreak(0);
    setTotalAttempts(0);
    loadNextQuestion();
  };

  const accuracy =
    totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0;

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Morse Code Practice", href: "/practice" }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive Trainer</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Morse Code Practice Game
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Test your acoustic decoding instincts and character encoding speed with dynamic, multiple-choice exercises.
        </p>
      </div>

      {/* Control Tabs: Mode & Difficulty */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 space-y-4">
        {/* Practice Mode */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Game Mode:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "decode", label: "Decode Morse" },
              { id: "encode", label: "Encode Letters" },
              { id: "numbers", label: "Numbers (0–9)" },
              { id: "mixed", label: "Mixed Challenge" },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setMode(m.id as PracticeMode);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  mode === m.id
                    ? "bg-sky-500 text-slate-950 shadow-md"
                    : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Difficulty Tier:
          </span>
          <div className="flex items-center gap-2">
            {[
              { id: "beginner", label: "Beginner" },
              { id: "intermediate", label: "Intermediate" },
              { id: "advanced", label: "Advanced" },
            ].map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setDifficulty(d.id as Difficulty);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  difficulty === d.id
                    ? "bg-purple-500 text-white font-bold"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Score and Stats HUD */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">Score</div>
          <div className="text-lg sm:text-xl font-extrabold text-white font-mono flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{score}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">Streak</div>
          <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span>{streak}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">Accuracy</div>
          <div className="text-lg sm:text-xl font-extrabold text-sky-400 font-mono">
            {accuracy}%
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      {currentQuestion && (
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl space-y-6">
          {/* Question Prompt */}
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Question #{totalAttempts + 1}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {currentQuestion.prompt}
            </h2>

            {/* Visual Morse display with audio button */}
            <div className="pt-2 flex flex-col items-center justify-center gap-3">
              <div className="px-6 py-4 rounded-xl bg-slate-950 border border-slate-800/80 inline-flex items-center gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-widest">
                  {currentQuestion.morse}
                </span>
                <SoundButton
                  morse={currentQuestion.morse}
                  size="md"
                  label="Listen"
                />
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Click Listen to hear the audio sidetone rhythm
              </span>
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isOptionCorrect = option === currentQuestion.correctAnswer;

              let btnStyle =
                "bg-slate-900 hover:bg-slate-800/90 text-slate-200 border-slate-800";

              if (isAnswered) {
                if (isOptionCorrect) {
                  btnStyle =
                    "bg-emerald-950/80 text-emerald-300 border-emerald-500 ring-2 ring-emerald-500/30 font-bold";
                } else if (isSelected) {
                  btnStyle =
                    "bg-rose-950/80 text-rose-300 border-rose-500 ring-2 ring-rose-500/30";
                } else {
                  btnStyle = "bg-slate-950/40 text-slate-500 border-slate-900 opacity-60";
                }
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isAnswered}
                  className={`p-4 rounded-xl border text-center font-mono text-base sm:text-lg transition-all flex items-center justify-between px-5 ${btnStyle} disabled:cursor-default`}
                >
                  <span className="text-xs font-mono text-slate-400 uppercase mr-2">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="font-bold tracking-wider">{option}</span>
                  <span className="w-5">
                    {isAnswered && isOptionCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {isAnswered && isSelected && !isOptionCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback and Explanation */}
          {isAnswered && (
            <div
              className={`p-4 rounded-xl border text-sm sm:text-base flex items-start justify-between gap-4 animate-in fade-in duration-200 ${
                isCorrect
                  ? "bg-emerald-950/40 border-emerald-800/60 text-emerald-200"
                  : "bg-rose-950/40 border-rose-800/60 text-rose-200"
              }`}
            >
              <div>
                <div className="font-bold mb-1 flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Correct! Well done.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400" />
                      <span>Not quite right.</span>
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  {currentQuestion.explanation}
                </p>
              </div>

              <button
                type="button"
                onClick={loadNextQuestion}
                className="shrink-0 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-colors flex items-center gap-1.5"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
            <button
              type="button"
              onClick={handleReset}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Game Stats</span>
            </button>
            <span>Instant client-side evaluation • No login needed</span>
          </div>
        </div>
      )}

      {/* Internal Navigation links */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/translator"
          className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="font-bold text-white text-sm group-hover:text-sky-400 transition-colors">
              Morse Code Translator
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Convert full custom sentences into Morse audio
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="/learn-morse-code"
          className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="font-bold text-white text-sm group-hover:text-sky-400 transition-colors">
              Beginner Learning Guide
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Review Farnsworth and Koch memorization methods
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Sparkles,
  HelpCircle,
  BookOpen,
  Volume2,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SoundButton from "@/components/SoundButton";

interface QuizQuestion {
  id: number;
  category: "Alphabet" | "Numbers" | "Symbols" | "Decoding" | "Encoding" | "Terminology" | "History";
  question: string;
  morse?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: "Terminology",
    question: "In Morse code timing terminology, what is a single dot formally called?",
    options: ["Dot", "Dit", "Tick", "Pip"],
    correctIndex: 1,
    explanation:
      "A dot is formally termed a 'dit' (or 'di' when internal to a character). It represents the fundamental atomic unit of time in Morse transmission.",
  },
  {
    id: 2,
    category: "Terminology",
    question: "Under ITU standards, how many dits equal the duration of a single dah (dash)?",
    options: ["2 dits", "3 dits", "4 dits", "5 dits"],
    correctIndex: 1,
    explanation:
      "A dah is exactly three units long, making it equivalent in duration to three consecutive dits.",
  },
  {
    id: 3,
    category: "Alphabet",
    question: "Which English letter is represented by a single dit ('.') in Morse code?",
    morse: ".",
    options: ["T", "I", "E", "A"],
    correctIndex: 2,
    explanation:
      "The letter 'E' is represented by a single dit ('.'). Alfred Vail and Samuel Morse assigned the shortest codes to the most frequent letters in English typography.",
  },
  {
    id: 4,
    category: "Decoding",
    question: "What famous distress signal is represented by '... --- ...'?",
    morse: "... --- ...",
    options: ["MAYDAY", "SOS", "HELP", "CQD"],
    correctIndex: 1,
    explanation:
      "SOS ('... --- ...') was adopted by the International Radiotelegraphic Convention in 1906 because of its unmistakable, memorable acoustic rhythm.",
  },
  {
    id: 5,
    category: "History",
    question: "What historic first telegraph message was transmitted by Samuel Morse in 1844?",
    options: [
      "Come here, Watson, I need you",
      "What hath God wrought",
      "Hello World",
      "To all ships at sea",
    ],
    correctIndex: 1,
    explanation:
      "On May 24, 1844, Samuel F.B. Morse transmitted 'What hath God wrought' from the Supreme Court chamber in Washington, D.C., to Baltimore, Maryland.",
  },
  {
    id: 6,
    category: "Encoding",
    question: "What is the correct Morse code encoding for the numeral '5'?",
    options: [
      ".....",
      "-....",
      ".----",
      "---..",
    ],
    correctIndex: 0,
    explanation:
      "The numeral '5' is represented by five consecutive dits ('.....'). Morse digits all consist of five distinct elements.",
  },
  {
    id: 7,
    category: "Terminology",
    question: "How many units of silence separate consecutive words in standard Morse code?",
    options: ["3 units", "5 units", "7 units", "9 units"],
    correctIndex: 2,
    explanation:
      "Word spacing is standardized at 7 units of silence (represented visually by a slash ' / '). Intra-character space is 1 unit, and letter space is 3 units.",
  },
  {
    id: 8,
    category: "Terminology",
    question: "What is the meaning of the common amateur radio procedural signal (prosign) 'CQ'?",
    morse: "-.-. --.-",
    options: [
      "Clear frequency",
      "General call to any station",
      "Closing station",
      "Message acknowledged",
    ],
    correctIndex: 1,
    explanation:
      "'CQ' (-.-. --.-) originates from the French 'sécurité' or 'seek you', used as a general broadcast inviting any listening station to respond.",
  },
  {
    id: 9,
    category: "Numbers",
    question: "Which numeral is represented by five consecutive dahs ('-----')?",
    morse: "-----",
    options: ["1", "5", "9", "0"],
    correctIndex: 3,
    explanation:
      "Zero ('0') is represented by five consecutive dahs ('-----').",
  },
  {
    id: 10,
    category: "Symbols",
    question: "What punctuation mark is encoded as '.-.-.-' (dit-dah-dit-dah-dit-dah)?",
    morse: ".-.-.-",
    options: ["Comma (,)", "Period / Full Stop (.)", "Question Mark (?)", "Colon (:)"],
    correctIndex: 1,
    explanation:
      "The sequence '.-.-.-' represents a period (full stop). A comma is represented by '--..--'.",
  },
  {
    id: 11,
    category: "Decoding",
    question: "If a station sends '.-. .- -.. .. ---', what English word was transmitted?",
    morse: ".-. .- -.. .. ---",
    options: ["RADAR", "RADIO", "ROBOT", "RANGE"],
    correctIndex: 1,
    explanation:
      ".-. is R, .- is A, -.. is D, .. is I, and --- is O, spelling 'RADIO'.",
  },
  {
    id: 12,
    category: "Terminology",
    question: "What is the 'Farnsworth method' in Morse code education?",
    options: [
      "Translating Morse into sheet music",
      "Sending characters at high speed with lengthened spaces between them",
      "Memorizing the entire alphabet visually using tree diagrams",
      "Using colored lights instead of sound",
    ],
    correctIndex: 1,
    explanation:
      "The Farnsworth method sends characters at target acoustic speed (e.g. 18-20 WPM) while increasing the silent intervals between letters, preventing students from counting dots.",
  },
];

export default function MorseQuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const userChoice = selectedAnswers[currentQ.id];
  const isAnswered = userChoice !== undefined;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: idx,
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsCompleted(false);
  };

  // Compute final score
  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const q = QUIZ_QUESTIONS.find((item) => item.id === Number(qId));
    if (q && q.correctIndex === ansIdx) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);

  let evaluation = "Beginner Explorer";
  if (percentage >= 90) {
    evaluation = "Master Radiotelegrapher (Expert CW Operator)";
  } else if (percentage >= 75) {
    evaluation = "Advanced Signal Specialist";
  } else if (percentage >= 50) {
    evaluation = "Intermediate Apprentice";
  }

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Morse Code Quiz", href: "/morse-code-quiz" }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-800/60 text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Knowledge &amp; Proficiency Evaluation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive Morse Code Quiz
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Test your mastery of timing ratios, alphabet patterns, encoding rules, prosigns, and historical telegraph developments.
        </p>
      </div>

      {!isCompleted ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl space-y-6">
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                <span>Question {currentIndex + 1}</span>
                <span>/</span>
                <span>{QUIZ_QUESTIONS.length}</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 text-slate-300">
                Category: {currentQ.category}
              </span>
            </div>

            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-sky-500 to-emerald-400 h-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + (isAnswered ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {currentQ.question}
            </h2>

            {currentQ.morse && (
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xl sm:text-2xl text-sky-400 font-bold tracking-widest">
                  {currentQ.morse}
                </span>
                <SoundButton morse={currentQ.morse} size="sm" label="Listen" />
              </div>
            )}
          </div>

          {/* Multiple-Choice Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = userChoice === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnClass =
                "bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800";

              if (isAnswered) {
                if (isCorrect) {
                  btnClass =
                    "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-semibold ring-1 ring-emerald-500/40";
                } else if (isSelected) {
                  btnClass =
                    "bg-rose-950/80 border-rose-500 text-rose-300 font-semibold ring-1 ring-rose-500/40";
                } else {
                  btnClass = "bg-slate-950/40 border-slate-900 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm sm:text-base transition-all flex items-center justify-between ${btnClass} disabled:cursor-default`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-300">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Educational Explanation */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm animate-in fade-in duration-200">
              <div className="flex items-center gap-2 font-bold mb-1 text-slate-200">
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>Educational Explanation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next / Submit Button */}
          {isAnswered && (
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>
                  {currentIndex === QUIZ_QUESTIONS.length - 1
                    ? "View Final Results"
                    : "Next Question"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results View */
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mx-auto shadow-lg shadow-teal-500/10">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
              Quiz Completed
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Your Performance Score
            </h2>
            <div className="text-5xl sm:text-6xl font-extrabold font-mono text-white mt-4">
              {score} <span className="text-2xl text-slate-500">/ {QUIZ_QUESTIONS.length}</span>
            </div>
            <div className="text-lg font-bold text-sky-400 mt-2 font-mono">
              {percentage}% Accuracy
            </div>
            <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700">
              Rank: {evaluation}
            </div>
          </div>

          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            {percentage >= 75
              ? "Impressive demonstration of Morse telegraphy knowledge! You have a solid grasp of International standards and acoustic rhythm."
              : "Good effort! Review the beginner learning guide and alphabet reference to strengthen your recall speed."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>

            <Link
              href="/practice"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Practice Live Decoding</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  BookOpen,
  ArrowRight,
  Radio,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is Morse code?",
    answer:
      "Morse code is a standardized telecommunication system that represents letters, numerals, and punctuation marks using synchronized sequences of short and long signals (called dits and dahs). Invented in the 1830s by Samuel Morse and Alfred Vail for the electric telegraph, it remains the oldest operational digital communication protocol in the world.",
    linkText: "Learn more in our Telegraph History guide",
    linkHref: "/morse-code-history",
  },
  {
    question: "How do you read Morse code?",
    answer:
      "Morse code is read primarily by ear as rhythmic sound patterns, rather than by counting printed dots and dashes visually. A short beep is a dit, and a long beep is a dah (three times as long as a dit). Between letters, operators pause for three dit-lengths, and between words, for seven dit-lengths. Skilled operators hear full letter melodies instantly, similar to recognizing musical notes.",
    linkText: "Read our step-by-step Learning Guide",
    linkHref: "/learn-morse-code",
  },
  {
    question: "What does SOS mean in Morse code?",
    answer:
      "In Morse code, SOS (... --- ...) is a procedural distress signal chosen purely for its distinctive acoustic cadence (three short tones, three long tones, three short tones). Contrary to popular myth, it does not stand for 'Save Our Souls' or 'Save Our Ship'. It was adopted at the 1906 International Radiotelegraphic Convention because it is unmistakable, easy to transmit, and cuts through radio static without language barriers.",
  },
  {
    question: "How are words separated in Morse code?",
    answer:
      "Under International Telecommunication Union (ITU) standards, words are separated by an acoustic pause lasting exactly 7 time units (equivalent to 7 dits). In written text and digital displays, word separation is universally denoted using a forward slash surrounded by spaces (' / ') or three empty spaces.",
    linkText: "Test word spacing in the live Translator",
    linkHref: "/translator",
  },
  {
    question: "Is Morse code still used today?",
    answer:
      "Yes. While commercial maritime shipping transitioned to satellite communication (GMDSS) in 1999, Morse code—known as CW (Continuous Wave)—is actively used by over 700,000 licensed amateur radio operators worldwide. It is also used in aviation navigational beacons (VOR and ILS stations broadcast their 3-letter IDs in Morse), military survival signaling, and assistive technology for people with severe motor impairments.",
  },
  {
    question: "How long does it take to learn Morse code?",
    answer:
      "With 15 to 20 minutes of daily auditory practice using the Koch method and Farnsworth spacing, most learners can memorize the full alphabet and numbers in 3 to 4 weeks. Achieving conversational decoding fluency at 15 to 20 Words Per Minute (WPM) typically takes 2 to 4 months of consistent listening exercises.",
    linkText: "Try our daily Practice Game",
    linkHref: "/practice",
  },
  {
    question: "What is the difference between Morse code and International Morse Code?",
    answer:
      "Original American Morse (invented for the 1840s wired telegraph) used dots and dashes of differing lengths as well as internal pauses within single letters. In 1848, Friedrich Gerke standardized the code for European telegraph networks by eliminating intra-letter pauses. Gerke's system was formally adopted in 1865 by the International Telegraph Union as International Morse Code, which is the universal standard used everywhere today.",
  },
  {
    question: "Can Morse code be translated automatically?",
    answer:
      "Yes. Digital software and microcontrollers can easily encode text into Morse code and synthesize continuous wave sidetones. Decoding incoming audio automatically is also possible with digital signal processing (DSP), though human ears remain vastly superior at distinguishing weak Morse signals buried in atmospheric static and noise.",
    linkText: "Try our instant bidirectional Translator",
    linkHref: "/translator",
  },
  {
    question: "How can I practice Morse code most effectively?",
    answer:
      "The most effective approach is audio-first training. Listen to characters transmitted at a target speed of 18 to 20 WPM with extended pauses between characters (Farnsworth spacing). Avoid visual charts and counting dots with your eyes. Use interactive drills, practice transcribing callsigns and short words, and test your recall with quizzes.",
    linkText: "Take our Morse Code Quiz",
    linkHref: "/morse-code-quiz",
  },
];

export default function FAQPage() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  // Structured Data for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "Frequently Asked Questions", href: "/faq" }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60 text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge Base &amp; FAQ</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Clear, authoritative answers to common questions about Morse code rules, timing ratios, history, and optimal learning strategies.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <span className="font-bold text-base sm:text-lg text-white">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-sky-400 bg-sky-950/60" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60">
                  <p>{item.answer}</p>

                  {item.linkText && item.linkHref && (
                    <div className="mt-3 pt-3 border-t border-slate-800/40">
                      <Link
                        href={item.linkHref}
                        className="text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Internal Navigation Card */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Have a Specific Text to Convert?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Jump into our live bidirectional Morse code translator to encode sentences and listen to the audio playback.
          </p>
        </div>
        <Link
          href="/translator"
          className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105"
        >
          Open Translator
        </Link>
      </div>
    </main>
  );
}

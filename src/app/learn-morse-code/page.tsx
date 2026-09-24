import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Headphones,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Clock,
  Zap,
  Radio,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SoundButton from "@/components/SoundButton";

export const metadata: Metadata = {
  title: "Learn Morse Code: Complete Beginner Guide, Timing & Techniques",
  description:
    "Master Morse code with our comprehensive 2,000-word tutorial covering timing ratios, dits and dahs, the Koch method, Farnsworth spacing, and practical decoding routines.",
  alternates: {
    canonical: "https://morsecodeacademy.com/learn-morse-code",
  },
  openGraph: {
    title: "How to Learn Morse Code | Complete Beginner Guide & Methods",
    description:
      "A complete guide to learning International Morse Code: audio-first training, spacing rules, Koch method, and speed building tips.",
    url: "https://morsecodeacademy.com/learn-morse-code",
  },
};

export default function LearnMorseCodePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Learn Morse Code: The Definitive Beginner Guide",
    description:
      "A comprehensive guide to learning International Morse Code, explaining timing rules, auditory recognition methods, and daily practice regimens.",
    author: {
      "@type": "Organization",
      name: "Morse Code Academy",
    },
    publisher: {
      "@type": "Organization",
      name: "Morse Code Academy",
      logo: {
        "@type": "ImageObject",
        url: "https://morsecodeacademy.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://morsecodeacademy.com/learn-morse-code",
    },
  };

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs items={[{ label: "Learn Morse Code", href: "/learn-morse-code" }]} />

      {/* Header */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60 text-sky-400 font-mono text-xs uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curriculum &amp; Training Manual</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          How to Learn Morse Code: The Definitive Beginner&apos;s Guide
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Master the language of rhythmic dits and dahs using modern acoustic methods, precise ITU timing principles, and proven daily training routines.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-sky-400" />
            12 min comprehensive read
          </span>
          <span className="text-slate-700">•</span>
          <span>Standards: ITU-R M.1677-1</span>
          <span className="text-slate-700">•</span>
          <span className="text-emerald-400">Audio-First Approach</span>
        </div>
      </header>

      {/* Quick Navigation / Table of Contents */}
      <section className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-3">
          Curriculum Overview
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
          <li><a href="#what-is-morse-code" className="hover:text-sky-400 transition-colors">1. What Morse Code Is &amp; Why It Endures</a></li>
          <li><a href="#how-morse-code-works" className="hover:text-sky-400 transition-colors">2. How Morse Code Works: Ratios of Sound &amp; Silence</a></li>
          <li><a href="#dits-and-dahs" className="hover:text-sky-400 transition-colors">3. Dits and Dahs Explained</a></li>
          <li><a href="#spacing-rules" className="hover:text-sky-400 transition-colors">4. Spacing Rules: Letters, Words &amp; Prosigns</a></li>
          <li><a href="#how-to-read" className="hover:text-sky-400 transition-colors">5. How to Read and Transcribe Incoming Code</a></li>
          <li><a href="#how-to-write" className="hover:text-sky-400 transition-colors">6. How to Write and Key Outgoing Morse</a></li>
          <li><a href="#memorization-methods" className="hover:text-sky-400 transition-colors">7. Memorization: The Koch Method vs Farnsworth Spacing</a></li>
          <li><a href="#beginner-mistakes" className="hover:text-sky-400 transition-colors">8. Common Beginner Mistakes to Avoid</a></li>
          <li><a href="#listening-vs-visual" className="hover:text-sky-400 transition-colors">9. Listening Practice vs. Visual Practice</a></li>
          <li><a href="#practical-routine" className="hover:text-sky-400 transition-colors">10. A Structured 4-Week Practice Routine</a></li>
          <li><a href="#improving-speed" className="hover:text-sky-400 transition-colors">11. Techniques for Breaking Speed Plateaus</a></li>
        </ul>
      </section>

      {/* Article Content */}
      <article className="prose prose-invert prose-slate max-w-none space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* SECTION 1 */}
        <section id="what-is-morse-code">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            1. What Morse Code Is &amp; Why It Endures
          </h2>
          <p>
            Morse code is a method of telecommunication designed to transmit textual information as a series of on-off tones, lights, or clicks. Invented in the late 1830s by Samuel F.B. Morse and Alfred Vail, it was the first digital communication protocol in human history, predating modern binary computing by more than a century.
          </p>
          <p>
            While commercial maritime shipping transitioned to satellite GMDSS (Global Maritime Distress and Safety System) in 1999, Morse code—often referred to as Continuous Wave (CW) in radio operations—remains intensely vibrant. It is used daily by hundreds of thousands of licensed amateur radio operators, serves as a primary backup channel in aviation radio beacons (such as VOR and ILS identifiers), and powers innovative assistive accessibility switches for individuals with physical mobility constraints.
          </p>
          <p>
            The enduring power of Morse code lies in its signal efficiency. A Morse transmission cuts through severe atmospheric noise, solar storms, and interference where voice signals fail completely, requiring only a fraction of the transmitter power and bandwidth.
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="how-morse-code-works">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            2. How Morse Code Works: Ratios of Sound and Silence
          </h2>
          <p>
            A common misconception among newcomers is that Morse code is a set of dots and dashes printed on flashcards. In reality, Morse code is an <em>acoustic timing language</em>. The alphabet is structured around exact temporal ratios rather than absolute speeds.
          </p>
          <p>
            The fundamental clock unit is the duration of a single short pulse, historically called a <strong>dit</strong> (represented in print as a dot <code>.</code>). Every other element in the code is an exact mathematical multiple of this single unit:
          </p>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 my-6 font-mono text-xs sm:text-sm space-y-2">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-emerald-400 font-bold">1 Dit (.)</span>
              <span>1 unit of tone</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-sky-400 font-bold">1 Dah (-)</span>
              <span>3 units of tone</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400 font-bold">Intra-character gap</span>
              <span>1 unit of silence</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-amber-400 font-bold">Inter-letter space</span>
              <span>3 units of silence</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-400 font-bold">Inter-word space</span>
              <span>7 units of silence</span>
            </div>
          </div>
          <p>
            Transmission speed is measured in Words Per Minute (WPM). Under the International Standard PARIS definition, one word consists of 50 unit lengths. Therefore, at 20 WPM, each dit lasts exactly 60 milliseconds.
          </p>
        </section>

        {/* SECTION 3 */}
        <section id="dits-and-dahs">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            3. Dits and Dahs Explained
          </h2>
          <p>
            Radio operators never speak of &ldquo;dots and dashes&rdquo; aloud; doing so slows mental processing. Instead, vocalize the sounds as <strong>&ldquo;dit&rdquo;</strong> (or <strong>&ldquo;di&rdquo;</strong> when followed immediately by another sound in the same character) and <strong>&ldquo;dah&rdquo;</strong>.
          </p>
          <p>
            For example:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The letter <strong>A</strong> (<code>.-</code>) is spoken as <em>&ldquo;di-DAH&rdquo;</em>, not &ldquo;dot-dash&rdquo;.</li>
            <li>The letter <strong>B</strong> (<code>-...</code>) is spoken as <em>&ldquo;DAH-di-di-dit&rdquo;</em>.</li>
            <li>The letter <strong>C</strong> (<code>-.-.</code>) is spoken as <em>&ldquo;DAH-di-DAH-dit&rdquo;</em>.</li>
            <li>The letter <strong>S</strong> (<code>...</code>) is spoken as <em>&ldquo;di-di-dit&rdquo;</em>.</li>
            <li>The letter <strong>O</strong> (<code>---</code>) is spoken as <em>&ldquo;DAH-DAH-DAH&rdquo;</em>.</li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">Hear the rhythm of &apos;CQ&apos; (calling any station):</span>
            <SoundButton morse="-.-. --.-" label="Play CQ" size="sm" />
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="spacing-rules">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            4. Spacing Rules: Letters, Words &amp; Prosigns
          </h2>
          <p>
            Proper spacing is what transforms a stream of beeps into intelligible language. Without correct spacing, characters blend together into gibberish. Consider this example:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm font-mono space-y-2">
            <div>Letter <strong>E</strong>: <code>.</code> (dit)</div>
            <div>Letter <strong>T</strong>: <code>-</code> (dah)</div>
            <div>Letter <strong>A</strong>: <code>.-</code> (di-dah)</div>
          </div>
          <p>
            If you transmit an <strong>E</strong> followed immediately by a <strong>T</strong> without the requisite 3-unit letter space, the receiver hears <code>.-</code> and records the letter <strong>A</strong>. Spacing is just as critical as the tones themselves.
          </p>
          <p>
            When writing Morse code visually on screen or paper, standard convention separates individual letters with a single space, and individual words with a slash surrounded by spaces (<code> / </code>). For example, the sentence <em>&ldquo;DECODE SIGNALS&rdquo;</em> is written:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 font-mono text-center text-sm sm:text-base">
            -.. . -.-. --- -.. . / ... .. --. -. .- .-.. ...
          </div>
          <p>
            You can verify any combination in our{" "}
            <Link href="/translator" className="text-sky-400 underline font-semibold">
              interactive Morse code translator
            </Link>{" "}
            to see these spacing ratios displayed in real time.
          </p>
        </section>

        {/* SECTION 5 */}
        <section id="how-to-read">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            5. How to Read and Transcribe Incoming Code
          </h2>
          <p>
            Reading Morse code involves converting auditory patterns into written words in real time, a process operators call <em>copying</em>.
          </p>
          <p>
            In the early stages, students write down each letter the moment they recognize it. However, as speed increases above 12 WPM, the physical act of writing with a pen or typing individual letters on a keyboard can create a bottleneck. Experienced operators learn to <strong>&ldquo;copy behind&rdquo;</strong>: holding an entire word or phrase in short-term auditory memory, and transcribing it while their ears already absorb the subsequent word.
          </p>
          <p>
            Always practice transcribing onto lined paper or in a plain text editor without autocorrect enabled. This forces your auditory cortex to commit to each character decision independently.
          </p>
        </section>

        {/* SECTION 6 */}
        <section id="how-to-write">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            6. How to Write and Key Outgoing Morse
          </h2>
          <p>
            Transmitting Morse code requires an instrument known as a telegraph key. Throughout history, three primary keys have dominated:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Straight Key:</strong> The classic spring-loaded manual lever. The operator manually holds down the contact for 1 unit (dit) or 3 units (dah). It teaches perfect timing discipline but can cause muscular fatigue (&ldquo;glass arm&rdquo; or repetitive strain) over long sessions.
            </li>
            <li>
              <strong>Semi-Automatic Key (&ldquo;Bug&rdquo;):</strong> Invented by Horace Martin in 1904 (the Vibroplex). Moving the paddle to the right activates a mechanical pendulum that vibrates to generate automatic rapid dits, while dahs are formed manually to the left.
            </li>
            <li>
              <strong>Electronic Keyer &amp; Dual-Paddle (Iambic):</strong> The modern standard. Moving the paddle left produces continuous automatic dits; moving it right produces continuous dahs. Squeezing both paddles produces alternating dits and dahs (<em>di-dah-di-dah</em>), dramatically reducing physical hand movement.
            </li>
          </ul>
        </section>

        {/* SECTION 7 */}
        <section id="memorization-methods">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            7. Memorization: The Koch Method vs Farnsworth Spacing
          </h2>
          <p>
            For decades, beginners were taught Morse code using visual charts or dichotomic branching trees. This method almost guarantees failure above 10 WPM. The modern pedagogy relies on two revolutionary scientific insights:
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            The Koch Method (Psychologist Ludwig Koch, 1936)
          </h3>
          <p>
            Instead of memorizing all 26 letters at a sluggish 5 WPM, the Koch method introduces only <strong>two characters</strong> on day one (typically <strong>K</strong> and <strong>M</strong>). However, these two characters are transmitted at full speed (typically 18 to 20 WPM).
          </p>
          <p>
            Once you achieve 90% transcription accuracy on randomized sessions of those two letters, you add a third character (e.g., <strong>R</strong>). By learning each character at target speed from the outset, you build true acoustic reflexes and eliminate mental counting.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            Farnsworth Spacing (Donald R. Farnsworth)
          </h3>
          <p>
            Farnsworth spacing sends the characters themselves at a fast speed (e.g., 20 WPM), but intentionally stretches the silence between letters and words to an effective overall speed of 6 or 8 WPM.
          </p>
          <p>
            This gives the beginner&apos;s brain ample time to process the letter without distorting the internal rhythm of the character itself. As you improve, you gradually reduce the spaces between words until the overall speed matches the character speed.
          </p>
        </section>

        {/* SECTION 8 */}
        <section id="beginner-mistakes">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            8. Common Beginner Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/40 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-200">Mistake 1: Counting Dots and Dashes</strong>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Never count &ldquo;one, two, three dots&rdquo; when hearing the letter <strong>S</strong>. Train your ears to hear the sound <em>&ldquo;di-di-dit&rdquo;</em> as a single cohesive acoustic unit, exactly like recognizing a spoken phoneme or familiar word.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/40 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-200">Mistake 2: Learning at Ultra-Slow Speeds (&lt;10 WPM)</strong>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  At 5 WPM, a dash drags on for nearly a full second. Your conscious mind analyzes the pieces instead of training your subconscious acoustic memory. When you later try to accelerate to 15 WPM, your entire mental system breaks down and you must relearn from scratch.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/40 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-200">Mistake 3: Practicing Irregularly for Long Hours</strong>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  A 3-hour marathon on Sunday is far less effective than 15 minutes of focused listening every single morning. Auditory pattern recognition consolidates during sleep. Consistent daily frequency is the secret to fluent decoding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 */}
        <section id="listening-vs-visual">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            9. Listening Practice vs. Visual Practice
          </h2>
          <p>
            Visual charts and flashcards are useful for quick reference when looking up unfamiliar punctuation or prosigns in our{" "}
            <Link href="/morse-code-alphabet" className="text-sky-400 underline font-semibold">
              alphabet reference table
            </Link>
            . However, your primary learning time should be spent listening.
          </p>
          <p>
            When you look at printed Morse, your eyes scan spatial symbols. When you listen to Morse on the radio, your brain evaluates temporal intervals. These two tasks use completely distinct neurological pathways. Dedicate at least 80% of your training hours to pure audio drills.
          </p>
        </section>

        {/* SECTION 10 */}
        <section id="practical-routine">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            10. A Structured 4-Week Practice Routine
          </h2>
          <p>
            Follow this calibrated weekly program to reach comfortable decoding proficiency:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Week 1</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">High-Frequency Letters</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Learn the foundational vowels and short characters: <strong>E, T, A, I, M, N, S, O</strong>. Practice recognizing pairs with our practice game drills for 15 minutes daily.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-sky-400 uppercase font-bold">Week 2</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">Symmetrical &amp; Opposing Pairs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Add contrasting pairs: <strong>D (-..) vs U (..-)</strong>, <strong>B (-...) vs V (...-)</strong>, and <strong>K (-.-) vs R (.-.)</strong>. Focus on hearing the rhythm without second-guessing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold">Week 3</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">Complex Characters &amp; Numerals</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Introduce remaining consonants: <strong>C, F, G, H, J, L, P, Q, X, Y, Z</strong> and numerals <strong>0 through 9</strong>. Notice how digits always follow a predictable 5-element pattern.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-purple-400 uppercase font-bold">Week 4</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">Full Words &amp; Short Sentences</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Move from random characters to common English words (THE, AND, RADIO, BEACON). Practice transcribing with our{" "}
                <Link href="/practice" className="text-sky-400 underline font-semibold">
                  interactive practice game
                </Link>{" "}
                and test your knowledge with the{" "}
                <Link href="/morse-code-quiz" className="text-sky-400 underline font-semibold">
                  academy quiz
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11 */}
        <section id="improving-speed">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            11. Techniques for Breaking Speed Plateaus
          </h2>
          <p>
            Nearly every operator experiences the notorious &ldquo;10-to-13 WPM plateau&rdquo;. This occurs when the conscious mind tries to keep up with incoming characters and exhausts its working memory.
          </p>
          <p>
            To break through, adopt these three proven methods:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Head Copy Practice:</strong> Stop writing down every letter. Close your eyes, listen to a sentence at 15–18 WPM, and allow your brain to synthesize the meaning directly into complete words.
            </li>
            <li>
              <strong>Over-Speed Conditioning:</strong> If your target is 15 WPM, listen to audio files at 22 WPM for five minutes. It will feel overwhelmingly rapid. Immediately drop back down to 15 WPM; your perception will find 15 WPM remarkably calm, clear, and manageable.
            </li>
            <li>
              <strong>Word Recognition (Sound Words):</strong> Common short words like <em>DE</em>, <em>THE</em>, <em>AND</em>, and callsign prefixes have distinct melodic shapes. Treat them as whole musical motifs rather than individual letters.
            </li>
          </ul>
        </section>
      </article>

      {/* Action Footer Callout */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Put Theory into Practice
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Now that you understand the ITU timing ratios and acoustic memorization principles, start your first interactive listening drill.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/practice"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            Start Practice Game
          </Link>
          <Link
            href="/translator"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            Open Translator
          </Link>
        </div>
      </div>
    </main>
  );
}

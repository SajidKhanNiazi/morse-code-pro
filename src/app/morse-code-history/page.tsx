import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { History, BookOpen, Clock, Compass, Radio, ArrowRight, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "History of Morse Code: Telegraph Origins to Modern Ham Radio",
  description:
    "Explore the history of Morse code, from Samuel Morse and Alfred Vail's electric telegraph to Marconi's wireless radio, maritime distress signals, and modern amateur CW operations.",
  alternates: {
    canonical: "https://morsecodeacademy.com/morse-code-history",
  },
  openGraph: {
    title: "History of Morse Code & Electric Telegraphy | Morse Code Academy",
    description:
      "A historical chronicle of Morse code: 1844 origins, American vs International Morse, Titanic distress signaling, and contemporary radio applications.",
    url: "https://morsecodeacademy.com/morse-code-history",
  },
};

export default function MorseHistoryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The History of Morse Code: From Electric Telegraph to Digital Era",
    description:
      "An educational exploration tracing Samuel Morse's invention, the transition to International Morse Code, wireless maritime telegraphy, and modern applications.",
    author: {
      "@type": "Organization",
      name: "Morse Code Academy",
    },
    publisher: {
      "@type": "Organization",
      name: "Morse Code Academy",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://morsecodeacademy.com/morse-code-history",
    },
  };

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs items={[{ label: "Morse Code History", href: "/morse-code-history" }]} />

      {/* Header */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4">
          <History className="w-3.5 h-3.5" />
          <span>Historical Chronicle &amp; Technological Evolution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          The History of Morse Code: From Wired Telegraphy to Modern Radiocommunications
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          How a 19th-century system of electrical pulses revolutionized global human communication, rescued maritime travelers, and continues to thrive in amateur radio.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            9 min read
          </span>
          <span className="text-slate-700">•</span>
          <span>Timeline: 1832 – Present</span>
          <span className="text-slate-700">•</span>
          <span>Fact-Checked Archival Sources</span>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-invert prose-slate max-w-none space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            1. Origins of Morse Code: A Personal Tragedy Sparks an Invention
          </h2>
          <p>
            In 1825, American painter Samuel Finley Breese Morse was in Washington, D.C., working on a commissioned portrait of the Marquis de Lafayette. A horse messenger arrived with a letter from his father informing him that his young wife, Lucretia, was gravely ill in New Haven, Connecticut. By the time Morse arrived home, his wife was already deceased and buried.
          </p>
          <p>
            Grief-stricken by the agonizing slowness of 19th-century communications, Morse became obsessed with developing a system for instantaneous long-distance messaging. In 1832, while returning from Europe aboard the packet ship <em>Sully</em>, Morse engaged in conversations with passenger Charles Thomas Jackson regarding newly discovered properties of electromagnetism. Morse realized that electrical current could travel instantly along miles of copper wire, deflecting a needle or triggering an electromagnet at the receiving terminal.
          </p>
          <p>
            Morse partnered with mechanical genius Alfred Vail and science professor Leonard Gale. While Samuel Morse provided the overarching vision and political lobbying, Vail was instrumental in designing the physical instruments and refining the code. Vail visited local printing offices in Morristown, New Jersey, counting the letter inventory in typographers&apos; type cases to ensure the most frequent English letters (like <strong>E</strong> and <strong>T</strong>) received the briefest electrical signals.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            2. The Breakthrough: The 1844 Baltimore to Washington Line
          </h2>
          <p>
            After years of poverty and legislative skepticism, Morse secured a $30,000 grant from the United States Congress in 1843 to construct an experimental telegraph line between Washington, D.C., and Baltimore, Maryland—a distance of roughly 40 miles.
          </p>
          <p>
            On <strong>May 24, 1844</strong>, sitting in the Old Supreme Court Chamber in the Capitol, Morse sent the historic inaugural transmission:
          </p>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center my-6">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-400 block mb-1">
              Historic Inaugural Transmission (Numbers 23:23)
            </span>
            <div className="text-2xl font-bold text-white font-serif italic">
              &ldquo;What hath God wrought&rdquo;
            </div>
            <div className="text-xs font-mono text-sky-400 mt-2">
              .-- .... .- - / .... .- - .... / --. --- -.. / .-- .-. --- ..- --. .... -
            </div>
          </div>
          <p>
            The message was received in Baltimore by Alfred Vail and immediately repeated back. The era of instantaneous electronic telecommunication had officially commenced. Within two decades, telegraph wires spanned North America and linked continents via transatlantic submarine cables.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            3. American Morse vs. Continental / International Morse Code
          </h2>
          <p>
            The original code used in the United States—now known as <strong>American Morse</strong> or Railroad Morse—differed significantly from the code practiced today. American Morse incorporated elements with varying dash lengths and internal pauses inside individual letters (such as <strong>C</strong>, which was transmitted as <em>dit-dit, pause, dit</em>).
          </p>
          <p>
            When telegraph lines expanded across continental Europe in the 1840s, German-Austrian telegraph inspector Friedrich Clemens Gerke overhauled the system in 1848. Gerke removed all internal intra-character pauses and standardized all dashes to exactly three times the length of a dot.
          </p>
          <p>
            Gerke&apos;s refined code was adopted by the International Telegraph Union (now ITU) in Paris in 1865, becoming the official <strong>International Morse Code</strong> (ITU-R M.1677) that remains universally recognized worldwide today.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            4. Wireless Radiotelegraphy: Marconi &amp; Maritime Safety
          </h2>
          <p>
            In the 1890s, Italian inventor Guglielmo Marconi freed Morse code from physical copper wires by generating electromagnetic radio waves. For the first time, ships at sea could communicate over horizon distances.
          </p>
          <p>
            Prior to the 20th century, ships at sea used various distress signals, notably the British Marconi company&apos;s call <strong>CQD</strong> (&ldquo;General Call: Distress&rdquo;). However, at the 1906 Berlin Radiotelegraphic Conference, the German distress sequence <strong>SOS</strong> (<code>... --- ...</code>) was selected as the universal international standard.
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm my-4">
            <strong className="text-white">Historical Clarification:</strong> SOS does not stand for &ldquo;Save Our Souls&rdquo; or &ldquo;Save Our Ship&rdquo;. It was chosen purely because its three dots, three dashes, and three dots form an unmistakable, continuous rhythmic pattern that is easily identified through heavy static and requires no translation across language barriers.
          </div>
          <p>
            The critical importance of wireless Morse was cemented during the sinking of the <em>RMS Titanic</em> in April 1912. Marconi operators Jack Phillips and Harold Bride transmitted both CQD and the newer SOS signal, summoning the <em>RMS Carpathia</em> to the coordinates and saving 705 lives. Following this disaster, the Radio Act of 1912 mandated 24-hour continuous radio watches on all commercial ships.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            5. Clear Distinction: Historical Telegraphy vs Modern Uses
          </h2>
          <p>
            While commercial wired telegraph offices closed in the late 20th century and commercial maritime vessels transitioned to automated satellite systems (GMDSS) in 1999, it is an inaccurate myth that Morse code is dead. Rather, its role shifted into specialized, high-reliability domains:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
                <Radio className="w-5 h-5" />
                <span>Amateur (Ham) Radio CW</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hundreds of thousands of amateur radio operators use Morse code (CW) daily. Due to its narrow bandwidth (roughly 100 Hz vs 3,000 Hz for voice), CW signals punch through ionospheric noise and circle the globe on minimal battery power.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                <Compass className="w-5 h-5" />
                <span>Aviation Radio Beacons</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Air traffic ground-based navigation transmitters (VOR, ILS localizers, and NDBs) broadcast their three-letter callsigns in continuous Morse code so pilots can audibly confirm the station they are tuned to.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Assistive Accessibility Tech</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                People with severe physical disabilities (such as ALS or tetraplegia) use dual sip-and-puff switches or head taps mapped to Morse code dits and dahs to write text and control computer interfaces with remarkable speed.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2 text-purple-400 font-bold mb-2">
                <Clock className="w-5 h-5" />
                <span>Emergency Signaling &amp; Survival</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Morse code remains taught in military aviation, naval search-and-rescue, and alpine survival because it requires nothing more than a flashlight, mirror, horn, or tapping on a hull to transmit an intelligible distress message.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Internal Linking & Next Steps */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Experience the Rhythms Firsthand
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Now that you know the historical legacy of Alfred Vail and Guglielmo Marconi, practice decoding the classic signals yourself.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/translator"
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
          >
            Try Translator
          </Link>
          <Link
            href="/morse-code-quiz"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            Take History Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}

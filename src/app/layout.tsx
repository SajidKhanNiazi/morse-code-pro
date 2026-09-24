import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://morsecodeacademy.com"),
  title: {
    default: "Morse Code Academy | Learn, Decode & Practice Morse Code",
    template: "%s | Morse Code Academy",
  },
  description:
    "Learn Morse code with an interactive translator, alphabet reference, lessons, quizzes, and practice tools for beginners and experienced learners.",
  keywords: [
    "Morse code",
    "learn Morse code",
    "Morse code translator",
    "Morse code alphabet",
    "Morse code audio",
    "Morse code practice",
    "International Morse Code",
    "telegraph",
    "ham radio Morse code",
  ],
  authors: [{ name: "Morse Code Academy Educational Team" }],
  creator: "Morse Code Academy",
  publisher: "Morse Code Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://morsecodeacademy.com",
    siteName: "Morse Code Academy",
    title: "Morse Code Academy | Learn, Decode & Practice Morse Code",
    description:
      "Explore Morse code with an interactive translator, alphabet reference, practical lessons, quizzes, and hands-on exercises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morse Code Academy | Learn, Decode & Practice Morse Code",
    description:
      "Explore Morse code with an interactive translator, alphabet reference, practical lessons, quizzes, and hands-on exercises.",
  },
  alternates: {
    canonical: "https://morsecodeacademy.com",
  },
  verification: {
    google: "google83c1f76b5581dae8",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Morse Code Academy",
    url: "https://morsecodeacademy.com",
    description:
      "An educational platform for understanding, translating, decoding, and practicing International Morse code.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://morsecodeacademy.com/morse-code-alphabet?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Morse Code Academy Translator & Trainer",
    applicationCategory: "EducationalApplication",
    operatingSystem: "All modern web browsers",
    browserRequirements: "Requires JavaScript and HTML5 Web Audio API",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📡</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radio, Menu, X, ArrowRight, BookOpen, Volume2, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Translator", href: "/translator", badge: "Interactive" },
    { name: "Alphabet", href: "/morse-code-alphabet" },
    { name: "Learn", href: "/learn-morse-code" },
    { name: "Practice", href: "/practice", badge: "Game" },
    { name: "Quiz", href: "/morse-code-quiz" },
    { name: "History", href: "/morse-code-history" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-slate-950/50 backdrop-blur-sm border-b border-slate-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1"
            aria-label="Morse Code Academy Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                <span>MORSE CODE</span>
                <span className="text-sky-400 font-mono text-sm uppercase px-1.5 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">
                  ACADEMY
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 tracking-wider">
                <span className="text-emerald-400">·-·-·</span>
                <span>DECODE & MASTER</span>
                <span className="text-emerald-400">·-·-·</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative flex items-center gap-1.5 ${
                    isActive
                      ? "text-sky-400 bg-sky-950/50 border border-sky-800/40"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] uppercase font-mono px-1 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/translator"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-semibold text-sm hover:from-sky-400 hover:to-emerald-300 shadow-md shadow-sky-500/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>Try Translator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? "text-sky-400 bg-sky-950/60 border border-sky-800/50"
                    : "text-slate-200 hover:bg-slate-800"
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-xs uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/translator"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-bold text-center shadow-lg shadow-sky-500/20"
            >
              <span>Launch Live Translator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

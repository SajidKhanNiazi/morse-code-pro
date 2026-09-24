"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { morseAudio } from "@/lib/morseAudio";

interface SoundButtonProps {
  morse: string;
  wpm?: number;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function SoundButton({
  morse,
  wpm = 18,
  label,
  size = "md",
  className = "",
}: SoundButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isPlaying) {
      morseAudio.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    await morseAudio.playMorseSequence(
      morse,
      wpm,
      650,
      undefined,
      () => {
        setIsPlaying(false);
      }
    );
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-xs sm:text-sm gap-1.5",
    lg: "px-4 py-2 text-sm sm:text-base gap-2",
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-all border ${
        isPlaying
          ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/30"
          : "bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border-slate-700/60"
      } ${sizeClasses[size]} ${className}`}
      title={isPlaying ? "Stop audio" : "Play Morse audio"}
      aria-label={isPlaying ? "Stop audio" : `Play Morse sound for ${label || morse}`}
    >
      {isPlaying ? (
        <>
          <span className="flex items-center gap-0.5">
            <span className="w-1 h-3 bg-amber-400 rounded-full animate-bounce" />
            <span className="w-1 h-4 bg-amber-400 rounded-full animate-bounce [animation-delay:0.15s]" />
            <span className="w-1 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.3s]" />
          </span>
          {label && <span>Stop</span>}
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-sky-400" />
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
}

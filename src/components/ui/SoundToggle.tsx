"use client";

import { useState, useRef, useEffect } from "react";

export function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with your custom ocean waves sound
    audioRef.current = new Audio("/audio/ocean-waves.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Subtle background volume
    setIsLoaded(true);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay was prevented, that's okay
      });
    }
    setIsPlaying(!isPlaying);
  };

  if (!isLoaded) return null;

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-4 transition-all group"
      aria-label={isPlaying ? "Mute ocean sounds" : "Play ocean sounds"}
      title={isPlaying ? "Mute ocean sounds" : "Play ocean sounds"}
    >
      {isPlaying ? (
        // Sound on icon
        <svg
          className="w-6 h-6 text-[#d4af37]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ) : (
        // Sound off icon
        <svg
          className="w-6 h-6 text-gray-400 group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      )}
      <span className="absolute -top-10 right-0 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isPlaying ? "Mute" : "Ocean sounds"}
      </span>
    </button>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

interface AudioPlayerProps {
  children: ReactNode;
  className?: string;
  src?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function AudioPlayer({
  children,
  className = "",
  src,
  autoPlay = false,
  loop = false,
}: AudioPlayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <audio
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          controls
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <audio
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {children}
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

interface VideoPlayerProps {
  children: ReactNode;
  className?: string;
  src?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function VideoPlayer({
  children,
  className = "",
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
}: VideoPlayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {children}
    </div>
  );
}

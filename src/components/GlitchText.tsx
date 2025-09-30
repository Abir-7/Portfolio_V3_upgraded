"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlitchText({
  text,
  className = "",
  intensity = "medium",
}: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`";

  const intensitySettings = {
    low: { frequency: 3000, duration: 100, corruption: 0.1 },
    medium: { frequency: 2000, duration: 150, corruption: 0.2 },
    high: { frequency: 1000, duration: 200, corruption: 0.3 },
  };

  const settings = intensitySettings[intensity];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.7) {
        const corrupted = text
          .split("")
          .map((char) => {
            if (Math.random() < settings.corruption) {
              return glitchChars[
                Math.floor(Math.random() * glitchChars.length)
              ];
            }
            return char;
          })
          .join("");

        setGlitchedText(corrupted);

        setTimeout(() => {
          setGlitchedText(text);
        }, settings.duration);
      }
    }, settings.frequency);

    return () => clearInterval(interval);
  }, [text, settings]);

  return (
    <motion.span
      className={` ${className}`}
      data-text={text}
      transition={{
        duration: 0.1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {" "}
      <motion.span className="">{glitchedText}</motion.span>
    </motion.span>
  );
}

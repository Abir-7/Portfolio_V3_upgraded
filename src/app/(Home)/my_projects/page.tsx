"use client";

import { GlitchText } from "@/components/GlitchText";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Variants for the card animation (fade + scale on load only)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <div className="text-[var(--accent-foreground)] h-full font-sans flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="rounded-xl shadow-lg p-8 bg-[var(--card)] border border-[var(--border)]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg sm:text-xl opacity-90 italic">
            <GlitchText text="No featured projects yet — but exciting things are on the way!" />
          </p>
        </motion.div>
      </div>
    </div>
  );
}

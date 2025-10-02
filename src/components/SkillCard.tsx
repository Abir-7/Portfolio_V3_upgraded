"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState, ReactNode } from "react";
import { GlitchText } from "./GlitchText";

interface MatrixSkillCardProps {
  skill: string;
  status: string; // Active, Learning, etc.
  icon: ReactNode; // SVG or JSX element
  index: number;
}

export function MatrixSkillCard({
  skill,
  status,
  icon,
  index,
}: MatrixSkillCardProps) {
  const [hover, setHover] = useState(false);

  // 🎲 Random animation variants
  const variants = [
    { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    { hidden: { scale: 0.5, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { hidden: { rotate: -15, opacity: 0 }, visible: { rotate: 0, opacity: 1 } },
  ];

  // Pick random animation per card
  const randomVariant = variants[index % variants.length];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={randomVariant}
      transition={{
        duration: 0.7,
        delay: index * 0.5, // ⏳ stagger effect
        ease: "easeOut",
      }}
    >
      <div className="sm:max-w-80 sm:w-full">
        <Card
          className={`relative p-0 bg-[var(--card)] border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[var(--accent)]/30 backdrop-blur-sm transition-all duration-300 overflow-hidden group`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Header */}
          <div className="z-10 pb-3 pt-4 border-b border-[var(--border)] flex justify-center items-center">
            <h2 className="text-sm font-mono text-[var(--foreground)]">
              <GlitchText text={skill} />
            </h2>
          </div>

          {/* Icon */}
          <div className="z-10 flex justify-center ">
            <div className="w-20 text-[var(--accent-foreground)]">{icon}</div>
          </div>

          {/* Footer */}
          <div className="z-10 px-4 py-2 border-t border-[var(--border)] flex justify-between items-center">
            <span className="text-xs font-mono text-[var(--foreground)]">
              {"> STATUS:"}
            </span>
            <span className="text-xs font-mono text-[var(--accent-foreground)]">
              {status}
            </span>
          </div>

          {/* Hover Effect Border */}
          <div
            className={`absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300 ${
              hover ? "border-[var(--accent)] shadow-[var(--accent)]/30" : ""
            }`}
          />
        </Card>
      </div>
    </motion.div>
  );
}

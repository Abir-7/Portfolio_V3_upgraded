"use client";

import { GlitchText } from "@/components/GlitchText";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Experience {
  company: string;
  position: string;
  joined: string;
  status: string;
  description?: string[];
}

const experiences: Experience[] = [
  {
    company: "Join Venture AI",
    position: "Junior Backend Developer",
    joined: "January 21, 2025",
    status: "Working",
    description: [
      "Build and maintain backend services",
      "Collaborate with frontend developers for feature delivery",
    ],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // each card delayed
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delayChildren: 0.2, // after card animates, delay before bullets
      staggerChildren: 0.15, // bullets come one by one
    },
  },
};

const bullet: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ExperiencePage() {
  return (
    <motion.div
      className="text-[var(--foreground)] font-sans"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl shadow-lg p-4 border border-[var(--border)] bg-[var(--background)]"
            variants={card}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b border-[var(--border)] pb-2 flex items-center">
              {">"} <GlitchText text={exp.company} />
            </h2>
            <ul className="text-sm sm:text-base space-y-2 text-[var(--accent-foreground)]">
              <motion.li variants={bullet}>
                <span className="font-semibold">Position:</span> {exp.position}
              </motion.li>
              <motion.li variants={bullet}>
                <span className="font-semibold">Joined:</span> {exp.joined}
              </motion.li>
              <motion.li variants={bullet}>
                <span className="font-semibold">Status:</span> {exp.status}
              </motion.li>
              {exp.description && (
                <motion.li variants={bullet}>
                  <span className="font-semibold">Responsibilities:</span>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    {exp.description.map((desc, i) => (
                      <motion.li key={i} variants={bullet}>
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </motion.li>
              )}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

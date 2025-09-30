"use client";

import { GlitchText } from "@/components/GlitchText";
import React from "react";

interface Experience {
  company: string;
  position: string;
  joined: string;
  status: string;
  description?: string[]; // optional bullet points
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

export default function ExperiencePage() {
  return (
    <div className="text-[var(--foreground)] font-sans">
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="rounded-xl shadow-lg  ">
            <h2 className="text-2xl font-semibold mb-4 border-b border-[var(--border)] pb-2">
              {">"} <GlitchText text={exp.company} />
            </h2>
            <ul className="text-sm sm:text-base space-y-2 text-[var(--accent-foreground)]">
              <li>
                <span className="font-semibold">Position:</span> {exp.position}
              </li>
              <li>
                <span className="font-semibold">Joined:</span> {exp.joined}
              </li>
              <li>
                <span className="font-semibold">Status:</span> {exp.status}
              </li>
              {exp.description && (
                <li>
                  <span className="font-semibold">Responsibilities:</span>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

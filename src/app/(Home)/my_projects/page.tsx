import { GlitchText } from "@/components/GlitchText";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="text-[var(--accent-foreground)] h-full font-sans flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-xl shadow-lg p-8 bg-[var(--card)] border border-[var(--border)]">
          <p className="text-lg sm:text-xl opacity-90 italic">
            <GlitchText text="No featured projects yet — but exciting things are on the way!" />
          </p>
        </div>
      </div>
    </div>
  );
}

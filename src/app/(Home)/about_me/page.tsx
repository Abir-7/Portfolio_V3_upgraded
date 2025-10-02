"use client";

import { GlitchText } from "@/components/GlitchText";
import React, { useEffect } from "react";

import Typewriter from "typewriter-effect";

export default function AbirResumePage() {
  const [displayedContent, setDisplayedContent] = React.useState("");

  useEffect(() => {
    const htmlContent = `
  <div
    class="min-h-[calc(100vh-245px)] font-sans text-[var(--foreground)]"
    style="background-color: transparent"
  >
    <div class="mx-auto h-full p-4 backdrop-blur-sm">
      <header class="mb-6">
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Md. Tazwarul Islam Abir
        </h1>
        <p class="mt-2 text-sm sm:text-base text-[var(--accent-foreground)]">
          Passionate and motivated junior Full stack developer committed to
          delivering high-quality code and exceptional user experiences.
          Skilled with React, Express, MongoDB, and Node.js.
        </p>
      </header>

      <section class="mb-6 rounded-xl shadow-lg bg-[var(--card)]/80 backdrop-blur-sm">
        <h2 class="text-2xl font-semibold mb-3 border-b border-[var(--primary)]/40 pb-2">
          Profile
        </h2>
        <p class="text-sm sm:text-base leading-relaxed text-[var(--accent-foreground)]">
          I aim to utilize my skills in React, Next.js, Node.js, Express,
          MongoDB, PostgreSQL, Drizzle ORM, TypeScript, JavaScript, Tailwind
          CSS, and ShadCN UI to drive impactful results and contribute to the
          success of a team. Eager to learn, collaborate, and grow in a
          dynamic environment.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold border-b border-[var(--primary)]/40 pb-2">
          Education
        </h2>

        <div class="mt-3 grid gap-4">
          <div class="text-[var(--accent-foreground)]">
            <h3 class="font-semibold">Bachelor of Science (B.Sc) — Computer Science &amp; Engineering (CSE):</h3>
            <p class="text-sm text-[var(--accent-foreground)]">
              Institute: College of Business Science &amp; Technology (National University Affiliated), Mymensingh
            </p>
            <p class="text-sm">CGPA: 3.05</p>
          </div>

          <div class="text-[var(--accent-foreground)]">
            <h3 class="font-semibold">Higher Secondary School Certificate (HSC):</h3>
            <p class="text-sm">Institute: Royal Media College, Mymensingh-RMC</p>
            <p class="text-sm">Subject: Science — GPA: 4.42</p>
          </div>

          <div class="text-[var(--accent-foreground)]">
            <h3 class="font-semibold">Secondary School Certificate (SSC):</h3>
            <p class="text-sm">Institute: Mymensingh Laboratory High School</p>
            <p class="text-sm">Subject: Science — GPA: 3.81</p>
          </div>
        </div>
      </section>

      <section class="mb-4">
        <h2 class="text-2xl font-semibold border-b border-[var(--primary)]/40 pb-2">
          Hobbies
        </h2>
        <ul class="mt-2 text-sm list-disc list-inside text-[var(--accent-foreground)]">
          <li>PC gaming</li>
          <li>Nature photography</li>
          <li>Playing outdoor games like football and cricket</li>
        </ul>
      </section>
    </div>
  </div>
`;
    setDisplayedContent(htmlContent);
  }, []);

  return (
    <div>
      <Typewriter
        options={{ delay: 0.5, cursor: "" }}
        onInit={(typewriter) => {
          typewriter.typeString(displayedContent).start();
        }}
      />
      {/* Or use dangerouslySetInnerHTML for static HTML */}
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
    </div>
  );
}

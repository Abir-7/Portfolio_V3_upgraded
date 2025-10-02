"use client";

import { GlitchText } from "@/components/GlitchText";
import React from "react";

export default function AbirResumePage() {
  return (
    <div
      className="min-h-[calc(100vh-245px)] font-sans text-[var(--foreground)]"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="mx-auto h-full p-4 backdrop-blur-sm">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Md. Tazwarul Islam Abir
          </h1>
          <p className="mt-2 text-sm sm:text-base opacity-90  text-[var(--accent-foreground)]">
            Passionate and motivated junior MERN stack developer committed to
            delivering high-quality code and exceptional user experiences.
            Skilled with React, Express, MongoDB, and Node.js.
          </p>
        </header>

        <section className="mb-12 rounded-xl shadow-lg bg-[var(--card)]/80 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-3 border-b border-[var(--primary)]/40 pb-2">
            <GlitchText text="Profile" />
          </h2>
          <p className="text-sm sm:text-base leading-relaxed opacity-95  text-[var(--accent-foreground)]">
            I aim to utilize my skills in React, Next.js, Node.js, Express,
            MongoDB, PostgreSQL, Drizzle ORM, TypeScript, JavaScript, Tailwind
            CSS, and ShadCN UI to drive impactful results and contribute to the
            success of a team. Eager to learn, collaborate, and grow in a
            dynamic environment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-[var(--primary)]/40 pb-2">
            <GlitchText text="Education" />
          </h2>

          <div className="mt-3 grid gap-4">
            <div className=" text-[var(--accent-foreground)]">
              <h3 className="font-semibold  ">
                {">"} Bachelor of Science (B.Sc) — Computer Science &amp;
                Engineering (CSE):
              </h3>
              <p className="text-sm   text-[var(--accent-foreground)]">
                Institute: College of Business Science &amp; Technology
                (National University Affiliated), Mymensingh
              </p>
              <p className="text-sm">CGPA: 3.05</p>
            </div>

            <div className="  text-[var(--accent-foreground)]">
              <h3 className="font-semibold">
                {">"} Higher Secondary School Certificate (HSC):
              </h3>
              <p className="text-sm ">
                Institute: Royal Media College, Mymensingh-RMC
              </p>
              <p className="text-sm ">Subject: Science — GPA: 4.42</p>
            </div>

            <div className=" text-[var(--accent-foreground)]">
              <h3 className="font-semibold">
                {">"} Secondary School Certificate (SSC):
              </h3>
              <p className="text-sm ">
                Institute: Mymensingh Laboratory High School
              </p>
              <p className="text-sm ">Subject: Science — GPA: 3.81</p>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold border-b border-[var(--primary)]/40 pb-2">
            <GlitchText text="Hobbies" />
          </h2>
          <ul className="mt-2 text-sm list-disc list-inside text-[var(--accent-foreground)]">
            <li>PC gaming</li>
            <li>Nature photography</li>
            <li>Playing outdoor games like football and cricket</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

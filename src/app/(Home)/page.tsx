/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GlitchText } from "@/components/GlitchText";

// Import gifs
import gif from "@/assets/gif.gif"; // green
import gif2 from "@/assets/gif2.gif"; // blue
import gif3 from "@/assets/gif3.gif"; // black
import { Button } from "@/components/ui/button";

const Page = () => {
  const [theme, setTheme] = useState("matrix-black"); // default

  // Watch <html data-matrix-theme="">
  useEffect(() => {
    const html = document.documentElement;

    // Initial read
    const current = html.getAttribute("data-matrix-theme");
    if (current) setTheme(current);

    // MutationObserver for live changes
    const observer = new MutationObserver(() => {
      const newTheme = html.getAttribute("data-matrix-theme");
      if (newTheme) setTheme(newTheme);
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["data-matrix-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Map theme → gif
  const themeGifMap: Record<string, any> = {
    "matrix-green": gif,
    "matrix-blue": gif3,
    "matrix-black": gif2,
  };

  const currentGif = themeGifMap[theme] ?? gif2;

  return (
    <div className="relative flex-1 container mx-auto gap-10 h-full w-full flex flex-col lg:flex-row justify-between items-center lg:min-h-[calc(100vh-245px)] font-sans text-[var(--foreground)] ">
      {/* Left Section */}
      <div className="space-y-4 sm:space-y-6 xl:space-y-8 text-center lg:text-left">
        <div className="text-5xl  sm:text-6xl xl:text-8xl font-bold ">
          <GlitchText intensity="high" text="Welcome" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium">
          It&apos;s Me,{" "}
          <span className="font-bold ">Md. Tazwarul Islam Abir</span>
        </h2>
        <h2 className="text-lg sm:text-2xl md:text-2xl xl:text-3xl flex items-center justify-center lg:justify-start gap-2">
          <span className="text-[var(--forground)]">—</span>
          <GlitchText text="FullStack Developer" />
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-auto flex justify-center">
        <div className="space-y-4 w-full ">
          <Image
            src={currentGif}
            className="w-full md:w-96 xl:w-[28rem] rounded-md shadow-lg border border-[var(--border)]"
            height={400}
            width={400}
            alt="Md. Tazwarul Islam Abir"
            priority
          />
          <button
            className="
      
        border-2 border-[var(--forground)]
        bg-[var(--forground)]/10
        hover:bg-[var(--primary)]/20
        hover:shadow-[0_0_12px_var(--primary)]
        transition-all duration-300
        px-4 rounded-md py-1  w-full
      "
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

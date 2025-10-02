/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { GlitchText } from "@/components/GlitchText";

// Import gifs
import gif from "@/assets/gif.webp"; // green
import gif2 from "@/assets/gif2.webp"; // blue
import gif3 from "@/assets/gif3.webp"; // black

import "@/app/global.scss";

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
    <div className="relative container mx-auto gap-8 h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[calc(100vh-245px)] font-sans text-[var(--foreground)] px-4 sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="space-y-4 sm:space-y-6 xl:space-y-8 text-center lg:text-left order-2 lg:order-1">
        <div className="text-5xl sm:text-6xl xl:text-8xl font-bold">
          <GlitchText intensity="high" text="Welcome" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium">
          It&apos;s Me,{" "}
          <span className="font-bold">Md. Tazwarul Islam Abir</span>
        </h2>
        <h2 className="text-lg sm:text-2xl md:text-2xl xl:text-3xl flex items-center justify-center lg:justify-start gap-2">
          <span className="text-[var(--forground)]">—</span>
          <GlitchText text="FullStack Developer" />
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-full flex justify-center order-1 lg:order-2">
        <div
          className="glitch w-full max-w-lg aspect-[4/3] opacity-80" // aspect-video for 16:9 ratio
          style={{
            backgroundImage: `url(${currentGif.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Page;

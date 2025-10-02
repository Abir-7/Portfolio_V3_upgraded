/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { GlitchText } from "@/components/GlitchText";
import { motion } from "framer-motion";

// Import gifs
import gif from "@/assets/gif.webp"; // green
import gif2 from "@/assets/gif2.webp"; // blue
import gif3 from "@/assets/gif3.webp"; // black

import "@/app/global.scss";

const Page = () => {
  const [theme, setTheme] = useState("matrix-black"); // default

  useEffect(() => {
    const html = document.documentElement;
    const current = html.getAttribute("data-matrix-theme");
    if (current) setTheme(current);

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

  const themeGifMap: Record<string, any> = {
    "matrix-green": gif,
    "matrix-blue": gif3,
    "matrix-black": gif2,
  };
  const currentGif = themeGifMap[theme] ?? gif2;

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const gifVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className="relative container mx-auto gap-8 h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[calc(100vh-245px)] font-sans text-[var(--foreground)] px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section */}
      <motion.div
        className="space-y-4 sm:space-y-6 xl:space-y-8 text-center lg:text-left order-2 lg:order-1"
        variants={containerVariants}
      >
        <motion.div
          className="text-5xl sm:text-6xl xl:text-8xl font-bold"
          variants={textVariants}
        >
          <GlitchText intensity="high" text="Welcome" />
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium"
          variants={textVariants}
        >
          It&apos;s Me,{" "}
          <span className="font-bold">Md. Tazwarul Islam Abir</span>
        </motion.h2>

        <motion.h2
          className="text-lg sm:text-2xl md:text-2xl xl:text-3xl flex items-center justify-center lg:justify-start gap-2"
          variants={textVariants}
        >
          <span className="text-[var(--forground)]">—</span>
          <GlitchText text="FullStack Developer" />
        </motion.h2>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full flex justify-center order-1 lg:order-2"
        variants={gifVariants}
      >
        <div
          className="glitch w-full max-w-lg aspect-[4/3] rounded-xl"
          style={{
            backgroundImage: `url(${currentGif.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </motion.div>
    </motion.div>
  );
};

export default Page;

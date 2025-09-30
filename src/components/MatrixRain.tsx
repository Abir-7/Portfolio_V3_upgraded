"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars =
      "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    // eslint-disable-next-line prefer-const
    let columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) drops[i] = Math.random() * canvas.height;

    const getThemeColor = () => {
      const root = document.documentElement;
      return getComputedStyle(root).getPropertyValue("--accent") || "#05df72";
    };

    const draw = () => {
      const themeColor = getThemeColor().trim();

      // Slightly more transparent background to keep trails visible
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brightness variation for each drop
        const alpha = 0.5 + Math.random() * 0.5; // 0.5–1
        ctx.fillStyle = themeColor;
        ctx.globalAlpha = alpha;
        ctx.fillText(char, x, y);

        drops[i]++;
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      }
      ctx.globalAlpha = 1; // reset alpha
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
}

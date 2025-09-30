"use client";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";
import { GlitchText } from "@/components/GlitchText";
import TerminalClock from "@/components/TerminalClock";
import TerminalFooter from "@/components/TerminalFooter";
import { MatrixThemeSwitcher } from "@/components/matrix-theme-switcher";
import { MatrixRain } from "@/components/MatrixRain";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const path = usePathname();

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[var(--background)] sm:p-4">
      <div className="relative flex flex-col w-full h-full sm:rounded-2xl border border-[var(--border)] shadow-2xl overflow-hidden">
        {/* Glowing border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] blur-sm -z-10" />

        {/* Terminal Header */}
        <div className="flex items-center gap-3 px-4 md:px-6 py-4 border-b border-[var(--border)] z-20 relative">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <div className="w-4 h-4 rounded-full bg-yellow-500" />
            <div className="w-4 h-4 rounded-full bg-green-500" />
          </div>

          <div className="ml-2 font-mono text-[var(--foreground)] text-base font-semibold">
            Abir&apos;s <GlitchText intensity="low" text="Portfolio" />
          </div>

          <div className="ml-auto flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2 text-[var(--foreground)]">
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span>
                <GlitchText intensity="low" text="SECURE" />
              </span>
            </div>
            <TerminalClock /> <MatrixThemeSwitcher />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="relative flex-1 h-full font-mono  text-[var(--foreground)] text-base overflow-auto">
          {/* Matrix background */}
          <MatrixRain />

          {/* Terminal content */}
          <div
            className={`absolute bg-transparent inset-0  ${
              path === "/" ? "backdrop-blur-[0.9px]" : "backdrop-blur-[2px]"
            }`}
          >
            <div className="p-4">{children}</div>
          </div>
        </div>

        {/* Footer */}
        <TerminalFooter />
      </div>
    </div>
  );
};

export default Layout;

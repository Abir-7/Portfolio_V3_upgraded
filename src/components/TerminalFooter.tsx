"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { GlitchText } from "./GlitchText";
import HeartRate from "./HeartRate";

interface TerminalFooterProps {
  buttons?: { label: string; href: string }[];
}

const TerminalFooter: React.FC<TerminalFooterProps> = ({
  buttons = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about_me" },
    { label: "My Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
    { label: "My Projects", href: "/my_projects" },
    { label: "Contact Me", href: "/contact_me" },
  ],
}) => {
  const path = usePathname();

  return (
    <div className="relative flex items-center justify-between px-4 sm:px-6 py-4 bg-[var(--card)] border-t border-[var(--border)] backdrop-blur-sm">
      {/* Buttons group (left) */}
      <div className="grid w-full sm:w-auto gap-3 sm:flex flex-row sm:flex-wrap sm:gap-4 grid-cols-2">
        {buttons.map((btn, index) => {
          const isActive = path === btn.href;

          return (
            <Link
              key={btn.label}
              href={btn.href}
              className={`group px-4 sm:px-6 py-1 font-mono text-sm rounded-lg border transition-all duration-300 relative overflow-hidden
                ${
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)]/15 shadow-[var(--primary)]/20"
                    : "border-[var(--primary)]/40 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/15 hover:border-[var(--primary)] hover:shadow-[var(--primary)]/20"
                }`}
              style={{
                animation: `slideUp 0.5s ease-out ${(index + 1) * 0.1}s both`,
              }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10
                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
              />
              <span className={`relative text-sm text-[var(--foreground)]`}>
                <GlitchText intensity="low" text={btn.label} />
              </span>
            </Link>
          );
        })}
      </div>

      {/* HeartRate (right) */}
      <div className="hidden sm:block">
        <HeartRate />
      </div>
    </div>
  );
};

export default TerminalFooter;

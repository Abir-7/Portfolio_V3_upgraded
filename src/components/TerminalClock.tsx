"use client";

import { useState, useEffect } from "react";

const TerminalClock = () => {
  const [time, setTime] = useState<string>("");

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    setTime(getCurrentTime());
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
      {time}
    </span>
  );
};

export default TerminalClock;

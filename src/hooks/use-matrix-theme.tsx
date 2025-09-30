"use client";

import { useEffect, useState } from "react";

type MatrixTheme = "matrix-black" | "matrix-green" | "matrix-blue";

export function useMatrixTheme() {
  const [theme, setTheme] = useState<MatrixTheme>("matrix-black");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("matrix-theme") as MatrixTheme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-matrix-theme", savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: MatrixTheme) => {
    setTheme(newTheme);
    localStorage.setItem("matrix-theme", newTheme);
    document.documentElement.setAttribute("data-matrix-theme", newTheme);
  };

  return { theme, changeTheme };
}

"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMatrixTheme } from "@/hooks/use-matrix-theme";
import { Monitor } from "lucide-react";

export function MatrixThemeSwitcher() {
  const { theme, changeTheme } = useMatrixTheme();

  const themes = [
    { value: "matrix-black", label: "Matrix Black", color: "bg-black" },
    { value: "matrix-green", label: "Matrix Green", color: "bg-green-500" },
    { value: "matrix-blue", label: "Matrix Blue", color: "bg-blue-500" },
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Monitor className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch Matrix theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => changeTheme(t.value)}
            className="flex items-center gap-2"
          >
            <div className={`h-4 w-4 rounded-full ${t.color}`} />
            {t.label}
            {theme === t.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

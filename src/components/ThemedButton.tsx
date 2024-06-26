"use client";
import PhMoonFill from "@/src/components/icons/moon";
import PhSunBold from "@/src/components/icons/sun";
import { useTheme } from "next-themes";

export function ThemedButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <PhMoonFill /> : <PhSunBold />}
    </div>
  );
}

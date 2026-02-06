import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeButton() {
  const [dark, setDark] = useState(null); // inicialmente null

  useEffect(() => {
    // 1️⃣ Ver si hay preferencia guardada
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDark(stored === "dark");
    } else {
      // 2️⃣ Si no hay, usar el modo del sistema
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDark(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (dark === null) return; // todavía no sabemos
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  if (dark === null) return null; // opcional: evita render prematuro

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        text-xl
        transition-all duration-300
        hover:scale-110
        hover:text-yellow-500
        dark:hover:text-yellow-500
        cursor-pointer
        focus:outline-none
      "
      aria-label="Toggle theme"
    >
      {dark ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default DarkModeButton;

import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeButton({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl transition-all duration-300 hover:scale-110 hover:text-yellow-400 cursor-pointer focus:outline-none"
      aria-label="Toggle theme"
    >
      {darkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
}

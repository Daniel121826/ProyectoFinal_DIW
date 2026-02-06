import { useState, useEffect } from "react";

function DarkModeButton() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-2 py-1 border border-white bg-black text-white hover:bg-gray-800 transition-colors duration-200 text-sm"
    >
      {dark ? "☀️ Modo claro" : "🌙 Modo oscuro"}
    </button>
  );
}

export default DarkModeButton;

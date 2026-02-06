import "./App.css";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import ContactSection from "./componentes/ContactSection";
import CardsSection from "./componentes/CardsSection";
import CarruselSection from "./componentes/CarruselSection";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    // Obtener preferencia guardada o del sistema
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDarkMode(stored === "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  if (darkMode === null) return null;
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ContactSection />
      <CardsSection />
      <CarruselSection />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;

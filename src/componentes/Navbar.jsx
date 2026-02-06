import { useState } from "react";
import logo1 from "../assets/logo_brocha.png";
import logo2 from "../assets/logo_texto.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-black shadow-md text-blue-500">
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src={logo1}
            alt="Logo 1"
            className="h-12 w-auto cursor-pointer object-contain"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-12 w-auto cursor-pointer object-contain"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-2xl focus:outline-none transition-colors duration-200 ${
              isOpen
                ? "hover:text-red-500 text-white"
                : "hover:text-blue-500 text-white"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contáctanos</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 bg-black text-base font-medium md:hidden py-4">
          <li>
            <a href="#inicio" onClick={toggleMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={toggleMenu}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#nosotros" onClick={toggleMenu}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={toggleMenu}>
              Contáctanos
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

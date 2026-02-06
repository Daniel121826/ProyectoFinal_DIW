import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import DarkModeButton from "./DarkModeButton";

export default function Footer({ setNavbarDarkMode }) {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="w-[90%] mx-auto flex items-center">
        <div className="flex-1 md:text-left text-sm md:text-base">
          &copy; {new Date().getFullYear()} <br /> Gestor de Usuarios. <br />
          Todos los derechos reservados. <br />
          <DarkModeButton />
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-24 object-cover rounded-full border-2 border-white"
          />
        </div>

        <div className="flex-1 flex justify-center md:justify-end gap-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

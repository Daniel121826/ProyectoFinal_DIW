import { useState } from "react";
import ContactButton from "./Button";

export default function ContactForm({ darkMode }) {
  const formData = useState({
    company: "",
    email: "",
    phone: "",
    darkMode,
  });

  return (
    <form
      className={`w-full max-w-md mx-auto p-6 rounded-lg shadow-md 
    ${darkMode ? "bg-card-dark text-gray-100" : "bg-neutral-white text-gray-800"}`}
    >
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium mb-1">
          Nombre de la empresa
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          placeholder="Empresa S.A."
          className={`
    w-full border border-gray-300 rounded-md p-2
    focus:outline-none focus:ring-2 focus:ring-primario-default
    text-black placeholder-card-placeholder
    ${darkMode ? "bg-card-input text-white placeholder-card-placeholder border-gray-600" : ""}
  `}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="correo@empresa.com"
          className={`
    w-full border border-gray-300 rounded-md p-2
    focus:outline-none focus:ring-2 focus:ring-primario-default
    text-black placeholder-card-placeholder
    ${darkMode ? "bg-card-input text-white placeholder-card-placeholder border-gray-600" : ""}
  `}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="+34 600 000 000"
          className={`
    w-full border border-gray-300 rounded-md p-2
    focus:outline-none focus:ring-2 focus:ring-primario-default
    text-neutral-black placeholder-card-placeholder
    ${darkMode ? "bg-card-input text-white placeholder-card-placeholder border-gray-600" : ""}
  `}
        />
      </div>

      <ContactButton
        text="Contactanos"
        className="bg-primario-default hover:bg-primario-hover"
      />
    </form>
  );
}

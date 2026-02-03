import { useState } from "react";
import ContactButton from "./Button";

export default function ContactForm() {
  const formData = useState({
    company: "",
    email: "",
    phone: ""
  });

  return (
    <form className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium mb-1 text-gray-700">
          Nombre de la empresa
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          placeholder="Empresa S.A."
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="correo@empresa.com"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="+34 600 000 000"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <ContactButton text="Contactanos" className="bg-blue-600 hover:bg-blue-700" />
    </form>
  );
}

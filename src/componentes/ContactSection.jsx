import ContactForm from "./ContactForm";
import background from "../assets/background.png";

export default function ContactSection() {
  return (
    <div
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-[90%] mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 p-8 rounded-lg">
        
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bienvenido Artista</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Aidan Creative es la empresa numero 1 en servicios creativos para empresas. Nos encargaremos de dar color, vida y creatividad a tu negocio a través de nuestros servicios de diseño gráfico, marketing digital y desarrollo web.
            <br /><br />
            Contáctanos y descubre cómo podemos colaborar para que tu empresa alcance el siguiente nivel.
          </p>
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}

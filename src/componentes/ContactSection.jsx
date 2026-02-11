import ContactForm from "./ContactForm";
import background from "../assets/background.png";

export default function ContactSection({ darkMode }) {
  return (
    <div
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-neutral-black/50"></div>

      <div className="relative w-[90%] mx-auto flex flex-col md:flex-row text-start gap-12 p-4">
        <div className="flex-1 text-neutral-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:text-start text-center">
            Bienvenido Artista
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Aidan Creative es la empresa numero uno en servicios creativos para
            empresas. Nos encargaremos de dar color, vida y creatividad a tu
            negocio a través de nuestros servicios de diseño gráfico, marketing
            digital y desarrollo web.
            <br />
            <br />
            Contáctanos y descubre cómo podemos colaborar para que tu empresa
            alcance el siguiente nivel.
          </p>
        </div>

        <div className="flex-1">
          <ContactForm darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

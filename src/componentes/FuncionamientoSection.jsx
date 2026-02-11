import ContactButton from "./Button";

export default function FuncionamientoSection({ darkMode }) {
  return (
    <section className={darkMode ? "px-6 py-16 bg-card-section-dark text-neutral-white" : "px-6 py-16 bg-card-section-light text-neutral-black"}>
      <div className="flex flex-col md:flex-row gap-12 items-stretch max-w-6xl mx-auto">
        <div className="flex-1">
          <div className={`p-10 rounded-2xl shadow-lg h-full w-full ${darkMode ? "bg-card-dark text-neutral-white" : "bg-neutral-white text-neutral-black"}`}>
            <h3 className="text-xl font-semibold mb-4">
              Creamos proyectos como si fueran lienzos
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Cada proyecto empieza en blanco, como un amanecer tranquilo sobre
              el mar. Pintamos ideas que flotan libres, colores que susurran
              historias y detalles que bailan al ritmo de la inspiración. Aquí
              no solo hacemos productos digitales, creamos pequeñas aventuras
              que despiertan sonrisas y curiosidad.
            </p>
            <p className="text-sm leading-relaxed">
              Nos dejamos llevar por la energía del momento, mezclando
              creatividad con un toque de locura positiva. Cada línea de código,
              cada diseño, es un paso más hacia un mundo más bello y armonioso.
              Respira, imagina, y acompáñanos en este viaje de colores y sueños.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg font-semibold mb-4">
            Así damos forma a cada proyecto
          </h4>

          {[
            "Escuchamos la idea y entendemos qué quieres contar.",
            "Bocetamos, probamos y manchamos hasta que encaja.",
            "Construimos con mimo, cuidando cada detalle.",
            "Pulimos y entregamos algo que realmente destaca.",
            "Celebramos el proyecto juntos, dejando que la creatividad fluya siempre.",
          ].map((text, index) => (
            <div
              key={index}
              className={`p-4 rounded shadow flex items-start gap-3 ${darkMode ? "bg-card-dark text-neutral-white" : "bg-neutral-white text-neutral-black"}`}
            >
              <span className={`font-bold ${darkMode ? "text-primario-hover" : "text-primario-default"}`}>
                {String(index + 1).padStart(2, "0")}.
              </span>
              <p>{text}</p>
            </div>
          ))}

          <div className="mt-auto">
            <ContactButton
              text="Ver mas"
              className={`w-full ${darkMode ? "bg-primario-default hover:bg-primario-hover text-white" : "bg-primario-light hover:bg-primario-default text-neutral-white"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

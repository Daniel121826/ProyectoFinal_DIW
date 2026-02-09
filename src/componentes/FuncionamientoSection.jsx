import { useEffect } from "react";

export default function FuncionamientoSection({ darkMode }) {
  // Cambiar el fondo del body según darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-gray-100", "text-gray-800");
    } else {
      document.body.classList.add("bg-gray-100", "text-gray-800");
      document.body.classList.remove("bg-gray-900", "text-white");
    }

    // Limpieza cuando el componente se desmonte
    return () => {
      document.body.classList.remove("bg-gray-900", "text-white", "bg-gray-50", "text-gray-800");
    };
  }, [darkMode]);

  return (
    <section className="px-6 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-stretch max-w-6xl mx-auto">
        {/* Columna izquierda */}
        <div className="flex-1">
          <div className={`p-10 rounded-2xl shadow-lg h-full w-full ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"}`}>
            <h3 className="text-xl font-semibold mb-4">
              Creamos proyectos como si fueran lienzos
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Cada proyecto empieza en blanco, como un amanecer tranquilo sobre el mar. 
              Pintamos ideas que flotan libres, colores que susurran historias y detalles 
              que bailan al ritmo de la inspiración. Aquí no solo hacemos productos digitales, 
              creamos pequeñas aventuras que despiertan sonrisas y curiosidad.
            </p>
            <p className="text-sm leading-relaxed">
              Nos dejamos llevar por la energía del momento, mezclando creatividad con un 
              toque de locura positiva. Cada línea de código, cada diseño, es un paso más 
              hacia un mundo más bello y armonioso. Respira, imagina, y acompáñanos en 
              este viaje de colores y sueños.
            </p>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg font-semibold mb-4">Así damos forma a cada proyecto</h4>

          {[
            "Escuchamos la idea y entendemos qué quieres contar.",
            "Bocetamos, probamos y manchamos hasta que encaja.",
            "Construimos con mimo, cuidando cada detalle.",
            "Pulimos y entregamos algo que realmente destaca.",
            "Celebramos el proyecto juntos, dejando que la creatividad fluya siempre.",
          ].map((text, index) => (
            <div
              key={index}
              className={`p-4 rounded shadow flex items-start gap-3 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"}`}
            >
              <span className={`font-bold ${darkMode ? "text-blue-400" : "text-blue-500"}`}>
                {String(index + 1).padStart(2, "0")}.
              </span>
              <p>{text}</p>
            </div>
          ))}

          <div className="mt-auto">
            <button
              className={`font-semibold px-6 py-2 rounded transition w-full ${
                darkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-400 text-white hover:bg-blue-500"
              }`}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

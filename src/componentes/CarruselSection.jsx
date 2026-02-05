import { useState, useEffect } from "react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import { FaStar, FaSmile, FaThumbsUp } from "react-icons/fa";

const backgrounds = [bg1, bg2, bg3];

export default function ClientsSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // cambia cada 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Carrusel horizontal */}
      <div className="absolute inset-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentBg * 100}%)` }}>
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 w-full mx-auto h-full flex flex-col justify-center items-center text-center text-white gap-8">
        <h1 className="text-6xl md:text-5xl font-bold">LO QUE DICEN NUESTROS CLIENTES</h1>
        <p className="text-base md:text-lg max-w-2xl">
          Nuestros clientes valoran nuestros proyectos por la calidad, rapidez y creatividad.  
          Aquí algunos datos que muestran su satisfacción:
        </p>

        <div className="flex md:flex-row gap-8 mt-6 justify-between w-full max-w-4xl">
          <div className="flex flex-col items-center gap-2">
            <FaStar className="text-yellow-400 text-4xl" />
            <span className="font-bold text-xl">97%</span>
            <p className="text-sm">Nos califican como sobresaliente</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaSmile className="text-green-400 text-4xl" />
            <span className="font-bold text-xl">92%</span>
            <p className="text-sm">Satisfechos con nuestro servicio</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaThumbsUp className="text-blue-400 text-4xl" />
            <span className="font-bold text-xl">88%</span>
            <p className="text-sm">Recomiendan nuestros proyectos</p>
          </div>
        </div>
      </div>
    </div>
  );
}


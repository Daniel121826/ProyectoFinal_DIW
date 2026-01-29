import logo1 from "../assets/logo_brocha.png";
import logo2 from "../assets/logo_texto.png"; // segunda imagen

export default function Navbar() {
  return (
    <nav className="w-full bg-black shadow-md">
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        
        {/* Logos */}
        <div className="flex items-center gap-4">
          <img
            src={logo1}
            alt="Logo 1"
            className="h-18 w-auto cursor-pointer object-contain"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-18 w-auto cursor-pointer object-contain"
          />
        </div>

        {/* Links */}
        <ul className="flex items-center gap-8 text-base font-medium text-blue-500">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contáctanos</a></li>
        </ul>

      </div>
    </nav>
  );
}



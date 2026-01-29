export default function Navbar() {
  return (
    <nav className="bg-btn-primary-default text-text-default w-full py-navbar-y text-tiny-navbar mb-bottom-navbar">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo / Nombre */}
        <span className="text-2xl">Gestor de Usuarios</span>
        
        {/* Enlaces de navegación */}
        <ul className="flex list-none">
          <li>
            <a
              href="#"
              className="text-text-default no-underline hover:text-text-disabled"
            >
              Inicio
            </a>
          </li>
          <li className="ml-left-default">
            <a
              href="#"
              className="text-text-default no-underline hover:text-text-disabled"
            >
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
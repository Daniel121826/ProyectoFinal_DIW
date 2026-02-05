import Card from "./Card";
import smallImage1 from "../assets/servicio1.png";
import smallImage2 from "../assets/servicio2.png";
import smallImage3 from "../assets/servicio3.png";
import smallImage4 from "../assets/servicio4.png";
import toolsVideo from "../assets/AidanCreative.mp4";

export default function ToolsSection() {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-8">

        {/* Card grande izquierda */}
        <div className="flex-1">
          <Card
            title="Nuestras Herramientas"
            subtitle="Todo lo que necesitas para potenciar tu negocio"
            className="h-full"
          >
            <p className="text-gray-700 mt-2">
              Ofrecemos una suite completa de herramientas para diseñar, analizar y mejorar cada aspecto de tu proyecto. Desde marketing digital hasta gestión de contenido y análisis de datos, tenemos todo lo que tu empresa necesita.
            </p>

             <p className="text-gray-700 mt-2">
              Descubre más sobre nostros, nuestras herramientas y cómo podemos ayudarte a alcanzar tus objetivos empresariales. ¡Estamos aquí para apoyarte en cada paso del camino!
            </p>
            <div className="mt-4 w-full">
              <video
                src={toolsVideo}
                controls
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </Card>
        </div>

        {/* Cards pequeñas derecha */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="Diseño Gráfico"
            image={smallImage1}
          >
            <p className="text-gray-700 text-sm mt-1">
              Crea diseños profesionales y atractivos para tus campañas y redes sociales.
            </p>
          </Card>

          <Card
            title="Marketing Digital"
            image={smallImage2}
          >
            <p className="text-gray-700 text-sm mt-1">
              Optimiza tu presencia online y llega a tu público objetivo de manera efectiva.
            </p>
          </Card>

          <Card
            title="Desarrollo Web"
            image={smallImage3}
          >
            <p className="text-gray-700 text-sm mt-1">
              Diseña y desarrolla páginas web modernas, responsivas y optimizadas.
            </p>
          </Card>

          <Card
            title="Analítica de Datos"
            image={smallImage4}
          >
            <p className="text-gray-700 text-sm mt-1">
              Analiza el rendimiento de tu empresa y toma decisiones basadas en datos.
            </p>
          </Card>
        </div>

      </div>
    </div>
  );
}


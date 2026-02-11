# Proyecto: AidanCreative

## Descripción del proyecto

Este proyecto esta basado en una empresa dedicada a la creación de paginas web de otras empresas. Incluye un diseño moderno, responsive y adaptable al modo claro y oscuro.  
Se han implementado varios componentes reutilizables como `Navbar`, `Footer`, `Cards` y un `DarkModeButton` que permite alternar entre los modos claro y oscuro, con persistencia en `localStorage`.

## Capturas de pantalla

### Modo Claro

![Home Modo Claro](src/assets/captura-claro.png)

### Modo Oscuro

![Home Modo Oscuro](src/assets/captura-oscuro.png)

## Sistema de diseño

- **Tipografía**: Uso de clases Tailwind predeterminadas, con tamaños responsive.
- **Colores**: Variables de Tailwind para modo claro (`bg-neutral-white`, `text-neutral-black`) y modo oscuro (`bg-neutral-black`, `text-neutral-white`).
- **Componentes**: 
  - **Navbar**: Responsive, incluye botón hamburguesa en móvil y selector de modo oscuro.
  - **Footer**: Adaptable a modo oscuro y claro, incluye redes sociales y logo.
  - **Cards**: Contenedores de información con imágenes, título, subtítulo y contenido opcional.
  - **CarruselSection**: Sección con imágenes de fondo que rotan automáticamente y cards de valoraciones de clientes.
  -**CardsSection**: Seccion que añade todos los cards con la información correspondiente
  -**ContactForm**: Formulario utilizado el el **ContactSection**
  -**FuncionamientoSection**: Seccion que describe como se realizan los proyectos en la empresa

- **Persistencia**: El `DarkModeButton` almacena la preferencia del usuario en `localStorage` y respeta la configuración automática del sistema.


## Animaciones y transiciones

- **Hover effects**: Escala (`scale-105`) en cards y dark mode button.
- **Transiciones**: Suavizadas con `transition-colors` y `transition-transform` de Tailwind.
- **Carrusel**: Transición suave entre fondos (`translateX` con `duration-1000`).


## Variantes avanzadas de componentes

- `DarkModeButton`: Cambia el modo de toda la página y se adapta al sistema operativo.
- `Navbar`: Cambia de color según el modo, incluye hamburguesa y dark mode.
- `Cards`: Imágenes responsivas, clic para abrir modal y efecto hover.
- `Carrusel`: Rotación automática de imágenes de fondo y overlays con texto.
- Iconos reemplazados por imágenes personalizadas para mayor branding.

## Persistencia del modo noche

El modo oscuro se mantiene incluso al recargar la página gracias a `localStorage`.  
El botón detecta la configuración del sistema operativo al iniciar la página.

## Proyecto Figma

https://www.figma.com/design/hkJXmpDEhZYMNKLQp9wyfo/AiDan-Creative?node-id=0-1&t=ikfGS0NBJ93Vf48A-1
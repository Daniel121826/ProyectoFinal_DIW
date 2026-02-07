export default function Card({
  title,
  subtitle,
  image,
  children,
  className = "",
  darkMode,
}) {
  return (
    <div
      className={
        darkMode
          ? `bg-gray-800 shadow-lg rounded-xl overflow-hidden
        flex flex-col text-white
        ${className}`
          : `bg-white shadow-lg rounded-xl overflow-hidden
        flex flex-col text-black
        ${className}
      `
      }
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-3">
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {subtitle && <h4 className="text-sm">{subtitle}</h4>}
        <div>{children}</div>
      </div>
    </div>
  );
}

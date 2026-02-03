export default function Button({
  text = "Botón",
  onClick,
  color = "blue",
  fullWidth = false,
  type = "button",
  className = ""
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${fullWidth ? "w-full" : "w-auto"}
        bg-${color}-600 hover:bg-${color}-700
        text-white font-semibold rounded-md
        transition-colors duration-300
        py-2 px-6
        ${className}
      `}
    >
      {text}
    </button>
  );
}



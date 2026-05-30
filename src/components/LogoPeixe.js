export default function LogoPeixe({ width = 120, height = 55, color = '#ffffff', className = '' }) {
  return (
    <svg
      viewBox="0 0 200 110"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lactifoz"
      className={className}
    >
      {/* Corpo do peixe — forma vesica piscis */}
      <path
        d="M48,55 C65,12 148,12 168,55 C148,98 65,98 48,55 Z"
        stroke={color}
        strokeWidth="4.5"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Cauda esquerda — dois ramos em V */}
      <path
        d="M48,55 L18,28"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M48,55 L18,82"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Cruzamento interior — detalhe estilístico do logo */}
      <path
        d="M75,35 L128,75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M75,75 L128,35"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Barbatana dorsal */}
      <path
        d="M95,14 Q104,3 118,11"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Olho */}
      <circle cx="148" cy="49" r="5" fill={color} />

      {/* Marca registada */}
      <text
        x="174"
        y="24"
        fontSize="11"
        fill={color}
        fontFamily="Arial, sans-serif"
        opacity="0.8"
      >®</text>
    </svg>
  );
}

function HamburgerIconSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-6"
      viewBox="0 0 24 24"
      width="24" // Añadir ancho explícito
      height="24" // Añadir altura explícita
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      ></path>
    </svg>
  );
}

export default HamburgerIconSVG;
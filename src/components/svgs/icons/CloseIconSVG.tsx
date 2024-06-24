function CloseIconSVG() {
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
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}

export default CloseIconSVG;

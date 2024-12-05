interface ButtonProp {
  onClick: () => void;
}

function Button({ onClick }: ButtonProp) {
  return (
    <button
      onClick={() => onClick()}
      className="bg-green-500 text-white p-5 rounded-xl rounded-s-none flex justify-center"
      aria-label="Enviar valor"
    >
      Enviar
    </button>
  );
}

export default Button;

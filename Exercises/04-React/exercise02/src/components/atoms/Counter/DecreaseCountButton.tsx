interface DecreaseCountButtonProp {
  decreaseCount: () => void;
}

function DecreaseCountButton({ decreaseCount }: DecreaseCountButtonProp) {
  return (
    <button
      className="bg-red-500 rounded-lg p-4 my-7"
      onClick={() => decreaseCount()}
    >
      Decrementar
    </button>
  );
}

export default DecreaseCountButton;

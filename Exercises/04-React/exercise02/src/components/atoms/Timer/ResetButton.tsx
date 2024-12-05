interface ResetButtonProps {
  resetFunction: () => void;
}

function ResetButton({ resetFunction }: ResetButtonProps) {
  return (
    <button
      className="bg-red-500 text-white font-bold p-4 rounded-xl"
      onClick={() => resetFunction()}
    >
      RESET
    </button>
  );
}

export default ResetButton;

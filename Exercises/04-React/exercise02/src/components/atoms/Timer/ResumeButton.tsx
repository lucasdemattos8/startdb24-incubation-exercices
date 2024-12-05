interface ResumeButtonProp {
  itIsActive: boolean;
  pauseTimer: () => void;
  startTimer: () => void;
}

function ResumeButton({
  itIsActive,
  pauseTimer,
  startTimer,
}: ResumeButtonProp) {
  return (
    <button
      onClick={() => {
        if (itIsActive) {
          pauseTimer();
        } else {
          startTimer();
        }
      }}
      className={`${
        itIsActive ? "bg-yellow-500" : "bg-green-500"
      } rounded-lg p-4 my-7`}
    >
      {itIsActive ? "PAUSAR" : "INICIAR"}
    </button>
  );
}

export default ResumeButton;

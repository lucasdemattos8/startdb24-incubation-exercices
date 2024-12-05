import ResetButton from "../atoms/Timer/ResetButton";
import ResumeButton from "../atoms/Timer/ResumeButton";

interface TimerButtonsContainerProps {
  timeInSeconds: string;
  itIsActive: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

function TimerButtonsContainer({
  timeInSeconds,
  itIsActive,
  startTimer,
  pauseTimer,
  resetTimer,
}: TimerButtonsContainerProps) {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-5xl mb-16">{timeInSeconds}</h1>
      <ResumeButton
        itIsActive={itIsActive}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />
      <ResetButton resetFunction={resetTimer} />
    </div>
  );
}

export default TimerButtonsContainer;

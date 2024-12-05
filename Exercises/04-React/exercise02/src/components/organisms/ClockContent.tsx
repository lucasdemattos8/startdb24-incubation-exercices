import { useEffect, useState } from "react";
import TimerButtonsContainer from "../molecules/TimerButtonsContainer";

function ClockContent() {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeInSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeInSeconds(0);
  };

  return (
    <div className="text-center flex flex-col">
      <h1 className="font-semibold text-5xl mb-8">Cronometro</h1>
      <TimerButtonsContainer
        itIsActive={isActive}
        pauseTimer={pauseTimer}
        startTimer={startTimer}
        resetTimer={resetTimer}
        timeInSeconds={formatTime(timeInSeconds)}
      />
    </div>
  );
}

export default ClockContent;

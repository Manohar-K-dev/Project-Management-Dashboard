import { useState, useEffect } from "react";

const TimeTracker = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="relative p-3 sm:p-4 rounded-2xl overflow-hidden w-full h-56 sm:h-64 lg:h-full">
      <div className="absolute inset-0 bg-linear-to-br from-green-900 via-green-800 to-green-950"></div>

      <div
        className="absolute top-0 right-0 w-full h-full opacity-10"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.2) 0%, transparent 40%),
            radial-gradient(circle at 90% 60%, rgba(255,255,255,0.25) 0%, transparent 45%),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.15) 0%, transparent 35%)
          `,
        }}
      ></div>

      <div
        className="absolute top-0 right-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.05) 20px,
              rgba(255,255,255,0.05) 40px
            )
          `,
        }}
      ></div>

      <div className="relative z-10 flex flex-col gap-3 sm:gap-4 items-center justify-center h-full p-3 sm:p-4">
        <h3 className="text-white text-sm sm:text-base font-medium">
          Time Tracker
        </h3>

        <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider">
          {formatTime(seconds)}
        </div>

        <div className="flex gap-3 sm:gap-4">
          <button
            onClick={toggleTimer}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            {isRunning ? (
              <div className="flex gap-0.5 sm:gap-1">
                <div className="w-1 h-3.5 sm:w-1.5 sm:h-5 bg-gray-800 rounded"></div>
                <div className="w-1 h-3.5 sm:w-1.5 sm:h-5 bg-gray-800 rounded"></div>
              </div>
            ) : (
              <div className="w-0 h-0 border-l-8 sm:border-l-10 border-l-gray-800 border-t-[5px] sm:border-t-[7px] border-t-transparent border-b-[5px] sm:border-b-[7px] border-b-transparent ml-0.5 sm:ml-1"></div>
            )}
          </button>

          <button
            onClick={resetTimer}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;

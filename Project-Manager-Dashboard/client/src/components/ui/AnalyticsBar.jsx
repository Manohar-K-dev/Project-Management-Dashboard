import React from "react";

const AnalyticsBar = () => {
  const bars = [
    { day: "S", height: "h-20 sm:h-28", color: "stripe" },
    { day: "M", height: "h-24 sm:h-32", color: "bg-green-700" },
    { day: "T", height: "h-20 sm:h-24", color: "bg-green-500" },
    { day: "W", height: "h-28 sm:h-36", color: "bg-green-900" },
    { day: "T", height: "h-32 sm:h-40", color: "stripe" },
    { day: "F", height: "h-20 sm:h-24", color: "stripe" },
    { day: "S", height: "h-24 sm:h-32", color: "stripe" },
  ];

  return (
    <div className="flex flex-col gap-4 h-full w-full bg-white rounded-2xl p-3 sm:p-4">
      <h1 className="text-lg sm:text-xl font-medium">Project Analytics</h1>
      <div className="flex items-end justify-between flex-1">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`relative ${
                bar.height
              } w-6 sm:w-8 md:w-10 rounded-full ${
                bar.color == "stripe" ? "" : bar.color
              }`}
              style={
                bar.color === "stripe"
                  ? {
                      backgroundImage: `repeating-linear-gradient(45deg,#9ca3af,#9ca3af 3px, transparent 3px, transparent 8px)`,
                    }
                  : {}
              }
            ></div>
            <h3 className="text-gray-400 text-xs sm:text-sm">{bar.day}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsBar;

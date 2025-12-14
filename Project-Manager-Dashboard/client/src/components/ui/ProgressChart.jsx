import React from "react";

const ProgressChart = () => {
  const completed = 41;
  const inProgress = 30;

  const radius = 70;
  const strokeWidth = 24;
  const center = 100;

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const createArc = (startAngle, endAngle) => {
    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const completedEnd = (completed / 100) * 180;
  const inProgressEnd = completedEnd + (inProgress / 100) * 180;
  const pendingEnd = 180;

  return (
    <div className="bg-white p-3 sm:p-4 w-full h-full rounded-2xl flex flex-col">
      <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
        Project Progress
      </h2>

      <div className="relative flex items-center justify-center flex-1">
        <svg
          width="200"
          height="150"
          viewBox="0 0 200 150"
          className="w-40 h-32 sm:w-48 sm:h-36 lg:w-56 lg:h-44"
        >
          <defs>
            <pattern
              id="diagonalStripes"
              patternUnits="userSpaceOnUse"
              width="5"
              height="5"
              patternTransform="rotate(45)"
            >
              <rect width="5" height="5" fill="transparent" />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="5"
                stroke="#9ca3af"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          <path
            d={createArc(inProgressEnd, pendingEnd)}
            fill="none"
            stroke="url(#diagonalStripes)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          <path
            d={createArc(completedEnd, inProgressEnd)}
            fill="none"
            stroke="#1a4d3a"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          <path
            d={createArc(0, completedEnd)}
            fill="none"
            stroke="#2d7a5f"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute">
          <div className="text-center">
            <div className="font-medium text-3xl sm:text-4xl lg:text-5xl">
              {completed}%
            </div>
            <div className="text-xs text-green-700">Project Ended</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 sm:mt-4 flex-wrap gap-2">
        <div className="flex items-center gap-1">
          <div className="bg-[#2d7a5f] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"></div>
          <span className="text-gray-700 text-xs">Completed</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-[#1a4d3a] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"></div>
          <span className="text-gray-700 text-xs">In Progress</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
            style={{
              backgroundImage: `repeating-linear-gradient(120deg,#9ca3af,#9ca3af 1px, transparent 3px, transparent 4px)`,
            }}
          ></div>
          <span className="text-gray-700 text-xs">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;

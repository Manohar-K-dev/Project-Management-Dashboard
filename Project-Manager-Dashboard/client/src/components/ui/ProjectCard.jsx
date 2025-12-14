import React from "react";
// icons
import { LuArrowUpRight } from "react-icons/lu";
import { MdArrowDropUp } from "react-icons/md";

const ProjectCard = () => {
  const values = [
    {
      title: "Total Projects",
      count: 24,
      percentage: 5,
      description: "Increased from last month",
    },
    {
      title: "Ended Projects",
      count: 10,
      percentage: 6,
      description: "Increased from last month",
    },
    {
      title: "Running Projects",
      count: 12,
      percentage: 2,
      description: "Increased from last month",
    },
    {
      title: "Pending Projects",
      count: 2,
      description: "On Discuss",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {values.map((value, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 p-3 sm:p-4 rounded-2xl ${
            index === 0
              ? "bg-linear-to-tl from-green-700 to-green-950 text-white"
              : "bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg lg:text-xl font-medium">
              {value.title}
            </h2>
            <span className="bg-white p-1.5 sm:p-2 text-black border rounded-full hover:bg-gray-400 hover:text-white hover:border-transparent cursor-pointer text-sm sm:text-base">
              <LuArrowUpRight />
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium">
            {value.count}
          </h1>
          <div
            className={`flex items-center gap-2 text-xs ${
              index === 0 ? "text-green-200/50" : "text-green-800"
            }`}
          >
            <span className="flex items-center text-xs border px-1.5 py-0.5 rounded-lg">
              {value.percentage}
              <MdArrowDropUp className="text-sm" />
            </span>
            <p className="text-xs sm:text-sm">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;

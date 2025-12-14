import React from "react";
import { LuPlus, LuUser } from "react-icons/lu";

const TeamCard = () => {
  const teams = [
    {
      icon: <LuUser />,
      name: "Manohar K",
      WorkingOn: "GitHub Project Repository",
      status: "Completed",
    },
    {
      icon: <LuUser />,
      name: "Edwin Adenike",
      WorkingOn: "Integrate User Authentication System",
      status: "In Progress",
    },
    {
      icon: <LuUser />,
      name: "Isaac Oluwatemilorun",
      WorkingOn: "Develop Search and Filter Functionality",
      status: "Pending",
    },
    {
      icon: <LuUser />,
      name: "David Oshodi",
      WorkingOn: "Responsive Layout Homepage",
      status: "In Progress",
    },
  ];

  return (
    <div className="bg-white flex flex-col gap-3 sm:gap-4 h-full w-full p-3 sm:p-4 rounded-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-medium">Team Collaboration</h3>
        <button className="flex items-center justify-center border border-green-900 text-green-900 rounded-full cursor-pointer text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 w-full sm:w-auto">
          <LuPlus />
          Add Member
        </button>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {teams.map((team, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-4">
            <span className="size-8 sm:size-10 text-base sm:text-xl rounded-full flex justify-center items-center bg-gray-200">
              {team.icon}
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm sm:text-base truncate">
                {team.name}
              </h4>
              <p className="text-xs flex flex-col sm:flex-row sm:gap-1 font-medium">
                <span className="text-gray-400 hidden sm:inline">
                  Working On
                </span>
                <span className="text-gray-400 sm:hidden">On:</span>
                <span className="truncate">{team.WorkingOn}</span>
              </p>
            </div>
            <span
              className={`border text-xs p-1 rounded-md whitespace-nowrap ${
                team.status === "Completed"
                  ? "text-green-800 bg-green-100"
                  : team.status === "In Progress"
                  ? "text-yellow-800 bg-yellow-100"
                  : team.status === "Pending"
                  ? "text-red-800 bg-red-100"
                  : ""
              }`}
            >
              {team.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;

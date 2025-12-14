import React from "react";
// icons
import {
  LuCircleUserRound,
  LuGauge,
  LuGitPullRequest,
  LuLayoutDashboard,
  LuPlus,
  LuWebhook,
} from "react-icons/lu";

const Projects = () => {
  return (
    <div className="bg-white flex flex-col gap-4 sm:gap-6 lg:gap-8 rounded-xl w-full h-full p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-medium">Project</h3>
        <button className="flex items-center text-xs px-2 py-1 border border-green-900 text-green-900 rounded-full">
          <LuPlus />
          New
        </button>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <LuGitPullRequest className="size-4 sm:size-5" />
          <div>
            <h2 className="text-sm sm:text-base">Develop API Endpoints</h2>
            <p className="text-gray-400 text-xs">Due date: Jan 15, 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <LuCircleUserRound className="size-4 sm:size-5" />
          <div>
            <h2 className="text-sm sm:text-base">Onboarding Flow</h2>
            <p className="text-gray-400 text-xs">Due date: Jan 18, 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <LuLayoutDashboard className="size-4 sm:size-5" />
          <div>
            <h2 className="text-sm sm:text-base">Build Dashboard</h2>
            <p className="text-gray-400 text-xs">Due date: Jan 23, 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <LuGauge className="size-4 sm:size-5" />
          <div>
            <h2 className="text-sm sm:text-base">Optimize Page Load</h2>
            <p className="text-gray-400 text-xs">Due date: Feb 2, 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <LuWebhook className="size-4 sm:size-5" />
          <div>
            <h2 className="text-sm sm:text-base">Cross-Browser Tasting</h2>
            <p className="text-gray-400 text-xs">Due date: Feb 7, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

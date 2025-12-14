import React from "react";
// icons
import { LuPlus } from "react-icons/lu";
// ui
import ProjectCard from "./ui/ProjectCard";
import AnalyticsBar from "./ui/AnalyticsBar";
import Reminder from "./ui/Reminder";
import Projects from "./ui/Projects";
import TeamCard from "./ui/TeamCard";
import ProgressChart from "./ui/ProgressChart";
import TimeTracker from "./ui/TimeTracker";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="font-semibold text-2xl sm:text-3xl">Dashboard</h1>
          <p className="text-gray-400 text-sm">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <button className="flex items-center justify-center gap-2 border-2 border-green-800 bg-linear-to-tl from-green-700 to-green-950 text-white text-sm px-4 py-2 rounded-full outline-none cursor-pointer w-full sm:w-auto">
            <LuPlus />
            Add projects
          </button>
          <button className="flex items-center justify-center bg-white text-green-800 border-2 border-green-800 text-sm px-4 sm:px-6 py-2 rounded-full outline-none cursor-pointer w-full sm:w-auto">
            Import Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="col-span-1 sm:col-span-2 lg:col-span-12">
          <ProjectCard />
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-6">
          <AnalyticsBar />
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-3">
          <Reminder />
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1 sm:row-span-2">
          <Projects />
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-5 row-span-1 sm:row-span-2">
          <TeamCard />
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-1 sm:row-span-2">
          <ProgressChart />
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-3">
          <TimeTracker />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

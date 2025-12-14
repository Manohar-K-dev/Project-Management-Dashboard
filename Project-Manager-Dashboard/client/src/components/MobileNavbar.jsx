import React, { useState } from "react";
// ui
import MobileAppCard from "./ui/MobileAppCard.jsx";
// Icons
import {
  LuCalendarCheck2,
  LuCircleHelp,
  LuLayoutDashboard,
  LuLogOut,
  LuSettings,
  LuUsers,
  LuClipboardPlus,
  LuChartColumnIncreasing,
} from "react-icons/lu";

const MobileNavbar = () => {
  const [active, setActive] = useState("Dashboard");

  const menus = [
    { label: "Dashboard", icon: <LuLayoutDashboard /> },
    { label: "Tasks", icon: <LuClipboardPlus /> },
    { label: "Calender", icon: <LuCalendarCheck2 /> },
    { label: "Analytics", icon: <LuChartColumnIncreasing /> },
    { label: "Team", icon: <LuUsers /> },
  ];

  const generals = [
    { label: "Settings", icon: <LuSettings /> },
    { label: "Help", icon: <LuCircleHelp /> },
    { label: "Logout", icon: <LuLogOut /> },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Logo Section */}
      <div className="flex items-center gap-2 pb-4 border-b border-gray-300">
        <div className="w-5 cursor-pointer">
          <img src="/vite.svg" alt="Vite" />
        </div>
        <h1 className="font-medium text-lg cursor-pointer">Mano</h1>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-gray-400 text-xs">MENU</span>
        <div className="grid grid-cols-2 gap-3">
          {menus.map((menu) => (
            <div
              onClick={() => setActive(menu.label)}
              key={menu.label}
              className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl cursor-pointer ${
                active == menu.label
                  ? "bg-white text-black font-medium shadow-sm"
                  : "text-gray-500 bg-gray-50"
              }`}
            >
              <span
                className={`text-lg ${
                  active == menu.label ? "text-green-900" : "text-gray-500"
                }`}
              >
                {menu.icon}
              </span>
              <span className="text-xs text-center">{menu.label}</span>
              {menu.total && (
                <span className="absolute top-1 right-1 bg-green-900 text-white text-[8px] px-1 py-0.5 rounded-sm">
                  {menu.total}+
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-gray-400 text-xs">GENERAL</span>
        <div className="grid grid-cols-3 gap-3">
          {generals.map((general) => (
            <div
              key={general.label}
              onClick={() => setActive(general.label)}
              className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl cursor-pointer ${
                active == general.label
                  ? "bg-white text-black font-medium shadow-sm"
                  : "text-gray-500 bg-gray-50"
              }`}
            >
              <span
                className={`text-lg ${
                  active == general.label ? "text-green-900" : "text-gray-500"
                }`}
              >
                {general.icon}
              </span>
              <span className="text-xs text-center">{general.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-300">
        <MobileAppCard />
      </div>
    </div>
  );
};

export default MobileNavbar;

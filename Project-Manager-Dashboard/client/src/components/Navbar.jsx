import { useState } from "react";
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

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");

  const menus = [
    { label: "Dashboard", icon: <LuLayoutDashboard /> },
    { label: "Tasks", icon: <LuClipboardPlus />, total: 12 },
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
    <div className="hidden md:flex bg-gray-100 flex-col gap-8 rounded-2xl px-4 py-6 h-full">
      <div className="flex items-center gap-2">
        <div className="w-5 cursor-pointer">
          <img src="/vite.svg" alt="Vite" />
        </div>
        <h1 className="font-medium text-lg cursor-pointer">Mano</h1>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-gray-400 text-xs">MENU</span>
        <div className="flex flex-col justify-center gap-4 text-sm">
          {menus.map((menu) => (
            <div
              onClick={() => setActive(menu.label)}
              key={menu.label}
              className={`relative flex items-center gap-2 cursor-pointer ${
                active == menu.label
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              {active == menu.label && (
                <span className="absolute -left-4 -top-1.5 w-1.5 h-8 bg-linear-to-r from-green-800 to-green-600 rounded-r-lg"></span>
              )}
              <span
                className={`${active == menu.label ? "text-green-900" : ""}`}
              >
                {menu.icon}
              </span>
              <span>{menu.label}</span>
              {menu.total && (
                <span className="bg-green-900 text-white text-[8px] px-1 py-0.5 rounded-sm ml-auto">
                  {menu.total}+
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-gray-400 text-xs">GENERAL</span>
        <div className="flex flex-col justify-center gap-4 text-sm text-gray-500">
          {generals.map((general) => (
            <div
              key={general.label}
              onClick={() => setActive(general.label)}
              className={`relative flex items-center gap-2 cursor-pointer ${
                active == general.label
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              {active == general.label && (
                <span className="absolute -left-4 -top-1.5 w-1.5 h-8 bg-linear-to-r from-green-800 to-green-600 rounded-r-lg"></span>
              )}
              <span>{general.icon}</span>
              <span>{general.label}</span>
            </div>
          ))}
        </div>
      </div>
      <MobileAppCard />
    </div>
  );
};

export default Navbar;

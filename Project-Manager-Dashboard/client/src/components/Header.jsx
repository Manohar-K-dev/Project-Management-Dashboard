import React, { useState } from "react";
// icons
import {
  LuCommand,
  LuSearch,
  LuMail,
  LuBell,
  LuUser,
  LuMenu,
  LuX,
} from "react-icons/lu";
// Component
import MobileNavbar from "./MobileNavbar.jsx";

const Header = () => {
  const user = {
    name: "Manohar K",
    email: "manohar10102004@gmail.com",
  };
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-2 sm:gap-4 rounded-full px-4 py-2.5 bg-white w-full sm:w-auto">
          <span className="text-gray-500">
            <LuSearch />
          </span>
          <input
            type="search"
            placeholder="Search task"
            className="outline-none appearance-none text-sm text-gray-600 w-full bg-transparent"
          />
          <span className="hidden sm:flex items-center gap-1 bg-gray-200 rounded-md px-2 py-1 text-xs hover:bg-gray-300 cursor-pointer">
            <LuCommand className="stroke-1 text-xs" />F
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="md:hidden bg-linear-to-r from-green-700 to-green-900 text-white p-2.5 rounded-full hover:opacity-90"
            >
              {isMobileNavOpen ? <LuX size={18} /> : <LuMenu size={18} />}
            </button>

            <span
              title="Message"
              className="hidden sm:block bg-white p-2.5 sm:p-3 rounded-full hover:bg-gray-300 cursor-pointer text-gray-600"
            >
              <LuMail className="text-sm sm:text-base" />
            </span>
            <span
              title="Notification"
              className="hidden sm:block bg-white p-2.5 sm:p-3 rounded-full hover:bg-gray-300 cursor-pointer text-gray-600"
            >
              <LuBell className="text-sm sm:text-base" />
            </span>
            <span
              title="Profile"
              className="hidden sm:block bg-white p-2.5 sm:p-3 rounded-full hover:bg-gray-300 cursor-pointer text-gray-600"
            >
              <LuUser className="text-sm sm:text-base" />
            </span>
          </div>

          <div className="hidden md:block">
            <h3 title="Name" className="text-sm font-medium cursor-pointer">
              {user.name}
            </h3>
            <span title="E-Mail" className="text-gray-400 text-xs">
              {user.email}
            </span>
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="md:hidden mt-2 bg-gray-100 rounded-2xl p-4 animate-slideDown">
          <MobileNavbar />
        </div>
      )}
    </>
  );
};

export default Header;

import React from "react";
// icons
import { LuMedal } from "react-icons/lu";

const MobileAppCard = () => {
  return (
    <div className="p-3 sm:p-4 mt-4 sm:mt-6 lg:mt-18 space-y-4 sm:space-y-6 lg:space-y-8 bg-linear-to-t from-green-700 to-black text-white rounded-xl cursor-pointer">
      <div className="space-y-1 sm:space-y-2">
        <span className="text-sm sm:text-base">
          <LuMedal />
        </span>
        <h2 className="leading-5 text-sm sm:text-base mt-0.5 sm:mt-1">
          Download our Mobile App
        </h2>
        <p className="text-gray-400 text-xs">Get easy in another way</p>
      </div>
      <button className="bg-green-800 text-xs rounded-full py-2 sm:py-2.5 w-full hover:text-gray-100 hover:bg-green-900 transition cursor-pointer">
        Download
      </button>
    </div>
  );
};

export default MobileAppCard;

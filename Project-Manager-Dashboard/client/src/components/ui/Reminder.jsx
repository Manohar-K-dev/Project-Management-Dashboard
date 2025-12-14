import React from "react";
// icons
import { LuVideo } from "react-icons/lu";

const Reminder = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 bg-white rounded-xl h-full w-full p-3 sm:p-4">
      <h3 className="text-lg sm:text-xl font-medium">Reminders</h3>
      <div className="flex flex-col gap-2 sm:gap-3">
        <p className="text-lg sm:text-xl lg:text-2xl leading-5 sm:leading-6 text-green-900 font-medium">
          Meeting with Arc Company
        </p>
        <span className="text-xs sm:text-sm font-medium text-gray-400">
          Time: 02.00 pm - 04.00 pm
        </span>
      </div>
      <button className="flex items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg py-2.5 sm:py-3 mt-auto bg-linear-to-t from-green-700 to-[#004E3B] text-white cursor-pointer rounded-full">
        <LuVideo />
        Start Meeting
      </button>
    </div>
  );
};

export default Reminder;

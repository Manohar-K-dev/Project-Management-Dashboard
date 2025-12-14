import React from "react";
// components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row p-2 sm:p-4 gap-2 sm:gap-4 min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 w-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;

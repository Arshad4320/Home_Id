import React from "react";
import { Outlet } from "react-router-dom";

import SideBer from "../share/SideBer/SideBer";
import DashBordNavbar from "./../share/Navbar/DashbordNavbar";

const DashBoardLayout = () => {
  return (
    <div className="">
      <DashBordNavbar />
      <div className="flex justify-between">
        <div className="lg:[20%]   h-full ">
          <SideBer />
        </div>

        <div className="w-full lg:w-[80%] bg-gray-100 h-screen ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

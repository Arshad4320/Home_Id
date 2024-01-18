import React from "react";

import { Outlet } from "react-router-dom";
import DashBoard from "../pages/DashBoard/DashBoard";
import SideBer from "../share/SideBer/SideBer";

const DashBoardLayout = () => {
  return (
    <div className="flex ">
      <div className="lg:w-[20%] h-full bg-white  shadow-2xl ">
        <SideBer />
      </div>
      <div className="w-[100%] lg:w-[80%] h-full  bg-white">
        <Outlet />
        <DashBoard />
      </div>
    </div>
  );
};

export default DashBoardLayout;

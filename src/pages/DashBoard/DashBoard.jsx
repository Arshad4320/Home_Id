import React from "react";
import DashBordNavbar from "../../share/Navbar/DashbordNavbar";
import DeshboardProfile from "../../components/DeashBoard/DeashboardInfo/DeshboardProfile";
const DashBoard = () => {
  return (
    <div>
      <DashBordNavbar />
      <div className="bg-zinc-50 p-10 h-full">
        <DeshboardProfile />
      </div>
    </div>
  );
};

export default DashBoard;

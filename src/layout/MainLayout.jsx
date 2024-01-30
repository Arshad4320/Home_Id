import { Outlet } from "react-router-dom";
// import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";

import SharedNavbar from "../share/Navbar/SharedNavbar";
import MobileNavber from "../share/Navbar/MobileNavbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <SharedNavbar />
        <MobileNavber />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

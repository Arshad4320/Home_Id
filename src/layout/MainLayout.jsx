import { Outlet } from "react-router-dom";
// import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

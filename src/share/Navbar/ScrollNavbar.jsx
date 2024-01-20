/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo2 .png";

const ScrollNavbar = ({ show }) => {
  return (
    <div
      className={`bg-white hidden lg:block fixed top-0 w-full shadow-md transition-all duration-700 ease-in-out z-40 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between p-6">
        <div className="flex gap-3 items-center justify-center">
          <img src={logo} />
          <div>
            <Link className="text-gray-700 font-semibold text-md p-3" to="/">
              Home
            </Link>
            <Link
              className="text-gray-700 font-semibold text-md p-3"
              to="/admin/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/signin"
            className="text-gray-700 font-semibold text-md p-3"
          >
            Sign In
          </Link>
          <Link className="text-gray-700 font-semibold text-md p-3">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollNavbar;

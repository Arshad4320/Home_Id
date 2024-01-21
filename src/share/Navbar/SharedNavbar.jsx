/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/image/logo2 .png";

const SharedNavbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`bg-white shadow-md ${
          pathname === "/" ? "hidden" : "hidden lg:block"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between p-6 ">
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
            <Link
              to="/signup"
              className="text-gray-700 font-semibold text-md p-3"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedNavbar;

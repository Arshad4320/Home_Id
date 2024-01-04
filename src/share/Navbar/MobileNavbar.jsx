import { useState } from "react";
import { Link } from "react-router-dom";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import logo from "../../assets/image/logo.png";
const MobileNavber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routing = (
    <>
      <Link
        to="/"
        className="block  px-4 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block  px-4 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        About
      </Link>
      <Link
        to="/products"
        className="block  px-4 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Products
      </Link>
      <Link
        to="/login"
        className="block  px-4 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Login
      </Link>
    </>
  );

  return (
    <div className=" bg-primary block md:hidden  transition-all duration-700 ease-in-out p-4 0  shadow-md ">
      <div className="flex justify-between    ">
        <button
          onClick={toggleMenu}
          className=" text-white  focus:outline-none duration-700 ease-in-out flex"
        >
          {isMenuOpen ? (
            <HiMiniXMark className=" h-6 w-6 transition-all duration-700 ease-in-out  ml-4   " />
          ) : (
            <div className="text-white">
              <FaOutdent className=" h-6 w-6 transition-all duration-700 ease-in-out  ml-4" />
            </div>
          )}
        </button>

        <div className=" sm:block md:block   xl:hidden   font-semibold w-[170px] h-[40px] px-5  rounded-md  lg:hidden ">
          <img className="w-ful h-full" src={logo} alt="" />
        </div>
      </div>
      {/* Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:block xl:block  `}>
        {/* Menu Content */}
        <div className=" scroll-m-3 ">
          <ul className="space-y-2 ">
            <li className="">{routing}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;

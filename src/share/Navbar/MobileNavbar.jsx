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
        className="block  px-2 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block  px-2 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        About
      </Link>
      <Link
        to="/products"
        className="block  px-2 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Products
      </Link>
      <Link
        to="/login"
        className="block  px-2 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Login
      </Link>
    </>
  );

  return (
    <div className=" bg-primary block lg:hidden  transition  delay-1000 ease-linear duration-1000 p-4 0  shadow-md ">
      <div className="flex justify-between    ">
        <div className=" font-semibold w-[170px] h-[40px] px-2  rounded-md  ">
          <img className="w-ful h-full" src={logo} alt="" />
        </div>
        <button
          onClick={toggleMenu}
          className=" text-white  focus:outline-none flex "
        >
          {isMenuOpen ? (
            <HiMiniXMark className=" h-6 w-6   mr-2     " />
          ) : (
            <div className="text-white">
              <FaOutdent className=" h-6 w-6   mr-2   " />
            </div>
          )}
        </button>
      </div>
      {/* Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"}   `}>
        {/* Menu Content */}
        <div>
          <ul className="space-y-2 ">
            <li>{routing}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;

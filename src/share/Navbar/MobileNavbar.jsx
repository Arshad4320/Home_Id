import { useState } from "react";
import { Link } from "react-router-dom";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import logo from "../../assets/image/logo.png";
import DashBoard from "./../../pages/DashBoard/DashBoard";
import MobileNavbarComponet from "./MobileNavbarComponet";

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
        to="/signin"
        className="block  px-2 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Sign In
      </Link>
      <Link
        to="/signup"
        className="block  px-2 py-2 font-semibold text-white hover:text-gray-200 rounded "
      >
        Sign Up
      </Link>
    </>
  );

  return (
    <div className=" bg-primary block lg:hidden   p-4 0  shadow-md ">
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
      <div className={` ${isMenuOpen ? "block" : "hidden"}   `}>
        {/* Menu Content */}
        <div>
          <ul className="space-y-2 ">
            <li>{routing}</li>
            <MobileNavbarComponet />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;

{
  /*const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <div>
      <div className="lg:hidden bg-primary">
        <div
          className={`absolute top-0 duration-1000  bg-primary ${
            isOpen ? " duration-700" : "-top-[1200px]"
          } z-30   p-3 w-full  h-4/5`}
        >
          <p
            className={` absolute top-5 right-2  text-white py-1 cursor-pointer`}
            onClick={toggleIsOpen}
          >
            <span>x</span>
          </p>
        </div>{" "}
        :
        <p className="duration-1000" onClick={toggleIsOpen}>
          open
        </p>
      </div>
    </div>
  );
};

export default MobileNavbar;
*/
}

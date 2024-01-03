import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
const Navbar = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex justify-between p-6">
        <div className="flex gap-3 items-center justify-center">
          <img src={logo} />
          <div>
            <Link className="text-white font-semibold text-md p-3" to="/">
              Home
            </Link>
            <Link className="text-white font-semibold text-md p-3" to="/">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link className="text-white font-semibold text-md p-3">Sign In</Link>
          <Link className="text-white font-semibold text-md p-3">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

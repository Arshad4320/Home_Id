import img from "../../assets/image/logo3.png";
const Footer = () => {
  return (
    <div className="bg-[#252525] py-6">
      <div className="max-w-7xl mx-auto mt-14">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div className="flex justify-center">
            <div>
              <img className="mb-3" src={img} />
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                58 Howard Street #2 San Francisco
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                contact@homeid.com
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                (+68)1221 09876
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                www.homeid.com
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <p className=" font-semibold text-xl transition duration-500 text-white mb-2">
                Popular Searches
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment for Rent
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment Low to hide
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Buy
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Rent
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <p className=" font-semibold text-xl transition duration-500 text-white mb-2">
                Popular Searches
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment for Rent
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment Low to hide
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Buy
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Rent
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <p className=" font-semibold text-xl transition duration-500 text-white mb-2">
                Popular Searches
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment for Rent
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment Low to hide
              </p>
              <div className="flex mt-4">
                <input
                  className="rounded-md rounded-r-none px-4 pr-4"
                  type="text"
                  placeholder="Enter and address neighborhood "
                />
                <button className="bg-secondary px-4 py-3 rounded-l-none rounded-md text-white flex items-center justify-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <span className="text-gray-400 font-medium transition duration-500 hover:text-white">
              Terms of Use
            </span>
            <span className="text-gray-400 font-medium transition duration-500 hover:text-white">
              {" "}
              Privacy Policy
            </span>
          </div>
          <p className="text-gray-400 font-medium transition duration-500 hover:text-white">
            © 2020 homeID. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

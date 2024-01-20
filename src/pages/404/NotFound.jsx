import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-72">
      <div>
        {" "}
        <h1 className="text-4xl md:text-5xl text-gray-600 text-center">
          404! Page is not Found
        </h1>
        <Link className="flex justify-center">
          <button className="bg-secondary px-4 py-2 mt-4 mb-10  rounded-md text-white font-semibold">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

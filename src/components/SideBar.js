
import { useSelector } from "react-redux";
import {
  FaHome,
  FaFire,
  FaShoppingCart,
  FaMusic,
  FaFilm,
  FaYoutube,
  FaUserAlt,
} from "react-icons/fa";
import { GiSpaceShuttle } from "react-icons/gi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);

  return (
    toggleMenu && (
      <div className="hidden md:block z-10 col-span-1 bg-white shadow-lg rounded-lg p-4 w-64 h-screen overflow-y-auto border border-gray-200 sticky top-14">
        <div>
          {/* User Profile Section */}
          <div className="flex items-center space-x-4 p-3 mb-4 bg-gray-100 rounded-md">
            <FaUserAlt className="text-gray-500 text-xl" />
            <div>
              <p className="font-semibold text-gray-800">Welcome, User!</p>
              <p className="text-sm text-gray-500">
                Explore your subscriptions
              </p>
            </div>
          </div>

          {/* Home Section */}
          <ul className="mb-4 space-y-2">
            <Link to={"/"}>
              <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
                <FaHome className="text-gray-500" />
                <span>Home</span>
              </li>
            </Link>
          </ul>

          {/* Subscriptions Section */}
          <h1 className="text-lg font-bold text-gray-800 mb-2">
            Subscriptions
          </h1>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <GiSpaceShuttle className="text-gray-500" />
              <span>Sci World</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaFire className="text-gray-500" />
              <span>Gaming World</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaYoutube className="text-gray-500" />
              <span>Adventure</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaFilm className="text-gray-500" />
              <span>Cosmos Knowledge</span>
            </li>
          </ul>

          {/* Divider */}
          <hr className="border-gray-300 mb-4" />

          {/* Explore Section */}
          <h1 className="text-lg font-bold text-gray-800 mb-2">Explore</h1>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaFire className="text-gray-500" />
              <span>Trending</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaShoppingCart className="text-gray-500" />
              <span>Shopping</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaMusic className="text-gray-500" />
              <span>Music</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaFilm className="text-gray-500" />
              <span>Movies</span>
            </li>
          </ul>

          {/* Divider */}
          <hr className="border-gray-300 mb-4" />

          {/* More from YouTube Section */}
          <h1 className="text-lg font-bold text-gray-800 mb-2">
            More from YouTube
          </h1>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaYoutube className="text-gray-500" />
              <span>YouTube Premium</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaYoutube className="text-gray-500" />
              <span>YouTube Studio</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaMusic className="text-gray-500" />
              <span>YouTube Music</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <FaYoutube className="text-gray-500" />
              <span>YouTube Kids</span>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default SideBar;

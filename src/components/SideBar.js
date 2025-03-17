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
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearchResults } from "../utils/searchSlice";

const SideBar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation(); // Get the current route
  const dispatch = useDispatch();
  // Check if the current route is the WatchPage
  const isWatchPage = location.pathname.startsWith("/watch");

  return (
    toggleMenu && (
      <div
        className={`${
          isWatchPage
            ? "fixed z-50" // WatchPage overlay
            : "sticky hidden md:block" // Sticky on main page
        } bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 w-64 h-screen overflow-y-auto top-14 left-0`}
      >
        <div>
          {/* User Profile Section */}
          <div className="flex items-center space-x-4 p-3 mb-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <FaUserAlt className="text-gray-500 dark:text-gray-300 text-xl" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Welcome, User!
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore your subscriptions
              </p>
            </div>
          </div>

          {/* Home Section */}
          <ul className="mb-4 space-y-2">
            <Link
              to="/"
              onClick={() => {
                dispatch(clearSearchResults()); // Clear search results
              }}
            >
              <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
                <FaHome className="text-gray-500 dark:text-gray-300" />
                <span>Home</span>
              </li>
            </Link>
          </ul>

          {/* Subscriptions Section */}
          <h1 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            Subscriptions
          </h1>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <GiSpaceShuttle className="text-gray-500 dark:text-gray-300" />
              <span>Sci World</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaFire className="text-gray-500 dark:text-gray-300" />
              <span>Gaming World</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaYoutube className="text-gray-500 dark:text-gray-300" />
              <span>Adventure</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaFilm className="text-gray-500 dark:text-gray-300" />
              <span>Cosmos Knowledge</span>
            </li>
          </ul>

          {/* Divider */}
          <hr className="border-gray-300 dark:border-gray-700 mb-4" />

          {/* Explore Section */}
          <h1 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            Explore
          </h1>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaFire className="text-gray-500 dark:text-gray-300" />
              <span>Trending</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaShoppingCart className="text-gray-500 dark:text-gray-300" />
              <span>Shopping</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaMusic className="text-gray-500 dark:text-gray-300" />
              <span>Music</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaFilm className="text-gray-500 dark:text-gray-300" />
              <span>Movies</span>
            </li>
          </ul>

          {/* Divider */}
          <hr className="border-gray-300 dark:border-gray-700 mb-4" />

          {/* More from YouTube Section */}
          <h1 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            More from YouTube
          </h1>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaYoutube className="text-gray-500 dark:text-gray-300" />
              <span>YouTube Premium</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaYoutube className="text-gray-500 dark:text-gray-300" />
              <span>YouTube Studio</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaMusic className="text-gray-500 dark:text-gray-300" />
              <span>YouTube Music</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-red-500 cursor-pointer text-gray-900 dark:text-white">
              <FaYoutube className="text-gray-500 dark:text-gray-300" />
              <span>YouTube Kids</span>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default SideBar;

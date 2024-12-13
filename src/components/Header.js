import { useEffect, useState } from "react";
import hamburgerMenu from "../assets/menu.png";
import youtubeLogo from "../assets/youtube.png";
import userIcon from "../assets/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleSuggestions = async () => {
    try {
      if (!searchQuery) return;
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();

      setSearchSuggestions(json[1] || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSuggestions();
    }, 200); // Debounce to prevent API overload
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleSearchView = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-md px-4 py-2 md:px-6">
      <div className="flex items-center justify-between w-full">
        {/* Hamburger Menu and Logo */}
        <div
          className={`flex items-center space-x-4 ${
            showSearchInput ? "hidden sm:flex md:flex" : ""
          }`}
        >
          <img
            onClick={toggleMenuHandler}
            className="w-8 cursor-pointer"
            src={hamburgerMenu}
            alt="Menu"
          />
          <div className="flex items-center space-x-2">
            <img className="w-8 md:w-10" src={youtubeLogo} alt="YouTube Logo" />
            <p className="text-lg md:text-xl font-semibold">YouTube</p>
          </div>
        </div>

        <div className="flex-grow mx-4 max-w-lg">
          {/* Always show search input on md and larger screens */}
          {showSearchInput || (
            <form className="hidden md:flex items-center flex-grow">
              <input
                className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <button
                className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-200"
                type="submit"
              >
                Search
              </button>
            </form>
          )}
          {/* For small screens, toggle search bar */}
          {!showSearchInput ? (
            <button
              onClick={toggleSearchView}
              className="sm:hidden p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
                />
              </svg>
            </button>
          ) : (
            <form className="flex items-center flex-grow">
              <input
                className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <button
                className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-200"
                type="submit"
              >
                Search
              </button>
              <button
                onClick={toggleSearchView}
                className="ml-2 p-2 rounded-full hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>

        {!showSearchInput && (
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
            src={userIcon}
            alt="User Icon"
          />
        )}
      </div>
    </div>
  );
};

export default Header;

import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import hamburgerMenu from "../assets/menu.png";
import youtubeLogo from "../assets/youtube.png";
import userIcon from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { addSuggestions } from "../utils/searchSlice";
import SearchFetcher from "./SearchFetcher";

const Header = () => {
  const dispatch = useDispatch();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const inputRef = useRef(null);

  const getSearchSuggestions = async () => {
    try {
      if (!searchQuery) return;
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSearchSuggestions(json[1] || []);
      dispatch(addSuggestions({ [searchQuery]: json[1] || [] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200); // Debounce to prevent API overload
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) setShowSearch(true);
  };

  const handleSearchComplete = () => {
    setSearchQuery("");
    setShowSearch(false);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleSearchView = () => {
    setShowSearchInput(!showSearchInput);
    setSearchSuggestions([]); // Clear suggestions
    setShowSuggestions(false); // Hide dropdown
    if (!showSearchInput) {
      setTimeout(() => {
        inputRef.current?.focus(); // Auto-focus input
      }, 0);
    }
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-2 md:px-6">
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
            <p className="text-lg md:text-xl font-semibold">VidNova</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-2xl">
          {/* Desktop Search */}
          {!showSearchInput && (
            <form
              className="hidden md:flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="flex-grow relative">
                <input
                  className="w-full border border-gray-300 rounded-l-full px-4 py-2 h-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  type="text"
                  placeholder="Search"
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setShowSuggestions(false)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* Search Suggestions */}
                {searchSuggestions.length > 0 && showSuggestions && (
                  <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg rounded-md z-50 px-4 py-2">
                    {searchSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                className="bg-gray-100 border border-gray-300 rounded-r-full px-5 h-10 hover:bg-gray-200 flex items-center justify-center"
                type="submit"
              >
                <FaSearch className="text-gray-600 w-5 h-5" />
              </button>
            </form>
          )}

          {/* Mobile Search */}
          {!showSearchInput ? (
            <button
              onClick={toggleSearchView}
              className="sm:hidden p-2 rounded-full hover:bg-gray-200 focus:outline-none h-10 w-10 flex items-center justify-center"
            >
              <FaSearch className="text-gray-600 w-6 h-6" />
            </button>
          ) : (
            <form
              className="flex items-center w-full"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="flex-grow relative">
                <input
                  ref={inputRef}
                  className="w-full border border-gray-300 rounded-l-full px-4 py-2 h-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  type="text"
                  placeholder="Search"
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setShowSuggestions(false)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* Search Suggestions */}
                {searchSuggestions.length > 0 && showSuggestions && (
                  <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg rounded-md z-50 px-4 py-2">
                    {searchSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                className="bg-gray-100 border border-gray-300 rounded-r-full px-5 h-10 hover:bg-gray-200 flex items-center justify-center"
                type="submit"
              >
                <FaSearch className="text-gray-600 w-5 h-5" />
              </button>
              <button
                onClick={toggleSearchView}
                className="ml-2 p-2 rounded-full hover:bg-gray-200 focus:outline-none h-10 w-10 flex items-center justify-center"
              >
                <HiX className="text-gray-600 w-6 h-6" />
              </button>
            </form>
          )}
        </div>

        {/* User Icon */}
        {!showSearchInput && (
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
            src={userIcon}
            alt="User Icon"
          />
        )}
      </div>

      {/* Search Results */}
      {showSearch && (
        <SearchFetcher
          searchQuery={searchQuery}
          onSearchComplete={handleSearchComplete}
        />
      )}
    </div>
  );
};

export default Header;

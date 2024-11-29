import hamburgerMenu from "../assets/menu.png";
import youtubeLogo from "../assets/youtube.png";
import userIcon from "../assets/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center justify-between bg-white shadow-lg px-4 py-2">
      {/* Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <img onClick={() => toggleMenuHandler()}  className="w-8 cursor-pointer" src={hamburgerMenu} alt="Menu" />

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-10" src={youtubeLogo} alt="YouTube Logo" />
          <p className="text-xl font-semibold">YouTube</p>
        </div>
      </div>

      {/* Search Bar */}
      <form className="flex items-center flex-grow mx-4 max-w-3xl">
        <input
          className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
        />
        <button
          className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-200"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* User Icon */}
      <img
        className="w-10 h-10 rounded-full cursor-pointer"
        src={userIcon}
        alt="User Icon"
      />
    </div>
  );
};

export default Header;

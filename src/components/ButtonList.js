import React, { useRef } from "react";
import Buttons from "./Buttons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "News",
    "Sports",
    "Music",
    "Gaming",
    "Movies",
    "Live",
    "Fashion",
    "Travel",
    "Education",
    "Tech",
    "Comedy",
    "Fitness",
    "Food",
    "DIY",
    "Podcasts",
    "History",
    "Science",
    "Art",
    "Trending",
    "Technology",
    "Vlogs",
    "Tutorials",
    "Entertainment",
    "Reviews",
    "Documentaries",
  ];

  const scrollContainerRef = useRef(null);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-14 z-40 bg-white shadow-sm w-full px-4 ${
        isMenuOpen
          ? "lg:left-[250px] lg:w-[calc(100%-250px)]"
          : "lg:left-0 lg:w-full"
      }`}
    >
      <div className="relative w-full flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md 
                     hover:bg-gray-200 hidden md:flex"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Scrollable Buttons */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide whitespace-nowrap py-3 px-8"
        >
          {buttonNames.map((button, index) => (
            <Buttons key={index} name={button} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md 
                     hover:bg-gray-200 hidden md:flex"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ButtonList;

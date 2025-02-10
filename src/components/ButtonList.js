import React, { useRef } from "react";
import Buttons from "./Buttons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-14 z-50 bg-white shadow-sm w-full px-4 lg:left-[250px] lg:w-[calc(100%-250px)]">
      <div className="relative w-full">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide whitespace-nowrap py-2"
        >
          {buttonNames.map((button, index) => (
            <Buttons key={index} name={button} />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ButtonList;

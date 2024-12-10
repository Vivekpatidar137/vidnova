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
    <div className="relative bg-white shadow-md">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide whitespace-nowrap px-4 py-2 max-w-full"
      >
        {buttonNames.map((button, index) => (
          <Buttons key={index} name={button} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ButtonList;

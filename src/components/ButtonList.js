import React from "react";
import Buttons from "./Buttons";

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
  ];

  return (
    <div className="sticky top-14 bg-white z-10 p-4 shadow-md overflow-x-auto whitespace-nowrap scrollbar-hide">
      {buttonNames.map((button, index) => (
        <Buttons key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;

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
    <div className="flex">
      {buttonNames.map((button, index) => (
        <Buttons key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;

// MainContainer.jsx
import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

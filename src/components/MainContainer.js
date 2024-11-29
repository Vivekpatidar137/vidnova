import React from "react";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

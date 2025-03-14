import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="grid grid-flow-col bg-white dark:bg-gray-900">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;

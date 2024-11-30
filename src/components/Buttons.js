import React from "react";

const Buttons = ({ name }) => {
  return (
    <div>
      <button className="bg-slate-100 px-3 p-1 m-2">{name}</button>
    </div>
  );
};

export default Buttons;

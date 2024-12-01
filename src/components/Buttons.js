import React from "react";

const Buttons = ({ name }) => {
  return (
    <button className="bg-slate-100 px-3 p-1 m-2 rounded-full hover:bg-slate-200 active:bg-slate-300 transition-all">
      {name}
    </button>
  );
};

export default Buttons;

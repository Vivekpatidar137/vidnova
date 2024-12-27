import React from "react";
import { API_KEY, SEARCH_LIST } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addButtonValue } from "../utils/searchSlice";

const Buttons = ({ name }) => {
  const dispatch = useDispatch();
  const getByButtonValue = async () => {
    try {
      const response = await fetch(SEARCH_LIST + name + "&key=" + API_KEY);
      const data = await response.json();
      dispatch(addButtonValue(data.items || []));
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <button
      className="bg-slate-100 px-3 p-1 m-2 rounded-full hover:bg-slate-200 active:bg-slate-300 transition-all"
      onClick={getByButtonValue}
    >
      {name}
    </button>
  );
};

export default Buttons;

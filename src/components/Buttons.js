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
      className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-[15px] font-medium px-5 py-2 rounded-lg m-2 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-600 transition-all whitespace-nowrap"
      onClick={getByButtonValue}
    >
      {name}
    </button>
  );
};

export default Buttons;

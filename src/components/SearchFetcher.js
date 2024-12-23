import { useEffect } from "react";
import { API_KEY, SEARCH_LIST } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchList } from "../utils/searchSlice";

const SearchFetcher = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const getSearchResults = async () => {
    if (!searchQuery) return;
    try {
      const response = await fetch(
        SEARCH_LIST + searchQuery + "&key=" + API_KEY
      );
      const data = await response.json();
      dispatch(addSearchList(data.items || []));
      console.log(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]); // Re-run when searchQuery changes
};

export default SearchFetcher;
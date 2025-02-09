import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
  },
  reducers: {
    addSuggestions: (state, action) => {
      return { ...state, ...action.payload };
    },
    addSearchList: (state, action) => {
      state.searchResults = action.payload || [];
    },
    addButtonValue: (state, action) => {
      state.searchResults = action.payload || [];
    },
    clearSearchResults: (state) => {
      state.searchResults = []; // Clear the search results
    },
  },
});

export const {
  addSuggestions,
  addSearchList,
  addButtonValue,
  clearSearchResults,
} = searchSlice.actions;
export default searchSlice.reducer;

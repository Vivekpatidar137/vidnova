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
  },
});

export const { addSuggestions, addSearchList } = searchSlice.actions;
export default searchSlice.reducer;

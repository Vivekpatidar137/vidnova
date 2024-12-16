import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSuggestions: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addSuggestions } = searchSlice.actions;
export default searchSlice.reducer;

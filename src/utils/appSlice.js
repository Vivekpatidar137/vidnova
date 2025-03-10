import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "light"; // Default to "light" if nothing is saved
};

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    theme: getInitialTheme(),
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme); // Save to localStorage
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme); // Save to localStorage
    },
  },
});

export const { toggleMenu, closeMenu, toggleTheme, setTheme } =
  appSlice.actions;

export default appSlice.reducer;

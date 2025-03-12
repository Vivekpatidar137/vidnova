import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../utils/appSlice";

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);

  // Apply the theme class to the document root
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Set initial theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default ThemeProvider;

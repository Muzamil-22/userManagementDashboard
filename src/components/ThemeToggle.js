import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(UserContext);

  return (
    <button
      className="p-2 border rounded-md focus:outline-none"
      onClick={toggleTheme}
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;

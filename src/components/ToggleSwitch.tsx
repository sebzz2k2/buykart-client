import React, { FC } from "react";
import { useTheme } from "../Context/ThemeContext";

import "./toggleSwitch.css";
const ToggleSwitch: FC = () => {
  const theme = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState(theme?.theme);

  const handleChange = () => {
    theme?.toggleTheme();
  };
  console.log("theme--SW", theme?.theme);

  return (
    <>
      <label className="toggle">
        <input
          className="toggle-checkbox"
          type="checkbox"
          defaultChecked={theme?.theme === "dark" ? true : false}
          onChange={handleChange}
        />
        <div className="toggle-switch"></div>
      </label>
    </>
  );
};

export default ToggleSwitch;

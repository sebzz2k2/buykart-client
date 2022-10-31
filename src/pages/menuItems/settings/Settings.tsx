import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import ToggleSwitch from "../../../components/ToggleSwitch";
import { useTheme } from "../../../Context/ThemeContext";

import { darkTheme } from "../../../extras/Themes/DarkTheme";
import { lightTheme } from "../../../extras/Themes/LightTheme";

const Settings = () => {
  const theme = useTheme();

  return (
    <Stack
      style={{
        background:
          theme?.theme === "dark"
            ? darkTheme.background.default
            : lightTheme.background.default,
      }}
    >
      <ToggleSwitch />
    </Stack>
  );
};

export default Settings;

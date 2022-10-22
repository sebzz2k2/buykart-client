import React, { FC, Fragment, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { lightTheme } from "./extras/Themes/LightTheme";
import { darkTheme } from "./extras/Themes/DarkTheme";

const queryClient = new QueryClient();

const App: FC = () => {
  const [checked, setChecked] = useState(false);
  const [newtheme, setTheme] = useState(true);
  const changeTheme = () => {
    setTheme(!newtheme);
    setChecked(!checked);
  };
  const appliedTheme = createTheme(newtheme ? darkTheme : lightTheme);

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={appliedTheme}>
          <Router>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  );
};

export default App;

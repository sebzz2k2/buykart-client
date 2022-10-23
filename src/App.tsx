import React, { FC, Fragment, useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home/Home";

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
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="home" element={<Home />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  );
};

export default App;

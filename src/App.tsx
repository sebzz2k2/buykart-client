import React, { FC, Fragment, useState, useEffect, Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Home from "./pages/Home/Home";
const Login = React.lazy(() => import("./pages/auth/Login"));
const Signup = React.lazy(() => import("./pages/auth/Signup"));
const Unauth = React.lazy(() => import("./pages/auth/Unauth"));

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { lightTheme } from "./extras/Themes/LightTheme";
import { darkTheme } from "./extras/Themes/DarkTheme";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./components/ProtectedRoute";
import LoadingSpinner from "./components/LoadingSpinner";

const queryClient = new QueryClient();

const App: FC = () => {
  const [checked, setChecked] = useState(false);
  const [newtheme, setTheme] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const changeTheme = () => {
    setTheme(!newtheme);
    setChecked(!checked);
  };

  useEffect(() => {
    const val = localStorage.getItem("user");
    if (val) {
      console.log("inLopp", val);
      setIsAuth(true);
    }
  }, []);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: isAuth,
    authenticationPath: "/unauthorized",
  };

  const appliedTheme = createTheme(newtheme ? darkTheme : lightTheme);

  return (
    // <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appliedTheme}>
        <Suspense fallback={<LoadingSpinner />}>
          <Router>
            <Routes>
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="unauthorized" element={<Unauth />} />
              <Route
                path="home"
                element={
                  <ProtectedRoute
                    {...defaultProtectedRouteProps}
                    outlet={<Home />}
                  />
                }
              />
            </Routes>
          </Router>
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
    // </AuthProvider>
  );
};

export default App;

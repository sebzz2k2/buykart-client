import React, { FC, useState, useEffect, Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Settings from "./pages/menuItems/settings/Settings";
const Login = React.lazy(() => import("./pages/auth/Login"));
const Signup = React.lazy(() => import("./pages/auth/Signup"));
const Unauth = React.lazy(() => import("./pages/auth/Unauth"));

import { AuthContextProvider, useAuth } from "./Context/AuthContext";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./components/ProtectedRoute";
import LoadingSpinner from "./components/LoadingSpinner";
import { ThemeContextProvider } from "./Context/ThemeContext";

const queryClient = new QueryClient();

const App: FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = useAuth();

  useEffect(() => {
    setIsAuth(true);
  }, [auth]);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: isAuth,
    authenticationPath: "/unauthorized",
  };

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
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
                <Route
                  path="products"
                  element={
                    <ProtectedRoute
                      {...defaultProtectedRouteProps}
                      outlet={<Products />}
                    />
                  }
                />{" "}
                <Route
                  path="cart"
                  element={
                    <ProtectedRoute
                      {...defaultProtectedRouteProps}
                      outlet={<Cart />}
                    />
                  }
                />
                <Route
                  path="orders"
                  element={
                    <ProtectedRoute
                      {...defaultProtectedRouteProps}
                      outlet={<Orders />}
                    />
                  }
                />
                <Route
                  path="settings"
                  element={
                    <ProtectedRoute
                      {...defaultProtectedRouteProps}
                      outlet={<Settings />}
                    />
                  }
                />
              </Routes>
            </Router>
          </Suspense>
        </QueryClientProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export default App;

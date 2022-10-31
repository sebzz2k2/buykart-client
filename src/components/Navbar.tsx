import React, { FC, useEffect, useState } from "react";

import Stack from "@mui/system/Stack";
import { Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

import "./navbar.css";

import AvatarWithMenu from "./AvatarWithMenu";
import { useTheme } from "../Context/ThemeContext";
import { darkTheme } from "../extras/Themes/DarkTheme";
import { lightTheme } from "../extras/Themes/LightTheme";

const homeStyles = {
  navlinks: {
    marginRight: "3rem",
    fontSize: "16px",
    fontWeight: 800,
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    fontFamily: "Arial",
  },
};

const Navbar: FC = () => {
  const [active, setActive] = useState("");
  const theme = useTheme();
  useEffect(() => {
    let path = window.location.pathname;
    setActive(path.substring(1));
  }, []);

  return (
    <Stack
      style={{
        background:
          theme?.theme === "dark"
            ? darkTheme.background.default
            : lightTheme.background.default,
      }}
      sx={{
        height: "5rem",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: " 0 1.75rem",
        color: "white",
      }}
    >
      <Typography
        style={{
          color:
            theme?.theme === "dark"
              ? darkTheme.text.primary
              : lightTheme.text.primary,
        }}
        sx={{ fontWeight: 900, fontSize: "27px" }}
      >
        buyKart
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Stack
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <NavLink
            to="/home"
            style={homeStyles.navlinks}
            className={active === "home" ? "activeUnderLine" : "hoverUnderline"}
          >
            <Typography
              sx={{ fontWeight: 800, fontSize: "1.1rem" }}
              style={{
                color:
                  active === "home"
                    ? theme?.theme === "dark"
                      ? darkTheme.text.tertiary
                      : lightTheme.text.tertiary
                    : theme?.theme === "dark"
                    ? darkTheme.text.primary
                    : lightTheme.text.primary,
              }}
            >
              Home
            </Typography>
          </NavLink>
          <NavLink
            to="/products"
            style={homeStyles.navlinks}
            className={
              active === "products" ? "activeUnderLine" : "hoverUnderline"
            }
          >
            <Typography
              sx={{ fontWeight: 800, fontSize: "1.1rem" }}
              style={{
                color:
                  active === "products"
                    ? theme?.theme === "dark"
                      ? darkTheme.text.tertiary
                      : lightTheme.text.tertiary
                    : theme?.theme === "dark"
                    ? darkTheme.text.primary
                    : lightTheme.text.primary,
              }}
            >
              Products
            </Typography>
          </NavLink>
          <NavLink
            to="/cart"
            style={homeStyles.navlinks}
            className={active === "cart" ? "activeUnderLine" : "hoverUnderline"}
          >
            <Typography
              sx={{ fontWeight: 800, fontSize: "1.1rem" }}
              style={{
                color:
                  active === "cart"
                    ? theme?.theme === "dark"
                      ? darkTheme.text.tertiary
                      : lightTheme.text.tertiary
                    : theme?.theme === "dark"
                    ? darkTheme.text.primary
                    : lightTheme.text.primary,
              }}
            >
              Cart
            </Typography>
          </NavLink>
          <NavLink
            to="/orders"
            style={homeStyles.navlinks}
            className={
              active === "orders" ? "activeUnderLine" : "hoverUnderline"
            }
          >
            <Typography
              style={{
                color:
                  active === "orders"
                    ? theme?.theme === "dark"
                      ? darkTheme.text.tertiary
                      : lightTheme.text.tertiary
                    : theme?.theme === "dark"
                    ? darkTheme.text.primary
                    : lightTheme.text.primary,
              }}
              sx={{ fontWeight: 800, fontSize: "1.1rem" }}
            >
              Orders
            </Typography>
          </NavLink>
        </Stack>
        <AvatarWithMenu />
      </Stack>
    </Stack>
  );
};

export default Navbar;

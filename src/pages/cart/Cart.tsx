import Stack from "@mui/material/Stack";

import React, { FC } from "react";
import Navbar from "../../components/Navbar";

const Cart: FC = () => {
  return (
    <Stack sx={{ background: "#111", height: "100vh" }}>
      <Navbar />
    </Stack>
  );
};

export default Cart;

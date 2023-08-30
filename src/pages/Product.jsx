import React from "react";
import SideNav from "../components/SideNav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import ProductList from "../products/ProductList";

export default function Product() {
  return (
    <div>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ProductList />
        </Box>
      </Box>
    </div>
  );
}

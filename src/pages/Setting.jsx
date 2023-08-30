import React from "react";
import SideNav from "../components/SideNav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Setting() {
  return (
    <div>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings</h1>
        </Box>
      </Box>
    </div>
  );
}

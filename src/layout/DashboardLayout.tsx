import { Box } from "@mui/material";
import DashboardHeader from "@/components/Navigation/Dashboard";
import React from "react";
import SideMenu from "@/components/Navigation/Dashboard/SideMenu";

const DashboardLayout = () => {
  return (
    <Box>
      <DashboardHeader />
      <Box>
        <SideMenu />
        <Box
          sx={{
            marginTop: "5.5rem",
            marginX: { xs: "1rem", sm: "1.5rem" },
            paddingX: { lg: "2rem" },
            marginLeft: { lg: "20%" },
          }}
        >
          <Box>Dashboard Content</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

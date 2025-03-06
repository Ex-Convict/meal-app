import { DashboardNavigation, HomeNavigation } from "@/constants/navigation";
import { Box, Drawer } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MenuItem from "../Navigation/Dashboard/MenuItem";
import CustomButton from "../Button";

interface MobileMenuDrawerProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

const MobileMenuDrawer = ({ open, onClose }: MobileMenuDrawerProps) => {
  const router = useRouter();
  const [activeElement, setActiveElement] = useState("");

  const handleMenuNavigation = (name: string, route: string) => {
    setActiveElement(name);
    router.push(route);
    onClose(false);
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          width: "100%",
          boxSizing: "border-box",
          position: "fixed",
          top: "5rem",
          paddingX: "1rem",
          paddingTop: "3rem",
        },
        "& .MuiModal-backdrop": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box sx={{ position: "relative", height: "calc(100% - 5rem)" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {HomeNavigation.map((nav, index) => (
            <MenuItem
              key={index}
              title={nav.name}
              route={nav.navigation}
              active={nav.name === activeElement}
              onClick={handleMenuNavigation}
            />
          ))}
        </Box>
        <CustomButton
          text="Get Started"
          sx={{
            width: "calc(100% - 4rem)",
            fontSize: "1.2rem",
            fontWeight: 600,
            padding: "1rem",
            borderRadius: "2px",
            position: "fixed",
            bottom: "5rem",
            left: "2rem",
          }}
        />
      </Box>
    </Drawer>
  );
};

export default MobileMenuDrawer;

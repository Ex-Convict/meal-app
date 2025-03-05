import { DashboardNavigation } from "@/constants/navigation";
import { Box, Drawer } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";

const SideMenu = () => {
  const router = useRouter();
  const [activeElement, setActiveElement] = useState("");

  const handleMenuNavigation = (name: string, route: string) => {
    setActiveElement(name);
    router.push(route);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", lg: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "20%",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
        },
      }}
      open
    >
      <Box sx={{ padding: "1rem" }}>
        <Box sx={{ paddingX: "1rem" }}>
          <Image
            src="/logos/biteiq.svg"
            width={180}
            height={50}
            alt="BiteIQ logo"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "2rem",
          }}
        >
          {DashboardNavigation.map((nav, index) => (
            <MenuItem
              key={index}
              title={nav.name}
              icon={nav.icon}
              route={nav.navigation}
              active={nav.name === activeElement}
              onClick={handleMenuNavigation}
            />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideMenu;

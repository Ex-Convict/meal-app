"use client";
import React, { useState } from "react";
import { Box, IconButton, List, ListItem } from "@mui/material";
import Image from "next/image";
import BiteIQLogo from "./logos/biteiq.png";
import { ArrowBack, Menu } from "@mui/icons-material";
import MobileMenuDrawer from "./MobileMenuDrawer";
import { HomeNavigation } from "@/constants/navigation";
import MenuItem from "../Navigation/Dashboard/MenuItem";
import { useRouter } from "next/router";
import CustomButton from "../Button";
// import MobileMenuDrawer from "./MobileMenuDrawer";

const Header = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  const [activeElement, setActiveElement] = useState("");

  const handleMenuNavigation = (name: string, route: string) => {
    setActiveElement(name);
    router.push(route);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex" },
        position: "fixed",
        top: 0,
        left: 0,
        minWidth: "100%",
        minHeight: "5rem",
        zIndex: 1,
        backgroundColor: "#FFF",
        padding: { xs: "1rem", lg: "1rem 3em" },
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "0.5px solid rgba(229, 231, 235, 1)",
      }}
    >
      <Box>
        <Image
          src="/logos/biteiq.svg"
          width={120}
          height={50}
          alt="BiteIQ logo"
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {HomeNavigation.map((nav, index) => (
            <MenuItem
              key={index}
              title={nav.name}
              route={nav.navigation}
              active={nav.name === activeElement}
              noHightlight
              onClick={handleMenuNavigation}
            />
          ))}
        </Box>
        <CustomButton
          text="Get Started"
          sx={{ fontWeight: 900, borderRadius: "2rem", paddingX: '1rem' }}
        />
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <IconButton
          aria-label="menu"
          size="large"
          sx={{ color: "rgba(128, 128, 128, 1)" }}
          onClick={() => setOpenDrawer((prev) => !prev)}
        >
          {openDrawer ? (
            <ArrowBack fontSize="inherit" />
          ) : (
            <Menu fontSize="inherit" />
          )}
        </IconButton>
      </Box>
      <MobileMenuDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
    </Box>
  );
};

export default Header;

"use client";
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import BiteIQLogo from "./logos/biteiq.png";
import { ArrowBack, Menu } from "@mui/icons-material";
import MobileMenuDrawer from "./MobileMenuDrawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        minWidth: "100%",
        minHeight: "5rem",
        zIndex: 0,
        backgroundColor: "#FFF",
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Image
          src="/logos/biteiq.svg"
          width={100}
          height={50}
          alt="BiteIQ logo"
        />
      </Box>
      <Box>
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

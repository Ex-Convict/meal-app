import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import TextComponent from "../TextComponent";
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        minWidth: "100%",
        maxHeight: {xs: '40rem', lg: '45%'},
        position: 'absolute',
        bottom: 0,
        backgroundColor: "rgba(17, 24, 39, 1)",
        paddingX: { xs: "1rem", lg: "3rem" },
        paddingY: { lg: "1.5rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          marginBottom: "3rem",
          gap: "2rem",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Image
            src="/logos/biteiq_white.svg"
            width={220}
            height={50}
            alt="BiteIQ logo"
          />
          <TextComponent
            bodyText
            color="rgba(156, 163, 175, 1)"
            text="Your personalized journey to better health through smarter meal choices."
            style={{
              fontSize: "1rem",
            }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TextComponent
            text="Quick Links"
            color="#fff"
            style={{ fontSize: "1.2rem", fontWeight: 700 }}
          />

          <List aria-label="Quick Links" sx={{}}>
            <ListItem
              component={"a"}
              href="/"
              sx={{ color: "rgba(156, 163, 175, 1)" }}
            >
              About us
            </ListItem>
            <ListItem
              component={"a"}
              href="/"
              sx={{ color: "rgba(156, 163, 175, 1)" }}
            >
              Features
            </ListItem>
            <ListItem
              component={"a"}
              href="/"
              sx={{ color: "rgba(156, 163, 175, 1)" }}
            >
              Pricing
            </ListItem>
            <ListItem
              component={"a"}
              href="/"
              sx={{ color: "rgba(156, 163, 175, 1)" }}
            >
              Contact
            </ListItem>
          </List>
        </Box>
        <Box sx={{ flex: 1 }}>
          <TextComponent
            text="Connect"
            color="#fff"
            style={{ fontSize: "1.2rem", fontWeight: 700 }}
          />
          <List aria-label="Connect with us">
            <ListItemIcon>
              <Facebook
                sx={{ color: "rgba(229, 231, 235, 1)", borderRadius: "50%" }}
              />
            </ListItemIcon>
            <ListItemIcon>
              <X sx={{ color: "rgba(229, 231, 235, 1)" }} />
            </ListItemIcon>
            <ListItemIcon>
              <Instagram sx={{ color: "rgba(229, 231, 235, 1)" }} />
            </ListItemIcon>
            <ListItemIcon>
              <LinkedIn sx={{ color: "rgba(229, 231, 235, 1)" }} />
            </ListItemIcon>
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          width: "90%",
          margin: "0 auto 2rem",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Divider
          sx={{
            border: " 1px solid rgba(31, 41, 55, 1)",
          }}
        />
      </Box>

      <Box sx={{ textAlign: "center", paddingBottom: '1rem' }}>
        <Typography sx={{ color: "rgba(156, 163, 175, 1)" }}>
          &copy; {` ${year} BiteIQ. All rights reserved.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

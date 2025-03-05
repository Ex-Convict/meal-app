
import { SideNavigation } from "@/constants/navigation";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton from "../Button";

interface MenuItemProps {
  title: string;
  icon: Record<string, React.ReactNode>;
  route: string;
  active: boolean;
  onClick: (name: string, route: string) => void;
}

interface MobileMenuDrawerProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

const MenuItem = ({ title, icon, active, route, onClick }: MenuItemProps) => {
  const [menuIcon, setMenuIcon] = useState<"active" | "default">("default");

  useEffect(() => {
    setMenuIcon(active ? "active" : "default");
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
      }}
      onClick={() => onClick(title, route)}
    >
      <IconButton size='large'>
        {icon[menuIcon] || icon.default}
      </IconButton>
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

const MobileMenuDrawer = ({ open, onClose }: MobileMenuDrawerProps) => {
  const router = useRouter();

  const [activeElement, setActiveElement] = useState("");

  const handleMenuNavigation = (name: string, route: string) => {
    setActiveElement(name);
    router.push(route);
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
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
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        {SideNavigation.map((nav, index) => (
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
    </Drawer>
  );
};

export default MobileMenuDrawer;

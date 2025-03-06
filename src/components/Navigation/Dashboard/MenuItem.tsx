import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface MenuItemProps {
  title: string;
  icon?: Record<string, React.ReactNode>;
  route: string;
  active: boolean;
  noHightlight?: boolean;
  onClick: (name: string, route: string) => void;
}

const MenuItem = ({
  title,
  icon,
  active,
  route,
  noHightlight,
  onClick,
}: MenuItemProps) => {
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
        borderRadius: "1rem",
        background: noHightlight
          ? "transparent"
          : active
          ? "rgba(255, 237, 213, 1)"
          : "transparent",
        "&:hover": {
          background: noHightlight ? "transparent" : "rgba(255, 237, 213, 0.5)",
        },
      }}
      onClick={() => onClick(title, route)}
    >
      <IconButton size="large">{icon?.[menuIcon] || icon?.default}</IconButton>
      <Typography
        sx={{
          fontSize: { xs: "1.2rem", lg: "1rem" },
          fontWeight: 600,
          fontFamily: "Montserrat",
          color: active ? "rgba(218, 111, 3, 0.99)" : "rgba(75, 85, 99, 1)",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default MenuItem;

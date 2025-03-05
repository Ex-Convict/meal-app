import React from "react";
import {
  FormatListBulleted,
  Home,
  HomeOutlined,
  LibraryBooks,
  LibraryBooksOutlined,
  SetMeal,
  SetMealOutlined,
  SettingsSuggest,
  SettingsSuggestOutlined,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export const SideNavigation = [
  {
    name: "Dashboard",
    navigation: "/",
    icon: {
      active: <SvgIcon component={Home} inheritViewBox color="inherit" />,
      default: (
        <SvgIcon component={HomeOutlined} inheritViewBox color="inherit" />
      ),
    },
  },
  {
    name: "Recommendations",
    navigation: "/recommendations",
    icon: {
      active: (
        <SvgIcon component={LibraryBooks} inheritViewBox color="inherit" />
      ),
      default: (
        <SvgIcon
          component={LibraryBooksOutlined}
          inheritViewBox
          color="inherit"
        />
      ),
    },
  },
  {
    name: "Recipes",
    navigation: "/recipes",
    icon: {
      default: (
        <SvgIcon
          component={FormatListBulleted}
          inheritViewBox
          color="inherit"
        />
      ),
    },
  },
  {
    name: "Meal Plans",
    navigation: "/meal-plans",
    icon: {
      default: (
        <SvgIcon component={SetMealOutlined} inheritViewBox color="inherit" />
      ),
      active: <SvgIcon component={SetMeal} inheritViewBox color="inherit" />,
    },
  },
  {
    name: "Settings",
    navigation: "/settings",
    icon: {
      default: (
        <SvgIcon
          component={SettingsSuggestOutlined}
          inheritViewBox
          color="inherit"
        />
      ),
      active: (
        <SvgIcon component={SettingsSuggest} inheritViewBox color="inherit" />
      ),
    },
  },
];

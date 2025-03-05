import React from "react";
import {
  Lightbulb,
  LightbulbOutlined,
  Person,
  PersonOutlineOutlined,
  Restaurant,
  RestaurantOutlined,
  SetMeal,
  SetMealOutlined,
  SettingsSuggest,
  SettingsSuggestOutlined,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export const HomeNavigation = [
  {
    name: "How it works",
    navigation: "/",
  },
  {
    name: "Features",
    navigation: "/",
  },
  {
    name: "Testimonials",
    navigation: "/",
  },
  {
    name: "Contact",
    navigation: "/",
  },
]
export const DashboardNavigation = [
  {
    name: "Dashboard",
    navigation: "/",
    icon: {
      active: (
        <SvgIcon
          component={Person}
          inheritViewBox
          color="inherit"
          sx={{ color: "rgba(218, 111, 3, 0.99)" }}
        />
      ),
      default: (
        <SvgIcon
          component={PersonOutlineOutlined}
          inheritViewBox
          color="inherit"
        />
      ),
    },
  },
  {
    name: "Recommendations",
    navigation: "/recommendations",
    icon: {
      active: (
        <SvgIcon
          component={Lightbulb}
          inheritViewBox
          color="inherit"
          sx={{ color: "rgba(218, 111, 3, 0.99)" }}
        />
      ),
      default: (
        <SvgIcon component={LightbulbOutlined} inheritViewBox color="inherit" />
      ),
    },
  },
  {
    name: "Recipes",
    navigation: "/recipes",
    icon: {
      default: (
        <SvgIcon component={Restaurant} inheritViewBox color="inherit" />
      ),
      active: (
        <SvgIcon
          component={RestaurantOutlined}
          inheritViewBox
          color="inherit"
          sx={{ color: "rgba(218, 111, 3, 0.99)" }}
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
      active: (
        <SvgIcon
          component={SetMeal}
          inheritViewBox
          color="inherit"
          sx={{ color: "rgba(218, 111, 3, 0.99)" }}
        />
      ),
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
        <SvgIcon
          component={SettingsSuggest}
          inheritViewBox
          color="inherit"
          sx={{ color: "rgba(218, 111, 3, 0.99)" }}
        />
      ),
    },
  },
];

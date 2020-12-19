import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Welcome from "../screens/Welcome";
import Settings from "../screens/Settings";
import Browse from "../screens/Browse";
import Login from "../screens/Login";
import Product from "../screens/Product";
import Explore from "../screens/Explore";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Explore,
    Browse,
    Product,
    Settings,
  },
  {
    defaultNavigationOptions: {},
  }
);

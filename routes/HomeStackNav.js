import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import Photo from "../screens/Photo";

const screens = {
  Home: {
    screen: Home,
  },
  Portfolio: {
    screen: Portfolio,
  },
  Photo: {
    screen: Photo,
  },
};

const StackNav = createStackNavigator(screens);

export default createAppContainer(StackNav);

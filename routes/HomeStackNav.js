/** Ajouter un style à la navbar
 *
 * 1.  définir defaultNavigationOptions
 * 2.  passer en argument defaultNavigationOptions  à stackNav
 *
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../style/Colors";

import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import Photo from "../screens/Photo";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Accueil",
      // headerStyle: { backgroundColor: Colors.blueColor},
    },
  },
  Portfolio: {
    screen: Portfolio,
  },
  Photo: {
    screen: Photo,
  },
};

/** 1  */

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: Colors.blueColor },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center",
    },
  },
};

/** 2 */
const StackNav = createStackNavigator(screens, defaultNavigationOptions);

export default createAppContainer(StackNav);

import { StyleSheet, Text, View } from "react-native";

import Colors from "./Colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  h1: {
    fontFamily: "InriaSans_700Bold",
    fontSize: 24,
    padding: 10,
  },

  h2: {
    fontFamily: "InriaSans_700Bold_Italic",
    fontSize: 18,
  },
  text: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 15,
  },
  profileImg: {
    width: 300,
    height: 300,
    borderRadius: 60,
  },
  infoContainer: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemContainer: {
    paddingTop: 10,
    alignItems: "center",
  },

});


/**
 *  1. Création d'un composant Logo
 *  2. Import du composant Logo
 *  3. Intégration du composant logo dans navigationOption
 */


import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../style/AppStyles";

/** 2 */
import Logo from './Logo'

const Portfolio = ({ navigation }) => {
  const handlePress = () => {
    navigation.replace({ routeName: "Photo" });
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.h1}>Portofolio</Text>
      <Text style={globalStyles.h2}>{navigation.getParam("name")}</Text>
      <Text style={globalStyles.h2}>{navigation.getParam("country")}</Text>
      <Text style={globalStyles.h2}>{navigation.getParam("totalImg")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("favColor")}</Text>
      <Button title="Vers Photos" onPress={handlePress} />
    </View>
  );
};



/** 3 */
Portfolio.navigationOptions = {
  headerTitle:  () => <Logo/>, 
  headerStyle:  {backgroundColor : "orangered"},
};



export default Portfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});

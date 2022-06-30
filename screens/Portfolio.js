import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../style/AppStyles";


const Portfolio = ({ navigation }) => {
  const handlePress = () => {
    navigation.replace({ routeName: "Photo" });
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.h1}>Portofolio</Text>
      <Text style={globalStyles.h2}>{navigation.getParam('name')}</Text>
      <Text style={globalStyles.text}>{navigation.getParam('country')}</Text>
      <Button title="Vers Photos" onPress={handlePress} />
    </View>
  );
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




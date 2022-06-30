import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../style/AppStyles";


const Photo = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <Button title="Go Back" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90ee90",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
export default Photo;

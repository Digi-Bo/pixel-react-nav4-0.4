import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/images/camera_icon.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Portfolio</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center"

    }, 

    image :  { 
        width: 30,
        height: 30,
    },
    text : {
        color : "white",
        paddingLeft : 20,
        fontWeight : "bold",
        fontSize: 20,
    }

});

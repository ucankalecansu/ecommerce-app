import { StatusBar, StyleSheet, View,Text } from "react-native";
import React from 'react';



const CustomScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CustomScreen</Text>
  </View>
  )
}

export default CustomScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
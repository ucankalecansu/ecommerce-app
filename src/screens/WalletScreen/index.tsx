import { StyleSheet, Text, View } from "react-native";
import React from 'react';


const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WalletScreen</Text>
    </View>
  )
}

export default WalletScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
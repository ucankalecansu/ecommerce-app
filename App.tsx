import { StatusBar, StyleSheet, View,Text } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import Tabs from "./src/navigation/Tab";
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
